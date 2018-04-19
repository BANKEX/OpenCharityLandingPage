FROM nginx:latest
MAINTAINER Oleg Makarov <om@bankexfoundation.org>

ADD /app /opt/app
ADD docker/default-http.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
