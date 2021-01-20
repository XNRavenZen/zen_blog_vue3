<template>
  <a
    class="base-button"
    v-on="bindOptions"
    :style="bindStyles"
    @click.prevent="doClick($event)"
  >
    {{ fillText }}
  </a>
</template>
<script>
import { defineComponent, toRefs, ref } from "@vue/composition-api";

export default defineComponent({
  props: {
    fillText: {
      type: String
    },
    width: {
      type: Number | String,
      default: "5rem"
    }
  },
  setup(props, context) {
    // const { fillText } = toRefs(props);
    const buttonWidth = props.width;
    const doClick = (event) => {
      // console.error("执行 click 事件", event.button);
      context.emit("click", event)
    }
    const bindOptions = {};
    const bindStyles = ref(Object.assign({}, {
      "--button-width": buttonWidth instanceof Number ? `${buttonWidth}rem` : buttonWidth
    }))
    return {
      ...props.fillText,
      bindOptions,
      bindStyles,
      doClick
    }
  }
})
</script>
<style lang="scss">
.base-button {
  display: inline-block;
  position: relative;
  top: 0;
  min-height: 1.5rem;
  line-height: 1.5rem;
  padding: 4px;
  margin: 8px 4px;
  width: #{"var(--button-width,3rem)"};
  text-decoration: none;
  text-align: center;
  appearance: none;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  text-align: center;
  background-color: #a5de37;
  // box-shadow: 0 7px 0 #8bc220, 0 8px 3px rgba(0, 0, 0, 0.3), 0 7px 0 #bbbbbb,
  //   0 8px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 7px 0 #8bc220, 0 8px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.3s;
  // &:hover,
  // &:focus {
  //   box-shadow: 0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2);
  // }
  &:active {
    top: 5px;
    transition-property: all;
    transition-duration: 0.15s;
    box-shadow: 0 2px 0 #bbbbbb, 0 3px 3px rgba(0, 0, 0, 0.2);
  }
}
</style>