# Christmas Present Reveal (Static Site)

Two-page mobile-friendly Christmas reveal site:
- Home page: tap present -> animation -> navigate to reveal
- Reveal page: message + 2 screenshot gallery + lightbox

## 1) Add your images
Place files here:
- `assets/img/tree.jpg` (background image of tree)
- `assets/img/present-closed.png`
- `assets/img/present-open.png`
- `assets/img/screenshot-1.jpg`
- `assets/img/screenshot-2.jpg`

If your screenshot filenames differ, update the `SCREENSHOTS` array in `js/reveal.js`.

### Recommended image sizes
- Tree background: 1200px wide or more, JPG
- Presents: PNG with transparent background looks best
- Screenshots: JPG/PNG, keep file size reasonable (try < 1.5MB each)

## 2) Run locally (simple static server)

### Option A: Python
From the project folder:
- `python -m http.server 5173`
Open: http://localhost:5173

### Option B: Node
- `npx serve .`
Open the URL it prints.

## 3) Push to GitHub
1. Create a new repo on GitHub (e.g. `christmas-reveal`)
2. In your project folder:
   - `git init`
   - `git add .`
   - `git commit -m "Initial commit"`
   - `git branch -M main`
   - `git remote add origin https://github.com/YOURNAME/christmas-reveal.git`
   - `git push -u origin main`

## 4) Deploy to Render (Static Site)
1. Log into Render
2. New + -> **Static Site**
3. Connect your GitHub repo
4. Settings:
   - Build Command: (leave blank)
   - Publish Directory: `.`
5. Create Static Site

Render will give you a URL. Every push to `main` redeploys automatically.
