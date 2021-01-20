<template>
  <div class="summary-card">
    <div class="summary-title">
      {{ title }}
    </div>
    <div class="summary-bar">
      <span class="zen zen-author">{{
        post.author || $themeConfig.author || "noName"
      }}</span>
      <span class="zen zen-calendar">{{
        post.lastUpdateDate || $moment().format("YYYY-MM-DD")
      }}</span>
      <span class="zen zen-tag">{{ tags }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, computed } from 'vue'

export default defineComponent({
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props, context) {
    const { post } = toRefs(props)
    const _post = post.value;
    const title = _post.title;
    const tag = _post.frontmatter.tag;
    const tags = tag && tag.join(",");
    return {
      title,
      tags
    }
  },
})
</script>