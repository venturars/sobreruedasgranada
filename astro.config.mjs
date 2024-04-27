import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://remolquesalquilergranada.es",
  output: "hybrid",
  image: {
    service: passthroughImageService(),
  },
  integrations: [sitemap(), tailwind()],
  adapter: vercel(),
});
