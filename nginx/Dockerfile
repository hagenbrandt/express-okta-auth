FROM nginx

COPY default.conf /etc/nginx/conf.d/default.conf

COPY error-pages/410.html /usr/share/nginx/html/410.html
COPY redirect-configs/410-redirect.conf /etc/nginx/snippets/includes/410-redirect.conf