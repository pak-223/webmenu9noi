# Web Menu

This project hosts a simple restaurant menu written in HTML. The page allows customers to browse categories, search for dishes, and view an order summary. It is designed mainly for quick deployment as a static site.

## Folder Layout

```
src/       # HTML files
scripts/   # JavaScript files
styles/    # CSS files
assets/    # Images or other static assets
```

## Viewing the Site Locally

Open `src/index.html` in your browser or serve the repository with a small HTTP server:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000/src/index.html`.

## Dependencies

The menu relies on external CDN links for styling and screenshot support:

- [Tailwind CSS](https://cdn.tailwindcss.com)
- [html2canvas](https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js)

## Assets

All images used by the site should be stored in `src/assets/images/`. When
referencing these images in your HTML, use paths relative to the file where the
image is included. Keeping images in this folder helps keep the project
organized.

## License

This project is licensed under the [MIT License](LICENSE).
