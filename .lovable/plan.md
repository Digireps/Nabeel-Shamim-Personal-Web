

# Fix Visual Regressions (Zero Appearance Changes)

## What Went Wrong

Two performance changes inadvertently altered the site's look and feel:

1. **Font loading method changed** from blocking (correct fonts immediately) to non-blocking with `display=swap` (shows fallback sans-serif first, then swaps). This causes a visible font flash/shift on every page load.

2. **Hero animations changed** from Framer Motion (spring physics) to CSS keyframes (cubic-bezier). Different animation curve = different perceived placement during entrance.

## Fix Plan

### Fix 1: Eliminate Font Flash While Keeping Speed Benefit

Keep the `<link>` tag in `index.html` (which is still faster than the old `@import` because the browser's preload scanner discovers it earlier), but change `display=swap` to `display=block` in the Google Fonts URL.

This means:
- Fonts are discovered immediately (faster than `@import` which had to wait for CSS to download first)
- Rendering waits for fonts before painting (no flash, identical visual to original)
- Net result: same appearance, slightly faster font load

**File:** `index.html` (line 32) -- change `display=swap` to `display=block`

### Fix 2: Restore Framer Motion in HeroSection

Bring back `motion` from `framer-motion` and restore the original animation wrappers with the spring/easing variants the site was built with. The performance cost is acceptable because all other heavy sections are already lazy-loaded, so Framer Motion only loads for the hero (which is eagerly rendered anyway).

**File:** `src/components/HeroSection.tsx`
- Re-add `import { motion } from "framer-motion"`
- Replace `animate-reveal` CSS classes with `motion.div` wrappers using the original `initial`, `animate`, and `transition` props
- Keep all other performance improvements (static `/public` image path, `will-change` on marquee, `fetchpriority="high"`)

## What Stays the Same (No Regressions)

All other performance improvements remain intact:
- Code splitting with React.lazy for below-fold sections
- YouTube Lite embed pattern
- Gallery lazy loading and `decoding="async"`
- `will-change: transform` on marquees
- Images served from `/public` (not bundled in JS)
- SEO structured data, sitemap, robots.txt

## Technical Summary

| File | Change |
|------|--------|
| `index.html` | Change `display=swap` to `display=block` in Google Fonts URL |
| `src/components/HeroSection.tsx` | Restore Framer Motion `motion.div` wrappers for entrance animations |

## Expected Result

- Identical visual appearance to the original site (same fonts, same animation feel)
- Still significantly faster than the original thanks to code splitting, YouTube Lite, image lazy loading, and improved font discovery
