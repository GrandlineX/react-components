# Just run 'npm install' && 'npm run build-web' before docker build
FROM nginx:latest

RUN mkdir /etc/nginx/sites-available/ && \
    echo "server {\n    server_name  _;\n    listen 80 default_server;\n    location / {\n        root   /usr/share/nginx/html;\n        try_files $uri /index.html;\n    }\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n}" > /etc/nginx/sites-available/default

WORKDIR /usr/share/nginx/html

CMD nginx -c /etc/nginx/nginx.conf -g 'daemon off;'

EXPOSE 80

COPY ./storybook-static/ /usr/share/nginx/html
