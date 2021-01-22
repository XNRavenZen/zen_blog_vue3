<template>
  <div v-html="coding"></div>
</template>
<script>
import { defineComponent } from "vue";
const coding = require("@/blog/post/coding.md");
export default defineComponent({
  setup() {
    // const coding = require("$/blog/post/coding.md");
    console.error("查看引入的md文件", coding);
    return { coding };
  }
});
</script>
