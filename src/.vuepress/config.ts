import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);
const pluginOrTheme = {
  clientConfigFile: path.resolve(__dirname, './client.ts'),
}

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "寺岛悠太",
  description: "Vercel Markdown Website",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { href: "https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,700;1,700&family=Noto+Sans+SC&display=swap", rel: "stylesheet"}],
  ],


  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },


});
