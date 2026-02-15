

# Creative Redesign - Modern & Minimal

A clean, Apple-inspired design with crisp whites, bold teal accent splashes, oversized typography, and generous whitespace. Every section will feel intentional and premium.

---

## Design Philosophy

- Pure white backgrounds with strategic teal color blocks and accent splashes
- Oversized, bold typography as a design element itself
- Generous whitespace creating breathing room and elegance
- Sharp geometric accents (teal rectangles, lines, blocks) instead of blurry glows
- Subtle but crisp animations (no heavy glow/glassmorphism)
- High contrast between text and background for readability

---

## 1. Global Styles (`src/index.css`)

- Background: pure white (#ffffff)
- Foreground: near-black (#111111)
- Primary: vibrant teal (keep current hue but increase saturation)
- Remove all glassmorphism (`.glass`), glow effects (`.glow-teal`), and gradient backgrounds
- Replace with new utilities:
  - `.accent-block` - solid teal background blocks for feature callouts
  - `.line-accent` - thin teal horizontal/vertical lines as dividers
  - `.text-massive` - utility for oversized display text (8-12rem)
- Clean up gradient-bg-hero to be pure white with a single subtle teal wash in one corner
- Ticker bar: solid teal background with white text (bold, high contrast)

## 2. Navbar (`Navbar.tsx`)

- Pure white background with crisp bottom border (1px solid light grey)
- No blur, no glass - just clean and sharp
- Logo "MNS" in solid teal, bold
- Nav links in dark grey, hover turns teal with a clean underline
- Mobile menu: clean white dropdown with teal accents

## 3. Hero Section (`HeroSection.tsx`)

- Pure white background, no gradient orbs or ambient effects
- Name "NABEEL SHAMIM" in massive black text (not teal gradient) - oversized, taking up visual space like a magazine cover
- Subtitle and description in medium grey
- Social icons: simple dark circles with white icons, teal on hover
- "Learn More" button: solid teal background, white text, rounded pill shape
- Portrait placeholder: large, clean rectangle with a solid light grey background and thin border - no glow, no blur
- Remove the "MNS" watermark entirely - let the name speak for itself
- Ticker bar: solid teal (#2ab5a0) full-width band with white uppercase text - creates a strong visual break

## 4. Introduction Section (`IntroductionSection.tsx`)

- Two-column layout: left side has "INTRO" as a massive light-grey watermark word, right side has content
- Content area: clean paragraphs with generous line-height
- Add a bold teal vertical line (4px wide) as a left border accent on the main text block
- Portrait: clean rectangle, no glow effects, just a subtle shadow
- "Learn More" button: outlined in teal, clean hover state

## 5. Ventures Section (`InvestmentsSection.tsx`)

- Cards: white background with a thin grey border, generous padding
- On hover: border turns teal, subtle upward translateY (2px), light shadow
- No glassmorphism - clean, flat cards
- Company icon area: teal circle with white icon
- Each card gets a thin teal top border (3px) as an accent stripe

## 6. Press Section (`PressSection.tsx`)

- Cards: white with thin grey border
- Thumbnail area: solid teal background (not gradient) with white source text centered
- Alternating thumbnail colors: teal, dark navy, slate - gives visual variety without gradients
- On hover: card lifts slightly with a clean shadow
- Title text: dark, bold, clean serif or Outfit font

## 7. Roles & Leadership (`BoardSeatsSection.tsx`)

- Clean list with generous spacing
- Each item: white card with a bold teal left border (4px)
- Initial circle: solid teal background with white letter
- Clean typography, no glow effects
- Subtle hover: background shifts to very light teal tint

## 8. Testimonials (`TestimonialsSection.tsx`)

- Large teal quotation mark as a decorative element
- Quote text in large, elegant font (Outfit, light weight)
- Clean white card with generous padding and a thin border
- Avatar circle: solid teal with white initial
- Navigation arrows: simple outlined circles, teal on hover
- Dot indicators: small circles, solid teal when active

## 9. Footer (`Footer.tsx`)

- Light grey background (#f8f8fa) to create section separation
- Thin teal top border line
- Clean dark text, teal hover on links
- Simple and minimal - no gradients

---

## Technical Summary

**Files to modify:**
- `src/index.css` - New minimal color variables, remove glass/glow utilities, add accent utilities
- `src/components/HeroSection.tsx` - Pure white bg, massive black text, solid teal ticker, clean portrait
- `src/components/Navbar.tsx` - Clean white navbar, no blur effects
- `src/components/IntroductionSection.tsx` - Clean layout with teal accent line
- `src/components/InvestmentsSection.tsx` - Flat white cards with teal accents
- `src/components/PressSection.tsx` - Clean cards with solid-color thumbnails
- `src/components/BoardSeatsSection.tsx` - Clean list with teal left borders
- `src/components/TestimonialsSection.tsx` - Clean card, large quote mark, minimal styling
- `src/components/Footer.tsx` - Light grey background, clean layout

**No new dependencies needed.**

