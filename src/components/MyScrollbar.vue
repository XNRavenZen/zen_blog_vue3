<template>
  <div class="my-scrollbar" v-on="{ ...methodOption }"></div>
</template>
  
<script>
import { defineComponent, ref } from '@vue/composition-api';
export default defineComponent({
  name: "MyScrollbar",
  setup(props, context) {
    const methodOption = {
      click: (event) => {
        console.error("点击事件", event);
      },
      mouseover: (event) => {
        console.error("鼠标悬浮事件", event);
      },
      mouseout: (event) => {
        console.error("鼠标移开事件", event);
      },
    }
    return {
      methodOption
    }
  }
})
</script>
<style lang="scss">
.my-scrollbar {
  overflow-y: auto;
  height: 100%;
  width: 100%;
}
</style>