<template>
  <div v-for="(item, index) in allPost" :key="index">
    <span @click="goToPost($event, item.content)">{{ item.name }}</span>
  </div>
  <!-- <Post :mdContent="pageContent"></Post> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import importAll from "@/utils/importAll";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "Tag",
  setup() {
    const sourceMap = importAll(
      // require.context("../../public/blog", true, /\.md$/),
      require.context("../../public/blog", true, /\.md$/),
      /\.md$/,
      "g"
    );
    // console.error(sourceMap);
    const allPost = Object.keys(sourceMap).map(sourceKey => {
      // console.log(sourceMap[sourceKey]);
      return { name: sourceKey, content: sourceMap[sourceKey].content };
    });
    const route = useRoute(); // 获取params等参数
    const router = useRouter(); // 用于跳转等
    const goToPost = ($event: Event, pageContent: string) => {
      router.push({
        name: "Post",
        params: {
          content: pageContent
        }
      });
    };
    return { allPost, goToPost };
  }
});
</script>
