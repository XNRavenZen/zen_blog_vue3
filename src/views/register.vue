<template>
  <div>
    <div>
      用户名
      <input type="text" v-model="userName" />
    </div>
    <div>
      密码
      <input type="password" v-model="password" />
    </div>
    <div>
      密码
      <input type="password" v-model="passwordConfirm" />
    </div>
    <span @click="registAccount">注册</span>
    <span @click="resetData">重置</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    // console.error(props, useContext);
    const route = useRoute(); // 获取params等参数
    const router = useRouter(); // 用于跳转等
    console.error(route, router);
    const userName = ref("");
    const password = ref("");
    const passwordConfirm = ref("");
    const registAccount = () => {
      console.error("注册");
      // localStorage.setItem("isLogined", "true");
      router.push("/");
    };
    const resetData = () => {
      userName.value = "";
      password.value = "";
      passwordConfirm.value = "";
    };
    return { registAccount, resetData, userName, password, passwordConfirm };
  }
});
</script>
