<template>
  <div class="loading-wrapper" v-show="isLoading" @click="hideLoad">
    <div class="loading-content" :style="loadingStyle">
      <div v-for="index in 3" :class="['circle', `circle${index}`]">
        <span v-for="i in 4" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  toRefs,
  watch,
  onMounted,
} from "@vue/composition-api";

export default defineComponent({
  name: "DataLoading",
  setup(props, context) {
    // const { showLoading } = toRefs(props); // 初始化一直加载
    let isLoading = ref(false);
    const hideLoad = () => {
      isLoading.value = false;
    };
    const showLoad = () => {
      isLoading.value = true;
    };
    // console.error(context.root);
    // context.root.$showLoading = showLoad;// 替代Vue.prototype
    // context.root.$hideLoading = hideLoad;
    const loadingStyle = {
      left: `calc(50% - 30px / 2)`,
      top: `calc(50% - 30px / 2)`,
    };
    return {
      isLoading,
      // showLoading,
      hideLoad,
      showLoad,
      loadingStyle,
    };
  },
});
</script>
<style lang="scss" scoped>
.loading {
  &-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
  }
  &-content {
    width: 30px;
    height: 30px;
    position: absolute;
  }
  &-mask {
    position: absolute;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
  }
}
.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  span {
    width: 8px;
    height: 8px;
    display: inline-block;
    background: rgba(255, 255, 255, 0.75);
    border-radius: 100%;
    position: absolute;
    -webkit-animation: mycircle 1.2s infinite ease-in-out;
    animation: mycircle 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  /* > span {
    top: 0;
    left: 0;
  } */
  > span:nth-child(1) {
    top: 0;
    left: 0;
  }
  > span:nth-child(2) {
    top: 0;
    right: 0;
  }
  > span:nth-child(3) {
    right: 0;
    bottom: 0;
  }
  > span:nth-child(4) {
    left: 0;
    bottom: 0;
  }
}

.circle1 {
  > span:nth-child(2) {
    animation-delay: -0.9s;
  }
  > span:nth-child(3) {
    animation-delay: -0.6s;
  }
  > span:nth-child(4) {
    animation-delay: -0.3s;
  }
}
.circle2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
  > span:nth-child(4) {
    animation-delay: -0.2s;
  }
  > span:nth-child(2) {
    animation-delay: -0.8s;
  }
  > span:nth-child(1) {
    animation-delay: -1.1s;
  }
  > span:nth-child(3) {
    animation-delay: -0.7s;
  }
}
.circle3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
  > span:nth-child(2) {
    animation-delay: -0.7s;
  }
  > span:nth-child(1) {
    animation-delay: -1s;
  }
  > span:nth-child(3) {
    animation-delay: -0.4s;
  }
  > span:nth-child(4) {
    animation-delay: -0.1s;
  }
}
@keyframes mycircle {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
  80% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}
/* .loading-wrapper {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: transparent;
}
.loading-content {
  width: 30px;
  height: 30px;
  position: absolute;
}
.loading-mask {
  position: absolute;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
}
.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.circle span {
  width: 8px;
  height: 8px;
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  position: absolute;
  -webkit-animation: mycircle 1.2s infinite ease-in-out;
  animation: mycircle 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.circle2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
.circle3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}
.circle > span:nth-child(1) {
  top: 0;
  left: 0;
}
.circle > span:nth-child(2) {
  top: 0;
  right: 0;
}
.circle > span:nth-child(3) {
  right: 0;
  bottom: 0;
}
.circle > span:nth-child(4) {
  left: 0;
  bottom: 0;
}
.circle2 > span:nth-child(1) {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.circle3 > span:nth-child(1) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.circle1 > span:nth-child(2) {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.circle2 > span:nth-child(2) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.circle3 > span:nth-child(2) {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.circle1 > span:nth-child(3) {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.circle2 > span:nth-child(3) {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.circle3 > span:nth-child(3) {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.circle1 > span:nth-child(4) {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.circle2 > span:nth-child(4) {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.circle3 > span:nth-child(4) {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}
@-webkit-keyframes mycircle {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
  80% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes mycircle {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
  80% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
} */
</style>