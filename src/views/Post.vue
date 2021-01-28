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
    const contentFromRoute = route.params.content;
    contentFromRoute &&
      localStorage.setItem("postContent", contentFromRoute as string); // 存下post内容
    const mdContent = computed(
      () => contentFromRoute || localStorage.getItem("postContent")
    );
    return { mdContent };
  }
});
</script>
