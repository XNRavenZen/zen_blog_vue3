<template>
  <div class="blog-post-list">
    <template v-for="tag in blogList">
      <SummaryCard :post="tag" />
    </template>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, watch, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup(props, context) {
    const { list } = toRefs(props)
    const $themeConfig = context.root.$themeConfig;
    const blogList = computed(() => list.value.filter(blog => /^(\/_posts\/)/.test(blog.regularPath)))
    /* watch(list, (newVal, oldVal) => {

    }, {
      deep: true
    }) */
    return {
      blogList
    }
  },
})
</script>