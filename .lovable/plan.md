

# Website Performance Optimization Plan

## Problem Analysis

The website currently has several performance bottlenecks:

- **Gallery images**: 12 PNG images are duplicated to 24 `<img>` tags for the marquee effect, all loaded immediately on page load with no lazy loading
- **YouTube embeds**: 3 YouTube iframes load immediately, each pulling in ~500KB+ of YouTube's player resources
- **All sections load at once**: Every component is eagerly imported and rendered, even those far below the fold
- **No image dimension hints**: Images lack `width`/`height` attributes, causing layout shifts
- **Heavy animations**: Framer Motion animations run on all elements simultaneously

## Optimization Strategy

### 1. Lazy Load Below-Fold Sections

Use `React.lazy()` and `Suspense` in `Index.tsx` to defer loading of sections not visible on initial page load. Only `Navbar` and `HeroSection` will load eagerly. All other sections (Introduction, Investments, Stats, Press, Board Seats, Testimonials, Gallery, Contact) will load on demand.

### 2. Gallery Image Lazy Loading

Add `loading="lazy"` attribute to all gallery `<img>` tags so the browser only fetches images as they approach the viewport. Also add explicit `width` and `height` to prevent layout shifts.

### 3. YouTube Lite Embed Pattern

Replace the 3 heavy YouTube `<iframe>` embeds with a lightweight thumbnail + play button pattern. Each video will show a static YouTube thumbnail image initially. Only when the user clicks the play button will the actual iframe load. This saves ~1.5MB+ of initial page weight.

### 4. Hero and Intro Image Optimization

Add `loading="eager"` (explicit) with `fetchpriority="high"` to the hero portrait since it's above the fold. Add `loading="lazy"` to the intro section image since it's below the fold.

### 5. Reduce Animation Overhead

Add `will-change: transform` hints to marquee-animated elements and ensure all `whileInView` animations use `viewport={{ once: true }}` to stop observing after triggering.

---

## Technical Details

### Files to modify:

**`src/pages/Index.tsx`** -- Wrap below-fold sections with `React.lazy` and `Suspense`:
```text
const IntroductionSection = React.lazy(() => import("@/components/IntroductionSection"));
const InvestmentsSection = React.lazy(() => import("@/components/InvestmentsSection"));
// ... etc for all below-fold sections
```

**`src/components/GallerySection.tsx`** -- Add `loading="lazy"`, `width`, and `height` to each `<img>` tag.

**`src/components/PressSection.tsx`** -- Replace YouTube iframes with a clickable thumbnail component that loads the iframe only on user interaction. Thumbnail URL pattern: `https://img.youtube.com/vi/{videoId}/hqdefault.jpg`.

**`src/components/HeroSection.tsx`** -- Add `fetchPriority="high"` to the hero portrait image for faster above-fold rendering.

**`src/components/IntroductionSection.tsx`** -- Add `loading="lazy"` to the intro image.

### Expected Impact:
- Initial page load reduces from ~20+ HTTP requests to ~5-6
- YouTube resources (~1.5MB) deferred until user interaction
- Gallery images (~2-5MB of PNGs) loaded progressively as user scrolls
- Below-fold JavaScript chunks loaded on demand
- Faster First Contentful Paint (FCP) and Largest Contentful Paint (LCP)

