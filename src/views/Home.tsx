import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const clearLoginInfo = () => {
      localStorage.removeItem("isLogined");
    };
    return () => (
      <div class="home">
        <div>测试区域</div>
        <div onClick={clearLoginInfo}>清除登录信息</div>
      </div>
    );
  }
});
