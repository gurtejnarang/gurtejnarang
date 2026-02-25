# Gurtej Narang — Portfolio

A clean, VC-approachable personal portfolio built with React + Vite + Framer Motion.

## Stack

- **React 18** + **Vite**
- **Framer Motion** for animations
- **Google Fonts** — Syne (display) + DM Sans (body) + DM Mono (mono)
- Zero CSS frameworks — all hand-crafted styles

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### 1. Drive Folder

The Drive folder ID is set in `src/components/Portfolio.jsx`:
```js
const DRIVE_FOLDER_ID = '1bhJGzvYe2UNVw9BCfzmdbu0PRoApy6kD'
```
This is already pointing to your folder — just ensure it's shared as "Anyone with the link can view".

## Deploy to GitHub Pages

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# 4. Add homepage to package.json:
# "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO"

# 5. Deploy
npm run deploy
```

## Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo directly at vercel.com — Vite projects deploy with zero config.
