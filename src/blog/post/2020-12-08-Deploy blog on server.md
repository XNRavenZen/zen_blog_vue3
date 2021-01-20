---
title: 部署blog到服务器上遇到的若干问题
tag:
  - js
  - nginx
---

```
Module build failed (from ./node_modules/vue-loader/lib/index.js
```

1. npm install vue-template-compiler -D

2. npm install

3. npm run dev

> TypeError: Cannot destructure property 'createComponentInstance' of 'vue.ssrUtils' as it is undefined.

> [tsl] ERROR in /root/zen_s_blog/blog/.vuepress/enhanceApp.ts(1,41)
> TS2307: Cannot find module './enhanceApp.ts?vue&type=template&id=80a9f242&' or its corresponding type declarations.

```bash
npm install vue-loader -D
```

>I've just hit this same error, but I don't completely agree with the @papa-zulu given explanation, because - although I don't know Javascript very much - this works:

```js
let ctx = require.context('.', true);
while this doesn't:

const x = true;
let ctx = require.context('.', x);
and in both alternatives the path is a literal.
```

>DOMException: Failed to execute 'replaceState' on 'History': A history state object with URL 'https:' cannot be created in a document with origin