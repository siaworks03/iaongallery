# Ion Gallery

Static connect page (plain HTML, CSS and JavaScript). No build step, no dependencies.

## Structure
```
index.html        page markup (links are here)
css/style.css     styles
js/main.js        logo fallback
assets/logo.png   put the gold logo here
.nojekyll         tells GitHub Pages to serve files as-is
```

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000

## Deploy on GitHub Pages
1. Push these files to the root of a GitHub repository.
2. Repo > Settings > Pages > Deploy from a branch > main > / (root) > Save.
3. The site is live at `https://<username>.github.io/<repo-name>/`.
