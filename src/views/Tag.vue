<template>
  <div v-for="(item, index) in allPost" :key="index">
    <span @click="goToPost($event, item.content)">{{ item.name }}</span>
  </div>
  <!-- <Post :mdContent="pageContent"></Post> -->
</template>
<script>
import { defineComponent } from "vue";
import importAll from "@/utils/importAll";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Tag",
  setup() {
    const sourceMap = importAll(
      require.context("/public", true, /\.md$/),
      /\.md$/,
      "g"
    );
    // console.error(sourceMap);
    const allPost = Object.keys(sourceMap).map(sourceKey => {
      // console.log(sourceMap[sourceKey]);
      return { name: sourceKey, content: sourceMap[sourceKey].content };
    });
    const router = useRouter(); // 用于跳转等
    const goToPost = ($event, pageContent) => {
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
