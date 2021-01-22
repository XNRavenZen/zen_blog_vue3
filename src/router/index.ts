import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/Tag",
    name: "Tag",
    component: () => import("../views/Tag.vue")
  },
  {
    path: "/Post",
    name: "Post",
    component: () => import("../views/Post.vue")
  },
  {
    path: "/configure",
    name: "configure",
    component: () => import("../views/configure.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem("isLogined");
  // if (to.path === from.path) return;
  // console.error(to, from);
  // const toPath = isLogin || to.path == "/register" ? to.path : "/login";
  // console.error(toPath);
  // next(toPath);
  isLogin || to.path === "/" || to.path == "/login" || to.path == "/register"
    ? next()
    : next({
        name: "login",
        params: {
          toPath: to.path
        }
      });
});

export default router;
