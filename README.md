# Asmit Mohan - Portfolio (React + Vite + Bootstrap)

## Quick start (local)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Build:
   ```bash
   npm run build
   ```

## Deploy to GitHub Pages
1. Create a GitHub repo (e.g. `asmit-portfolio`) and push this project to it.
2. In `package.json` set `"homepage"` to `https://<your-username>.github.io/<repo-name>`
3. In `vite.config.js` set `base: '/<repo-name>/'`
4. Install `gh-pages` (already in devDependencies). Then run:
   ```bash
   npm run predeploy
   npm run deploy
   ```
   This will publish the `dist` folder to `gh-pages` branch and GitHub Pages will serve it.
5. Alternately, you can create a GitHub Actions workflow to build and publish on push to `main`.

## Notes
- Replace the resume link in `src/components/Hero.jsx` with your actual Google Drive link.
- Replace `/profile.jpg` in `public` if you want a different photo.
