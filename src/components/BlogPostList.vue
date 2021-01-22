<template>
  <div class="blog-post-list">
    <template v-for="(tag, index) in blogList" :key="index">
      <SummaryCard :post="tag" />
    </template>
  </div>
</template>

<script>
import { defineComponent, toRefs, computed } from "vue";

export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const { list } = toRefs(props);
    const blogList = computed(() =>
      list.value.filter(blog => /^(\/_posts\/)/.test(blog.regularPath))
    );
    return {
      blogList
    };
  }
});
</script>
