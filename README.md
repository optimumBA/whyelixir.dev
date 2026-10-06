# whyelixir.dev

[whyelixir.dev](https://whyelixir.dev/) is a landing page explaining why Elixir is a great choice for building scalable, maintainable software.

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
