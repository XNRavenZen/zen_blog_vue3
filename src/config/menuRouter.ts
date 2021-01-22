// import Vue from "vue";
/**
 * TODO 以下用到Vue.prototype的待修改
 */
const menuRouter = [
  {
    componentName: "RouterLinkComp",
    bind: {
      compName: "BaseIcon",
      path: "/",
      bindObj: {
        suffix: "menu"
      }
    },
    role: "menu"
  },
  {
    componentName: "RouterLinkComp",
    bind: {
      innerWord: "首页"
    },
    role: "nav"
  },
  {
    componentName: "RouterLinkComp",
    bind: {
      path: "/tag",
      innerWord: "标签"
    },
    role: "nav"
  },
  {
    componentName: "RouterLinkComp",
    bind: {
      path: "/Post",
      innerWord: "文章"
    },
    role: "nav"
  },
  /* {
    componentName: "RouterLinkComp",
    bind: {
      compName: "GithubCat",
      path: "/github",
    },
    role: "navIcon"
  }, */
  {
    componentName: "RouterLinkComp",
    bind: {
      path: "/configure",
      innerWord: "配置"
    },
    role: "nav"
  }
];

export { menuRouter };
