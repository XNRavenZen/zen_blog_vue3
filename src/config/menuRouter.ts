// import Vue from "vue";
/**
 * TODO 以下用到Vue.prototype的待修改
 */
const menuRouter = [
  {
    // componentName: "BaseIcon",
    // bind: {
    componentName: "RouterLinkComp",
    bind: {
      compName: "BaseIcon",
      path: "/",
      bindObj: {
        suffix: "menu"
      },
      onObj: [
        {
          type: "click",
          func: () => {
            // Vue.prototype.$store.commit("toggleAsiderMenu")
          }
        }
      ]
    },
    role: "menu"
  },
  {
    componentName: "RouterLinkComp",
    bind: {
      innerWord: "首页",
      onObj: [
        {
          type: "click",
          func: () => {
            // Vue.prototype.$store.commit("toggleAsiderMenu", false)
          }
        }
      ]
    },
    role: "nav"
  },
  {
    componentName: "RouterLinkComp",
    bind: {
      path: "/tag",
      innerWord: "标签",
      onObj: [
        {
          type: "click",
          func: () => {
            // Vue.prototype.$store.commit("toggleAsiderMenu", false)
          }
        }
      ]
    },
    role: "nav"
  },
  {
    componentName: "RouterLinkComp",
    bind: {
      path: "/Post",
      innerWord: "文章",
      onObj: [
        {
          type: "click",
          func: () => {
            // Vue.prototype.$store.commit("toggleAsiderMenu", false)
          }
        }
      ]
    },
    role: "nav"
  },
  {
    componentName: "RouterLinkComp",
    bind: {
      compName: "GithubCat",
      path: "/github",
      onObj: [
        {
          type: "click",
          func: () => {
            // Vue.prototype.$store.commit("toggleAsiderMenu", false)
          }
        }
      ]
    },
    role: "navIcon"
  }
];

export { menuRouter };
