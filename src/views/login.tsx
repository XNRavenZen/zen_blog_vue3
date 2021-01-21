import { defineComponent } from "vue";
import { useRoute, useRouter, RouteLocationRaw } from "vue-router";

export default defineComponent({
  setup(props, useContext) {
    // console.error(props, useContext);
    const route = useRoute();
    const router = useRouter();
    console.error(route.params.toPath);
    const loginFunc = () => {
      console.error("登录");
      localStorage.setItem("isLogined", "true");
      router.push(route.params.toPath as RouteLocationRaw);
    };
    return () => (
      <div>
        <div>
          用户名
          <input type="text" />
        </div>
        <div>
          密码
          <input type="password" />
        </div>
        <span onClick={loginFunc}>登录</span>
        <span>注册</span>
      </div>
    );
  }
});
