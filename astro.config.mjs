import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://whyelixir.dev",
  output: "static",
  publicDir: "./static",
  outDir: "./public",
  compressHTML: false,
});
