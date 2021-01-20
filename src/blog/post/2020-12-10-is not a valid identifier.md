---
title: (U+3000) is not a valid identifier
layout: post
tag: 
 - java
---

发现jsp等文件内大量存在错误,错误信息如下
>(U+3000) is not a valid identifier

搜索下发现代码内存在大量全角空格(\u3000)

解决方法:
>全局替换全角空格为半角空格即可
