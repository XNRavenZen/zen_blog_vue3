<template>
  <span class="funtional-button" @click="$emit('click', $event)">{{
    innerText
  }}</span>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String || Number
    }
  },
  setup(props) {
    const { text } = toRefs(props);
    const innerText = text && text.value;
    return {
      innerText
    };
  }
});
</script>
<style lang="scss">
.funtional-button {
  padding: 0 16px;
  margin: 4px;
  border-radius: 4px;
  line-height: 1rem;
  font-size: 1rem;
  background-color: #{"var(--button-background-color,#9cf)"};
}
</style>
