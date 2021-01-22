<template>
  <div class="home">
    <div>测试区域</div>
    <div @click="clearLoginInfo">清除登录信息</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const clearLoginInfo = () => {
      localStorage.removeItem("isLogined");
    };
    return { clearLoginInfo };
  }
});
</script>
