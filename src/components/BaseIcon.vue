<template>
  <span :class="iconClass" @click="$emit('click',$event)"></span>
</template>
<script lang="ts">
import { defineComponent, ref, computed, toRefs } from "@vue/composition-api";

const Component = defineComponent({
  // 已启用类型推断
  props: {
    fontFamily: {
      type: String,
      default: "zen",
    },
    fontClass: {
      type: String,
      default: "zen-",
    },
    suffix: {
      type: String,
      // required: true
    },
  },
  setup(props) {
    const { fontFamily, fontClass, suffix } = toRefs(props);
    // console.error(fontFamily, fontClass, suffix);
    const iconClass = computed(
      () => `icon ${fontFamily.value} ${fontClass.value}${suffix.value}`
    );
    return {
      iconClass,
    };
  },
});
export default Component;
</script>