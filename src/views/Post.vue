<template>
  <div v-html="mdContent"></div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import "github-markdown-css";
// const coding = require("@/blog/post/coding.md");
export default defineComponent({
  name: "Post",
  setup() {
    const route = useRoute(); // 获取params等参数
    // console.error(route.params.content);
    const mdContent = computed(() => route.params.content);
    return { mdContent };
  }
});
</script>
