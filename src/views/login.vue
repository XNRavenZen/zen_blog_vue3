<template>
  <div>
    <div>
      用户名
      <input type="text" />
    </div>
    <div>
      密码
      <input type="password" />
    </div>
    <span @click="loginFunc">登录</span>
    <span>注册</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter, RouteLocationRaw } from "vue-router";

export default defineComponent({
  setup() {
    // console.error(props, useContext);
    const route = useRoute(); // 获取params等参数
    const router = useRouter(); // 用于跳转等
    console.error(route.params.toPath);
    const loginFunc = () => {
      console.error("登录");
      localStorage.setItem("isLogined", "true");
      router.push(route.params.toPath as RouteLocationRaw);
    };
    return { loginFunc };
  }
});
</script>
