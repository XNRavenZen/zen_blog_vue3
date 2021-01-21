<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/Tag">Tag</router-link>
    <router-link to="/Post">Post</router-link> -->
    <template v-for="(info, index) in filtedMenu" :key="`${info.role}${index}`">
      <component :is="info.componentName" v-bind="info.bind" v-on="info.on" />
    </template>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import RouterLinkComp from "./components/RouterLinkComp.vue";
import { menuRouter } from "./config/menuRouter";
export default defineComponent({
  components: { RouterLinkComp },
  setup() {
    console.error("首页部署");
    const filtedMenu = computed(() =>
      menuRouter.map(mr => {
        const onObj = mr.bind.onObj;
        return Object.assign({}, mr, {
          on: Object.assign(
            {},
            onObj.reduce((sum, cur) => Object.assign({}, sum, cur), {}),
            {
              click: () => {
                // store.commit("toggleAsiderMenu");
              }
            }
          )
        });
      })
    );
    return { filtedMenu };
  }
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
