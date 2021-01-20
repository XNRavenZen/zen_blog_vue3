<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div v-if="enabled" class="zen-sw-update-popup">
      <span class="update-up-message">{{ message }}</span>
      <button class="update-up-reload" @click="reload">{{ buttonText }}</button>
      <!-- <BaseButton
        class="update-up-reload"
        @click="reload"
        :fillText="buttonText"
      /> -->
    </div>
  </SWUpdatePopup>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'
// import BaseButton from "@/components/BaseButton"

export default defineComponent({
  name: "ZenUpdatePopup",
  components: { SWUpdatePopup },
  // // props
  // setup(props, context) {
  //   // const enab
  //   return {
  //     // enabled,
  //     // reload
  //   }
  // }
})
</script>

<style lang="scss">
.zen-sw-update-popup {
  position: fixed;
  bottom: 50vh;
  left: calc(50vw - 150px / 2 - 10px / 2);
  width: 150px;
  background-color: #fff;
  font-size: 20px;
  padding: 10px;
  border: 5px solid #{"var(--banner-bg-color,#3eaf7c)"};
  button {
    border: 1px solid #fefefe;
  }
  .update-up-message {
    text-align: left;
  }

  .update-up-reload {
  }
}
</style>