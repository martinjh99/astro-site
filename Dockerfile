FROM nginx:latest
LABEL Maintainer="Martin Hooper"
LABEL Desc="Test ghcr actions"
COPY dist /usr/share/nginx/html

