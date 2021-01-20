<template>
  <router-link
    :to="path"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
    class="link-button"
  >
    <component
      :is="compName"
      v-bind="bindObj"
      v-on="
        feedFor({
          navigate
        })
      "
      >{{ innerWord }}</component
    >
  </router-link>
</template>
<script>
import { defineComponent, toRefs, computed } from "vue";
export default defineComponent({
  name: "RouterLinkComp",
  props: {
    path: {
      type: String,
      default: "/"
    },
    compName: {
      type: String,
      default: "span"
    },
    bindObj: {
      type: Object,
      default: () => {}
    },
    onObj: {
      type: Array,
      default: () => []
    },
    innerWord: {
      type: String,
      default: ""
    }
  },
  setup(props, context) {
    // const { path, compName, bindObj } = toRefs(props);
    const funcArr = computed(() => props.onObj);
    const feedFor = args => {
      const { navigate } = args;
      return funcArr.value
        ? funcArr.value.reduce((sum, cur) => {
            return Object.assign({}, sum, {
              [cur.type]: event => {
                cur.func();
                navigate && navigate(event);
              }
            });
          }, {})
        : {};
    };
    return {
      feedFor
    };
  }
});
</script>
<style lang="scss">
.link-button {
  margin: 0 8px;
  cursor: url("/image/cursor/mario/Link-Select.cur"), pointer;
}
</style>
