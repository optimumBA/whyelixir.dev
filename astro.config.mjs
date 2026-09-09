import { defineConfig, sharpImageService } from "astro/config";
import { searchIndexing } from "./integrations/search-indexing.mjs";

export default defineConfig({
  site: "https://whyelixir.dev",
  output: "static",
  image: {
    service: sharpImageService({
      webp: { effort: 6, smartSubsample: true },
      avif: { effort: 6 },
    }),
  },
  integrations: [searchIndexing()],
  publicDir: "./static",
  outDir: "./public",
  compressHTML: false,
});
