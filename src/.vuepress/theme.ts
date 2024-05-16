import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme({

  // Brower Tag show
  favicon: "/website/favicon.ico",
  // Navbar Logo
  logo: "/website/favicon.ico",
  // iconAssets // TODO
  iconAssets: "fontawesome-with-brands",


  // darkmode button
  darkmode: "toggle",
  // print button
  print: false,
  // fullscreen button
  fullscreen: true,

  // 页脚
  // footer: "",
  copyright: 'Copyright &nbsp©&nbsp 2020-present &nbspMingHin&nbsp Choi &nbsp/&nbsp 無限進步',
  displayFooter: true,

  // hostname: "https://mister-hope.github.io",
  repoDisplay: false,
  repo: "vuepress-theme-hope/vuepress-theme-hope",

  author: {
    name: "安东尼",
    // url: "https://mister-hope.com",
  },




  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 博客相关
  blog: {
    name: "MingHin",
    avatar: "/myself/working.png",
    description: "社会上的事儿少打听",
    // TODO
    // intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "mailto:info@example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
      // MR_HOPE_AVATAR 是该文件最顶部，全局定义的一个变量 const MR_HOPE_AVATAR =。有必要可修改
    },
  },

  // 加密配置
  // encrypt: {
    // config: {
      // "/demo/encrypt.html": ["1234"],
    // },
  // },

  // 多语言配置
  // metaLocales: {
    // editLink: "在 GitHub 上编辑此页",
  // },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    // back to top botton
    // backToTop: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      tabs: true,     // 添加选项卡支持
      codetabs: true, // 代码块分组
      chart: true,    // 让 Markdown 文件支持图表
      echarts: true,  // 让 Markdown 文件支持图表
      mermaid: true,  // 让 Markdown 文件支持 mermaid 各种UML图
      katex: true,    // 使用 KaTeX 启用 TeX 支持
      mathjax: false, // 使用 mathjax 启用 TeX 支持，你只能启用其中一个，并且 katex 具有更高的优先级。
      vuePlayground: true, // 启用 vue 交互演示
      sub: true,      // 上下标
      sup: true,      // 上下标
      demo: true,     // 代码演示：让 Markdown 文件支持代码案例
      tasklist: true, // 任务列表 - [ ] 未勾选 -[x] 勾选
      mark: true,     // 文本高亮

      // 图片
      figure: true,     // 启用图片描述
      imgLazyload: true, // 启用图片懒加载
      // imgMark: true,    // 启用图片标记
      imgSize: true,    // 启用图片大小

      include: true,    // 让 Markdown 文件支持导入其他文件
      attrs: true,      // 属性支持：使用特殊标记为 Markdown 元素添加属性
      flowchart: true,  // 流程图让 Markdown 文件支持流程图
      footnote: true,   // 启动 Markdown 文件的脚注
      align: true,      // 启动自定义对齐

      // TODO
      vPre: true,
      // 由于 VuePress2 已经移除了 V1 的 v-pre 容器，因此提供了一个选项 vPre 支持它。
      component: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],


      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
}, {custom: true},);
