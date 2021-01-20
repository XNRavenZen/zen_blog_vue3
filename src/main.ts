import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "github-markdown-css";
import all from "@/components/index";

const app = createApp(App);
app
  .use(store)
  .use(router)
  .mount("#app");
Object.keys(all).forEach(fe => app.component(fe, all[fe]));
