---
title: 开机启动nginx(systemd方式)
tag:
  - nginx
  - linux
---

1.建立服务文件
（1）文件路径

vim /usr/lib/systemd/system/nginx.service
（2）服务文件内容

```
[Unit]# 服务的说明
Description=nginx - high performance web server # 描述服务
After=network.target remote-fs.target nss-lookup.target # 描述服务类别

[Service] # 服务运行参数的设置
Type=forking # 是后台运行的形式
ExecStart=/opt/nginx/sbin/nginx # 为服务的具体运行命令
ExecReload=/opt/nginx/sbin/nginx -s reload # 重启命令
ExecStop=/opt/nginx/sbin/nginx -s stop # 停止命令
PrivateTmp=True # 表示给服务分配独立的临时空间

# 注意：启动、重启、停止命令全部要求使用绝对路径

[Install] # 服务安装的相关设置
WantedBy=multi-user.target # 设置为多用户
```

（3）使文件生效

systemctl daemon-reload 2.保存目录
（1）以 754 的权限保存在目录：

/usr/lib/systemd/system
（2）设置开机自启动

systemctl enable nginx.service
（3）启动 nginx 服务

systemctl start nginx.service
（4）停止开机自启动

systemctl disable nginx.service
（5）查看服务当前状态

systemctl status nginx.service
（6）重新启动服务

systemctl restart nginx.service
（7）查看所有已启动的服务

systemctl list-units --type=service 3.命令集合

```bash
systemctl is-enabled servicename.service #查询服务是否开机启动
systemctl enable *.service #开机运行服务
systemctl disable *.service #取消开机运行
systemctl start *.service #启动服务
systemctl stop *.service #停止服务
systemctl restart *.service #重启服务
systemctl reload *.service #重新加载服务配置文件
systemctl status *.service #查询服务运行状态
systemctl --failed #显示启动失败的服务
```

注：\*代表某个服务的名字，如 http 的服务名为 httpd
