

# Deep Performance Optimization -- Make It Load Instantly

## Root Causes Identified

After analyzing every component, here are the real bottlenecks still hurting production speed:

### 1. Render-Blocking Google Fonts (Critical)
The Google Fonts CSS is loaded via `@import` inside `src/index.css` (line 5). This is the **single worst pattern for web performance** -- it blocks the entire page render until both the CSS file AND all font files are downloaded. This alone can add 500ms-2s to first paint.

### 2. Framer Motion Overhead (Heavy)
Framer Motion is imported in **every single component** (Navbar, Hero, Introduction, Investments, Stats, Press, Board Seats, Testimonials, Gallery, Contact, Footer). The library is ~30-40KB gzipped and its animation runtime runs continuously. Three components run **infinite animations** simultaneously (Hero marquee, Investments marquee, Gallery marquee).

### 3. Hero Portrait Bundled in JavaScript
The hero portrait (`nabeel-portrait.png`) is imported via `import nabeelPortrait from "@/assets/..."` which bundles it as a base64 data URL or asset reference inside the JS bundle, increasing parse time. It should be in `/public` and referenced as a static URL.

### 4. Three Infinite Marquee Animations
Hero ticker, Investments carousel, and Gallery carousel all run infinite CSS/Framer animations simultaneously, causing constant GPU compositing and layout thrashing.

### 5. Missing `viewport={{ once: true }}` 
`StatsSection` line 66 uses `whileInView` without `once: true`, causing re-triggers on every scroll.

---

## Optimization Plan

### Step 1: Move Google Fonts to `<link>` with preload in `index.html`
Remove the `@import` from `index.css` and add `<link rel="preconnect">` + `<link rel="stylesheet">` with `display=swap` directly in `index.html`. This unblocks rendering entirely.

**Files:** `index.html`, `src/index.css`

### Step 2: Move hero images to `/public` folder
Move `nabeel-portrait.png` and `intro.png` from `src/assets/` to `public/` and reference them as static `/nabeel-portrait.png` URLs. This removes them from the JS bundle.

**Files:** `src/components/HeroSection.tsx`, `src/components/IntroductionSection.tsx`

### Step 3: Replace Framer Motion in HeroSection with CSS animations
The Hero is above-the-fold and loaded eagerly. Replace Framer Motion's `motion.div` with pure CSS fade-in animations (using the existing `animate-reveal` class in index.css). This removes Framer Motion from the critical rendering path entirely since all other sections are lazy-loaded.

**Files:** `src/components/HeroSection.tsx`

### Step 4: Add `once: true` to StatsSection
Fix the missing `viewport={{ once: true }}` on individual stat card `whileInView` animations.

**Files:** `src/components/StatsSection.tsx`

### Step 5: Use CSS `will-change` and `contain` on marquee containers
Add `will-change: transform` and `contain: layout style paint` to all three infinite marquee containers (Hero, Investments, Gallery) to promote them to GPU layers and prevent layout thrashing.

**Files:** `src/components/HeroSection.tsx`, `src/components/InvestmentsSection.tsx`, `src/components/GallerySection.tsx`

### Step 6: Reduce gallery image duplication
Currently gallery images are tripled (36 `<img>` tags). Reduce to doubled (24) which is still sufficient for the seamless loop effect, cutting DOM nodes by 33%.

**Files:** `src/components/GallerySection.tsx`

### Step 7: Add `loading="lazy"` and `decoding="async"` to all below-fold images
Ensure YouTube thumbnails in `YouTubeLite.tsx` and all other images have `decoding="async"` to avoid blocking the main thread during decode.

**Files:** `src/components/YouTubeLite.tsx`, `src/components/GallerySection.tsx`

---

## Expected Impact

| Metric | Before | After |
|--------|--------|-------|
| Font blocking time | 500-2000ms | 0ms (async) |
| JS bundle (hero path) | ~80KB+ (includes Framer) | ~15KB (CSS only) |
| Hero image in JS | base64/bundled | Static file, parallel load |
| DOM nodes (gallery) | 36 img tags | 24 img tags |
| Continuous repaints | 3 uncontained marquees | 3 GPU-composited layers |

## Technical Summary of File Changes

- **`index.html`** -- Add font `<link>` tags with preconnect
- **`src/index.css`** -- Remove `@import` for Google Fonts
- **`src/components/HeroSection.tsx`** -- Replace Framer Motion with CSS animations, move image to `/public`, add `will-change`/`contain` to marquee
- **`src/components/IntroductionSection.tsx`** -- Move intro image to `/public`
- **`src/components/StatsSection.tsx`** -- Add `viewport={{ once: true }}`
- **`src/components/InvestmentsSection.tsx`** -- Add `will-change`/`contain` to marquee
- **`src/components/GallerySection.tsx`** -- Reduce triplication to duplication, add `decoding="async"`
- **`src/components/YouTubeLite.tsx`** -- Add `decoding="async"`
