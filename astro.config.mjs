import { defineConfig } from "astro/config";
import { searchIndexing } from "./integrations/search-indexing.mjs";

export default defineConfig({
  site: "https://whyelixir.dev",
  output: "static",
  integrations: [searchIndexing()],
  publicDir: "./static",
  outDir: "./public",
  compressHTML: false,
});
