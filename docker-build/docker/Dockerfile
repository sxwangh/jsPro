# FROM nginx
FROM quay.io/centos7/nginx-116-centos7

USER root

COPY docker/conf/nginx.conf.template /etc/nginx/nginx.conf.template
COPY docker/conf/nginx.conf /etc/nginx/nginx.conf
COPY docker/entrypoint.sh entrypoint.sh

ADD build /var/www/dist

HEALTHCHECK CMD curl -sS http://localhost:80

ENTRYPOINT ["./entrypoint.sh"]
