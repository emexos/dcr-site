# DCR Site

Landing page for **DCR (Dexoron Cargo Realization)**:
- tool overview and docs links,
- commands and usage examples,
- install commands for Linux/Windows/macOS,
- language switcher.

The site is static and built from a single HTML template plus JSON translations.

## Structure

- `templates/index.tpl.html` - shared HTML template.
- `locales/en.json` - English texts (default locale).
- `locales/ru.json` - Russian texts.
- `scripts/build-i18n.js` - generates pages from locale files.
- `main.js` - UI logic, including language switcher.

## Build

```bash
npm run i18n:build
```

Output:
- `index.html` for `en` (route `/`)
- `ru/index.html` for `ru` (route `/ru/`)

Full build (i18n + styles):

```bash
npm run build
```

## Add A New Language

1. Create `locales/<lang>.json` using `locales/en.json` as a template.
2. Fill all translation keys (the structure must match `en.json`).
3. Add the language to `languageOptions` in `main.js`.
4. Set routes:
   - default language uses `/`,
   - other languages use `/<lang>/` (for example `/de/`).
5. Run `npm run i18n:build`.

German example:
- file: `locales/de.json`
- route: `/de/`
- output: `de/index.html`
