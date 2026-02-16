# MNS Portfolio

Personal portfolio website for Nabeel, showcasing ventures, investments, board seats, press features, and testimonials.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations
- **shadcn/ui** for accessible UI components

## Getting Started

```bash
# Clone the repository
git clone <your-repo-url>
cd mns-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   └── ui/          # Reusable UI primitives (shadcn/ui)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page-level components
└── index.css        # Global styles and design tokens
```

## Build

```bash
npm run build
```

Output is generated in the `dist/` directory, ready for static hosting.
