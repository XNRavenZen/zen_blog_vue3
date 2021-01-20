<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/Tag">Tag</router-link>
    <router-link to="/Post">Post</router-link>
  </div>
  <router-view />
  <!-- <router-view class="main" name="header"></router-view>
  <router-view class="main"></router-view>
  <router-view class="main" name="footer"></router-view> -->
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
