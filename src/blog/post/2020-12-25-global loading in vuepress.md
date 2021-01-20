---
title: 在vuepress里面用组合式API写全局loading
---

### 需求

页面请求时有家在动画的需求,实际情况中,不太想每个页面都加一个加载动画组件.于是......

### 代码

- 由于使用了组合式API,Vue.extend等改成了createApp

```js
import Vue from "vue";
import { default as compositionAPI, createApp } from "@vue/composition-api";
import DataLoading from "../components/DataLoading.vue";

Vue.use(compositionAPI);
const ToastSymbol = Symbol();

const app = createApp(DataLoading);
const showLoading = (isShow = true, options = {}) => {
  Vue.nextTick(() => {// 由于vuepress对浏览器API访问限制
    const parent = document.createElement("div");
    parent.id = "loading-container";
    document.getElementsByTagName("body")[0].appendChild(parent);
    const instance = app.mount(parent);
    instance[isShow ? "showLoad" : "hideLoad"]();
  });
};
export { showLoading };
```

- 之后为了暴露这个 showLoading 给所有页面使用废了一番功夫
  1. 由于 setup 里面无法使用this, prototype 直接 ×
  2. 尝试用 provide 和 inject, 刷新时inject获取不到方法 ×
  3. 最后用了 vuex, 把方法存在state里面 
     1. 由于1的原因且setup也找不到store,直接到根实例获取$store
```js
 setup(props,context) {
  //  ...
   const store = context.root.$store;
   store.state.xxxFunc
  //  ...
  return{
    // ...
  }
 }
```

> 未完待续

<!-- TODO -->
