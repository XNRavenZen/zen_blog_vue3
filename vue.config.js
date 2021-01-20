const path = require("path");
module.exports = {
  devServer: {
    disableHostCheck: true,
    // proxy: 'http://localhost:8080',
    // host: "0.0.0.0",
    // port: 8080,
    public: "0.0.0.0:8080",
    allowedHosts: ["not-me.fun"]
  },
  publicPath: "/",
  configureWebpack: {
    resolveLoader: {
      modules: ["node_modules", "./loaders"]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.join(__dirname, "./src"));
    config.resolve.alias.set("$", path.join(__dirname, "./public"));
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("html-loader")
      .loader("html-loader")
      .end()
      .use("markdown-loader")
      .loader("markdown-loader/markdown-loader")
      .end();
  }
};
