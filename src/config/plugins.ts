const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = [
  require("../plugins/my-plugin.ts"),
  new VueLoaderPlugin(),
  [
    "@vuepress/blog",
    {
      directories: [
        {
          id: "post",
          dirname: "_posts",
          path: "/post/",
          itemPermalink: "/post/:year/:month/:day/:slug",
          pagination: {
            lengthPerPage: 10,
          },
        },
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ["tag", "tags"],
          path: "/tag/",
          layout: "Tag",
          // frontmatter: { title: 'Tag' },
          // itemlayout: 'Post',
          // itemlayout:"Layout",
          // scopeLayout: 'Tag',
          pagination: {
            perPagePosts: 3,
          },
        },
      ],
      // sitemap: {
      //   hostname: "https://not-me.fun",
      // },
    },
  ],
  [
    "vuepress-plugin-typescript",
    {
      tsLoaderOptions: {
        // ts-loader 的所有配置项
      },
    },
  ],
  ["@vuepress/last-updated"],
  [
    "@vuepress/active-header-links",
    {
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor",
    },
  ],
  [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: {
        "/": {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
        "/en/": {
          message: "New content is available.",
          buttonText: "Refresh",
        },
      },
      // popupComponent: "ZenUpdatePopup", // 更新新内容提示组件 
    },
  ],
];
