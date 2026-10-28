# Hack the Desk – immersive HTML version

## Launch
Open `index.html`. Use **FULLSCREEN** or press `F`. Use **THEME** or press `T` to switch between dark and light mode.

## GitHub Pages
The root already contains `.nojekyll`, `manifest.webmanifest`, and `.github/workflows/deploy-pages.yml`. Push the extracted contents to the `main` branch and set Pages source to **GitHub Actions**.

## Customisation
Edit `config/game-config.js` to change evidence text, risks, recommendations, or compromised applications. The main desk objects and their placement are defined in `index.html` CSS using percentage-based coordinates.

No visible interaction reveals a destination slide. Hover only highlights the object.

## Facilitation
On click, defensive actions are intentionally hidden. Discuss participant ideas first, then use **REVEAL ATTACK OPTIONS**. Use **REVEAL DEFENSIVE ACTIONS** only after the debrief. Attack examples are derived from the PowerPoint speaker notes and can be edited in `config/game-config.js`.
