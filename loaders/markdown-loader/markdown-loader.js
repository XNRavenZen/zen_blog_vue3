const loaderUtils = require("loader-utils");
const hljs = require("highlight.js");
const emoji = require("markdown-it-emoji");
const anchor = require("markdown-it-anchor");
const toc = require("markdown-it-table-of-contents");
const containers = require("./containers");
const md = require("markdown-it")({
  html: false, // 在源码中启用 HTML 标签
  xhtmlOut: false, // 使用 '/' 来闭合单标签 （比如 <br />）。
  // 这个选项只对完全的 CommonMark 模式兼容。
  breaks: true, // 转换段落里的 '\n' 到 <br>。
  langPrefix: "language-", // 给围栏代码块的 CSS 语言前缀。对于额外的高亮代码非常有用。
  linkify: false, // 将类似 URL 的文本自动转换为链接。
  typographer: false, // 启用一些语言中立的替换 + 引号美化

  // 当 typographer 启用时，成倍的 + 单引号替换对。
  // 或者智能(smartquotes)引号等，可以是 String 或 Array。
  // 比方说，你可以支持 '«»„“' 给俄罗斯人使用， '„“‚‘'  给德国人使用。
  // 还有 ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] 给法国人使用（包括 nbsp）。
  quotes: "“”‘’",
  // 高亮函数，会返回转义的 HTML。
  // 如果源字符串未更改，且应该进行外部的转义，或许返回 ''
  // 如果结果以 <pre ... 开头，内部包装器则会跳过。
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {
        console.error("错误", __);
      }
    }
    return `<pre v-pre class="highlight"><code>${md.utils.escapeHtml(
      str
    )}</code></pre>`;
  }
})
  .use(emoji)
  // 使用 anchor 插件为标题元素添加锚点
  .use(anchor, {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: "#"
  })
  // 使用 table-of-contents 插件实现自动生成目录
  .use(toc, {
    includeLevel: [2, 3]
  })
  // 定义自定义的块容器
  // .use(containers);
module.exports = function(source, sourceMap, meta) {
  const metaTitleReg = /^---.*?---/s; // 前题正则
  const noFMData = metaTitleReg.test(source)
    ? source.replace(metaTitleReg, "")
    : source; // TODO 去掉前题,不会处理
  console.error(
    "\n|||\n",
    "查看数据",
    "\n|||\n",
    metaTitleReg.exec(source)[0],
    "\n|||\n",
    noFMData.slice(0, 100)
  );
  return {
    source: source, // 源md文件内容
    frontMeta: metaTitleReg
      .exec(source)[0]
      .replace(/^-+\n/, "{\n")
      .replace(/\n-+$/, "\n}")
      .replace("\n", ","),
    content: `<div class="markdown-body">${md.render(noFMData)}</div>` // 转换后html内容
  };
};
