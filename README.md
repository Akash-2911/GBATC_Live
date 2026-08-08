# GBTAC landing page

Plain HTML/CSS/JS, no build step. Deploys directly to GitHub Pages.

## Files

- `index.html` — page structure
- `style.css` — all styling
- `script.js` — save/bookmark popover logic
- `manifest.json` — lets the "Add to Home Screen" icon and name show correctly on Android
- `assets/` — icon, demo gif, and the greenhouse photo (`GH.png`) live here

## Things to fill in

1. **Live demo** — replace the placeholder `<div class="demo-placeholder">` block with:
   ```html
   <img src="assets/demo.gif" alt="Live demo preview">
   ```
   and update `href="#"` on the "View live demo" button to your real `app-gbtac-dev` URL.
2. **Icons** — add `assets/icon-192.png` and `assets/icon-512.png` (square, your logo) so the home screen icon looks right instead of a blank default.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo (or a subfolder of your existing `gbtac-visualization` repo).
2. In the repo, go to Settings → Pages.
3. Under "Source", pick the branch (e.g. `main`) and folder (`/` or `/docs`, wherever these files live).
4. Save. GitHub gives you a URL like `https://akash-2911.github.io/gbtac-visualization/`.

No build step, so any edit you push shows up on refresh.
