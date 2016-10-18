FROM nginx

MAINTAINER Eugene Sawfly aka Yevgeniy Trach <eugene.sawfly@gmail.com>

ADD nginx.conf /etc/nginx/
COPY /test_lending_app.conf /etc/nginx/sites-available/
COPY /test_lending_web.conf /etc/nginx/sites-available/

#ARG PHP_UPSTREAM=php-fpm
#
#RUN apk update \
#    && apk upgrade \
#    && apk add --no-cache bash \
#    && adduser -D -H -u 1000 -s /bin/bash www-data \
#    && rm /etc/nginx/conf.d/default.conf \
#    && echo "upstream php-upstream { server ${PHP_UPSTREAM}:9000; }" > /etc/nginx/conf.d/upstream.conf
EXPOSE 80 443 7777
CMD service nginx start

