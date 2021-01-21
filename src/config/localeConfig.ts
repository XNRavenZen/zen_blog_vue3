module.exports = {
  // 键名是该语言所属的子路径
  // 作为特例，默认语言可以使用 '/' 作为其路径。
  "/": {
    lang: "zh-CN",
    title: "zen's blog",
    description: "Coding & Sleeping",
  },
  "/en/": {
    lang: "en-US", // 将会被设置为 <html> 的 lang 属性
    title: "zen's blog",
    description: "Coding & Sleeping",
  },
}