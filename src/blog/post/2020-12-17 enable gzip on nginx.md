---
title: 在nginx上开启nginx
tag:
  - nginx
---

由于页面 js 等文件增大,急需开启 gzip 压缩以提升浏览体验

 

### 文件配置

修改 nginx 的配置文件,由于我是默认编译安装,所以路径默认如下

> /usr/local/nginx/conf/nginx.conf

```
http{

  #...其余配置

  gzip  on;    #开启和关闭gzip模式

  gzip_min_length 1k;    #gizp压缩起点，文件大于1k才进行压缩

  gzip_comp_level 5;    # gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间

  gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript; # 进行压缩的文件类型。

  gzip_vary on; # 是否在http header中添加Vary: Accept-Encoding，建议开启

  gzip_buffers 2 4k;  # 设置压缩所需要的缓冲区大小，以4k为单位，如果文件为7k则申请2*4k的缓冲区

  gzip_http_version 1.1;# 设置gzip压缩针对的HTTP协议版本

  #...其余配置
}
```
