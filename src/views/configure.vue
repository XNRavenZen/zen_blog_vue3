<template>
  <div>配置页面</div>
  <div class="wrapper">
    <div class="wrapper-left">
      <div draggable="true" @dragstart="dragstart($event)">容器</div>
    </div>
    <div
      class="wrapper-right"
      @dragover="putDown($event)"
      @drop="settleDown($event)"
    ></div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const cloneDom = ref(null);
    const dragstart = event => {
      cloneDom.value = event.currentTarget.cloneNode(true);
    };
    const putDown = event => {
      event.preventDefault();
    };
    const settleDown = event => {
      event.preventDefault();
      event.target && event.target.appendChild(cloneDom.value);
    };
    return { dragstart, putDown, settleDown };
  }
});
</script>
<style lang="scss">
.wrapper {
  height: 50vh;
  color: white;
  display: flex;
  flex-wrap: nowrap;
  &-left,
  &-right {
    width: 50%;
    height: 100%;
    background-color: green;
  }
  &-left {
    background-color: green;
  }
  &-right {
    background-color: red;
  }
}
</style>
