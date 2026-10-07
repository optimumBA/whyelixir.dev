# whyelixir.dev

[whyelixir.dev](https://whyelixir.dev/) is a landing page explaining why Elixir is a great choice for building scalable, maintainable software.

## Start here

- [Homepage](src/pages/index.astro) owns the product presentation and messaging.
- [Information layout](src/layouts/Information.astro), [shared footer](src/components/SiteFooter.astro) and [site styles](assets/css/app.css) own visitor-facing information pages and navigation.
- [Site identity](agent-site.json) owns structured company and contact details.
- Before release, compare every changed page and shared footer with the existing site at desktop and phone widths. Check typography, colors, wrapping, links and keyboard focus after a production build. Resolve regressions before publishing.

## Information pages

About, Contact and Privacy use the existing purple palette and local Montserrat font. Their shared footer also owns the homepage information links. Keep visitor copy concise and retain machine discovery separately.

After building, run `npm run preview -- --host 127.0.0.1 --port 4314` and inspect `/`, `/about/`, `/contact/` and `/privacy/`, including their footers, at desktop and phone widths. Machine Markdown, the agent guide and negotiation middleware remain in place.

## Folder map

- `src/pages/`: authored public pages.
- `src/layouts/` and `src/components/`: shared presentation and metadata.
- `assets/css/`: editable styles; `static/`: fonts, images and browser scripts.
- `scripts/` and `integrations/`: generated content and indexing.
- `functions/`: deployed content negotiation.
- `public/`: generated production output (ignored).

## Development

Install dependencies:

```bash
npm install
```

Build the site:

```bash
npm run build
```

Watch for changes and serve locally:

```bash
npm run serve
```

## Agent-readable pages

The build uses Python 3 through `scripts/build-agent-content.py` to generate Markdown from built HTML. `agent-site.json` supplies public identity and use guidance; authored pages own visible content, and `functions/_middleware.js` negotiates HTML and Markdown.

## Production release

Cloudflare Pages project `whyelixir-dev` deploys `main` from `optimumBA/whyelixir.dev`. It runs `npm run build` and publishes `public/`, including the existing Pages middleware.

1. Build and review the routes and responsive footer described above.
2. Check that local `main` has not diverged from `origin/main`, then commit only the approved changes.
3. With publication approval, push `main`; this starts the production deployment.
4. Verify the successful Pages deployment references the pushed commit, then check all changed live routes, styles, fonts, Markdown representations and discovery links through `https://whyelixir.dev`.
5. Repeat the desktop and phone visual review on the live site. Completion requires both rendered and technical checks. If deployment fails, inspect its logs and resume from the failed step; do not treat a successful push as a successful release. Follow the approved rollback scope before changing production again.
