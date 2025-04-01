FROM nginx:alpine
RUN apk add bash
COPY dist /usr/share/nginx/html

