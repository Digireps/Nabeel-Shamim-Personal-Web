

# Major UI Enhancement: Stats Counter, Forbes Highlights, and Overall Polish

## 1. New Animated Stats Counter Section

Create a new `StatsSection.tsx` component placed immediately after the Ventures & Companies section. Inspired by the reference image, it will display four key metrics with animated counting numbers that increment when scrolled into view.

Stats to display:
- **$1M+** -- Revenue Generated
- **150+** -- Clients Served  
- **50+** -- Years Leadership Experience
- **350+** -- Reps Placed

Implementation details:
- Custom `useCountUp` hook using `requestAnimationFrame` for smooth number animation
- Numbers animate from 0 to target value over ~2 seconds with easing
- Triggered by Framer Motion's `whileInView` (fires once)
- Clean grid layout with top/bottom border lines, vertical dividers between stats
- Large bold Poppins numbers in teal, small DM Sans labels beneath
- Fully responsive: 4 columns on desktop, 2x2 on tablet, stacked on mobile

## 2. Highlight Forbes and FHM Recognitions

### Redesign PressSection to feature Forbes and FHM prominently:
- Add a **featured row** at the top with two large highlight cards for the Forbes Council membership and FHM Pakistan feature
- These cards will be larger (span 2 columns or full-width), with a teal accent left-border, bold source badge, and larger typography
- The remaining three Forbes articles stay in a standard 3-column grid below
- Add "FEATURED" badge on the highlight cards
- Add a subtle Forbes "F" and FHM wordmark as large watermark text in the card backgrounds

### Add a Recognition Banner
- Add a small "As Featured In" strip showing Forbes and FHM logos/wordmarks in a clean horizontal layout, placed either above the press grid or as part of the Introduction section
- Use large muted text (like "FORBES" and "FHM") as social proof indicators

## 3. Improved Footer

Replace the minimal footer with a more substantial, professional footer:
- **3-column layout**: Brand/tagline | Quick Links | Connect
- Left column: MNS logo + short one-liner tagline + "Forbes Business Council Member" badge
- Center column: Navigation links in a vertical list
- Right column: Social links (LinkedIn, Globe) + email CTA
- Bottom bar: Copyright + "Built in Pakistan" tagline
- Subtle teal top-border accent instead of plain grey

## 4. General UI Improvements

### Hero Section Polish
- Add a subtle animated gradient dot pattern or geometric shape behind the portrait for visual interest
- Make the "NABEEL SHAMIM" text even more impactful with letter-spacing adjustments

### Introduction Section
- Add a "Forbes Business Council Member" pill badge near the intro text
- Slightly larger paragraph text for better readability

### Board Seats / Roles Section  
- Add a highlighted badge for the Forbes Council row to make it stand out (e.g., teal background instead of white)

---

## Technical Details

**New files:**
- `src/components/StatsSection.tsx` -- animated counter section with custom counting hook

**Files to modify:**
- `src/pages/Index.tsx` -- add StatsSection import and place it after InvestmentsSection
- `src/components/PressSection.tsx` -- redesign with featured highlight cards for Forbes/FHM
- `src/components/Footer.tsx` -- complete redesign with 3-column layout and recognition badge
- `src/components/BoardSeatsSection.tsx` -- highlight Forbes Council row
- `src/components/HeroSection.tsx` -- minor visual enhancements
- `src/components/IntroductionSection.tsx` -- add Forbes badge

**No new dependencies needed** -- uses Framer Motion (already installed) for scroll-triggered counting animation via `useInView` and `animate`.

