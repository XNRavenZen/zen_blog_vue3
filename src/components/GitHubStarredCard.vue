<template>
  <div v-if="urls && urls.length > 0">
    <div v-for="(urlData, index) in urls" :key="`${index}${urlData.name}`">
      <div class="pinned-item-list-item-content">
        <div class="d-flex width-full flex-items-center position-relative">
          <a
            href="//github.com/XNRavenZen/hosts"
            class="text-bold flex-auto min-width-0"
            target="_blank"
          >
            <span class="repo" title="hosts">{{ urlData.name }}</span>
          </a>
        </div>

        <p class="text-gray text-small mb-2">
          <span v-if="urlData.fork">Forked from</span>
          <a class="muted-link" :href="urlData.html_url" target="_blank">{{
            urlData.full_name
          }}</a>
        </p>

        <p class="pinned-item-desc text-gray text-small d-block mt-2 mb-3">
          {{ urlData.description }}
        </p>

        <p class="mb-0 f6 text-gray"></p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  toRefs,
  Ref,
  onUnmounted,
} from "vue";

export default defineComponent({
  name: "GitHubStarredCard",
  props: {
    starredUrls: {
      type: Array,
    },
  },
  setup(props, context) {
    const { starredUrls } = toRefs(props);
    onUnmounted(() => {
      console.error("组件被销毁");
    });
    const urls = starredUrls.value;
    return {
      urls,
    };
  },
});
</script>