# Use the official Hugo image to build the site
FROM klakegg/hugo:ext-alpine AS builder

WORKDIR /src
COPY ../resto-web-app .
RUN hugo --minify

# Use a lightweight web server to serve the static files
FROM nginx:alpine
COPY --from=builder /src/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
