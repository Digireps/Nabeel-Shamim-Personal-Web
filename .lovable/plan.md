

# UI Overhaul: Bold Modern Fonts, Unflipped Photos, Clean Professional Design

Based on the client's feedback and your preferences, here's the complete redesign plan.

---

## 1. Remove Image Flip

Remove the `-scale-x-100` class from the portrait in both `HeroSection.tsx` and `IntroductionSection.tsx` so the photos appear in their original orientation.

---

## 2. Font Change: Switch to Poppins + DM Sans

Replace **Outfit** (headings) and **Inter** (body) with:
- **Poppins** (600-900 weights) for headings -- geometric, bold, modern
- **DM Sans** (300-600 weights) for body text -- clean, highly readable

Update the Google Fonts import in `index.css` and replace all `font-['Outfit']` references across every component with the new font family.

---

## 3. UI Improvements Across All Sections

### Global Styles (`index.css`)
- Replace gradient backgrounds with clean solid whites
- Remove glassmorphism (`.glass` class) -- replace with solid white cards with subtle shadows
- Strengthen the teal accent system with bolder usage
- Improve shadow/elevation system for cards
- Clean up the ticker with better contrast

### Navbar
- Sharper styling, better font weight, improved hover states
- Solid white background instead of translucent blur

### Hero Section
- Larger, bolder heading with Poppins
- Better visual hierarchy between heading, subtitle, and CTA
- Cleaner layout with stronger portrait presentation (solid border/shadow instead of glow)
- Remove faint "MNS" watermark text behind the portrait

### Introduction Section
- Cleaner card-like layout with better spacing
- Stronger typography hierarchy

### Ventures/Investments Section
- Replace glassmorphism cards with clean white cards + box shadows
- Better hover states with subtle teal accent borders

### Press Section
- Cleaner card design with better image placeholders
- Remove gradient backgrounds from cards, use solid teal/grey tones
- Better typography sizing

### Board Seats / Roles Section
- Cleaner list items with better spacing
- Stronger left-border accent

### Testimonials Section
- Replace glass card with clean white card + shadow
- Better quote typography
- Cleaner navigation dots

### Footer
- Solid border top instead of gradient border
- Better spacing and layout
- Update copyright year to 2026

---

## Technical Details

**Files to modify:**
- `src/index.css` -- font imports, utility classes, remove gradients/glass
- `src/components/HeroSection.tsx` -- remove flip, update fonts, clean layout
- `src/components/IntroductionSection.tsx` -- remove flip, update fonts
- `src/components/Navbar.tsx` -- update fonts, solid background
- `src/components/InvestmentsSection.tsx` -- update fonts, card styles
- `src/components/PressSection.tsx` -- update fonts, card styles
- `src/components/BoardSeatsSection.tsx` -- update fonts, list styles
- `src/components/TestimonialsSection.tsx` -- update fonts, card styles
- `src/components/Footer.tsx` -- update fonts, clean border

**No new dependencies needed** -- Poppins and DM Sans are loaded via Google Fonts CDN.

