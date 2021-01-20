<template>
  <div class="search-container" :style="bindStyle">
    <input type="text" placeholder="Search..." />
    <div class="search">
      <BaseIcon suffix="magnifier" @click="toggleBar"></BaseIcon>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, watch, ref } from "vue";
import defaultBaseIcon from "./BaseIcon";

export default defineComponent({
  components: {
    BaseIcon: defaultBaseIcon,
  },
  setup(props, context) {
    const isShow = ref(false);
    const toggleBar = () => {
      isShow.value = !isShow.value;
      console.error("点击事件", isShow.value);
    };
    const bindStyle = computed(() => {
      return {
        "--searchbar-opac": isShow.value ? 1 : 0,
        "--searchbar-top": "2rem",
        "--searchbar-width": "10rem",
      };
    });
    /* watch(isShow, (newVal, oldVal) => {
      bindStyle.value = {
        "--searchbar-opac": newVal ? 1 : 0,
      };
    }); */
    return {
      bindStyle,
      toggleBar,
    };
  },
});
</script>
<style lang="scss">
.search-container {
  position: relative;
  input {
    position: absolute;
    height: 50%;
    top: #{"var(--searchbar-top,0)"};
    right: 0;
    width: #{"var(--searchbar-width,1rem)"};
    opacity: #{"var(--searchbar-opac,0)"};
    outline: 0;
    border-radius: 1rem;
    // transition: 0.5s;
  }
}
</style>
