import { writeFile } from "node:fs/promises";

export function searchIndexing() {
  let site;
  return {
    name: "search-indexing",
    hooks: {
      "astro:config:done": ({ config }) => { site = config.site; },
      "astro:build:done": async ({ pages, dir }) => {
        const urls = [...new Set(pages
          .filter(({ pathname }) => !/^\/?(?:404|500)(?:\.html|\/)?$/.test(pathname))
          .map(({ pathname }) => new URL(pathname, site).href))].sort();
        const escape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
        const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
          + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
          + urls.map((url) => `  <url><loc>${escape(url)}</loc></url>`).join("\n")
          + '\n</urlset>\n';
        const robots = `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${new URL("sitemap.xml", site).href}\n`;
        await Promise.all([
          writeFile(new URL("sitemap.xml", dir), sitemap),
          writeFile(new URL("robots.txt", dir), robots),
        ]);
      },
    },
  };
}
