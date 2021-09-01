#!/bin/sh

chmod -R 777 .

# 将所有用户的执行权限添加到现有权限中
cd /etc/nginx
rm nginx.conf

envsubst '
$$OPEN_API' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
#/etc/nginx/sbin/nginx -g "daemon off;"
nginx -g "daemon off;"
#nginx -s reload




