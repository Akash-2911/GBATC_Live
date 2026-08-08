# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static landing page for GBTAC (a SAIT capstone project, team GTA VI, for the ARK Net Zero Campus). Plain HTML/CSS/JS with no build step, no package manager, no framework. Deploys straight to GitHub Pages by pushing files — any edit shows up on refresh.

## Development

There is no build, lint, or test tooling in this repo. To preview changes, just open `index.html` in a browser, or serve the folder locally (e.g. `python -m http.server`) so relative paths behave the same as they will on GitHub Pages.

## Files

- `index.html` — entire page structure (header, hero/team section, demo section, 3D model section, footer)
- `style.css` — all styling, using CSS custom properties defined in `:root` for the color palette (`--c-green`, `--c-amber`, `--c-teal`, etc.) and fonts (`--font-display`, `--font-body`, `--font-mono`)
- `script.js` — self-contained IIFE that drives the header's "Save this page" bookmark popover (detects iOS/Android/Mac/other via `navigator.userAgent` to show the right bookmark instructions)
- `manifest.json` — web app manifest so "Add to Home Screen" shows the correct icon/name on Android
- `assets/` — icon, demo gif, and `GH.png` (greenhouse photo, used in the site section) live here

## Outstanding placeholders

These are known gaps in the current content, called out in `README.md`:

1. **Live demo** — `.demo-placeholder` in `index.html` (inside `.demo-frame`) should become `<img src="assets/demo.gif" alt="Live demo preview">` once a demo gif exists; the "View live demo" button's `href="#"` should point to the real `app-gbtac-dev` URL.
2. **Icons** — `assets/icon-192.png` and `assets/icon-512.png` are referenced by `index.html` and `manifest.json` but don't exist yet; without them the home-screen icon falls back to blank.

Resolved: team LinkedIn links are filled in (Mehdi has no LinkedIn icon by request). The "3D model" section was replaced with a static photo (`assets/GH.png`) instead of a `<model-viewer>`/Three.js viewer — see `.model-frame` in `style.css`.

When asked to fill in any of these, only change what's needed for that placeholder — don't restructure surrounding markup/CSS.
