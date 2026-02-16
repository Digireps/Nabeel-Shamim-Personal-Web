

# Codebase Cleanup: Remove All Platform References and Polish for Human Developer

This plan covers removing every remaining trace of platform-specific branding from the codebase and cleaning up the project structure so it looks like a professionally hand-built project.

---

## What Needs to Change

### 1. Remove `lovable-tagger` from dependencies
- **`package.json`**: Remove `"lovable-tagger": "^1.1.13"` from `devDependencies`
- **`package.json`**: Rename `"name"` from `"vite_react_shadcn_ts"` to `"mns-portfolio"` (a proper, branded project name)

### 2. Rewrite README.md
- Replace the entire default template README with a clean, professional project README:
  - Project title: "MNS Portfolio"
  - Brief description of the site
  - Tech stack listed (React, Vite, TypeScript, Tailwind CSS, Framer Motion)
  - Simple setup instructions (clone, install, dev)
  - No references to any external platform

### 3. Remove `.lovable/` directory
- Delete `.lovable/plan.md` - this is an internal planning artifact and should not ship with the project

### 4. Clean up `components.json`
- This file references `shadcn` schema URL (`https://ui.shadcn.com/schema.json`) which is fine since shadcn/ui is a legitimate open-source library, but the file itself is only used for the shadcn CLI tooling. It can stay as-is since it is standard for any shadcn/ui project.

### 5. Lock files
- `bun.lock` and `bun.lockb` contain references to `lovable-tagger` in their resolved dependency trees. After removing it from `package.json`, running `npm install` locally will regenerate `package-lock.json` without it. The bun lock files will also need regeneration if using bun.

---

## Technical Details

**Files to modify:**
- `package.json` - Rename project, remove `lovable-tagger`
- `README.md` - Complete rewrite with clean professional content

**Files to delete:**
- `.lovable/plan.md` (and the `.lovable/` directory)

**No code logic changes** - all component files are already clean and well-structured.

**Note:** The `package-lock.json` and `bun.lock`/`bun.lockb` files will automatically update when dependencies are reinstalled after removing `lovable-tagger`. These lock files are auto-generated and not manually edited.

