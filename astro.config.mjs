import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
export default defineConfig({
  site: "https://mkv.io",
  integrations: [
    tailwind(),
    vue(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
    compress({
      img: false
    }),
  ],
});
