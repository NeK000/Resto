#!/bin/bash
# Start the resto-app Docker container locally

set -e

IMAGE_NAME="resto-app"
CONTAINER_NAME="resto-app-local"
PORT=8080

# Stop and remove any existing container with the same name
if [ $(docker ps -aq -f name=$CONTAINER_NAME) ]; then
    echo "Stopping and removing existing container..."
    docker stop $CONTAINER_NAME || true
    docker rm $CONTAINER_NAME || true
fi

echo "Starting $IMAGE_NAME on http://localhost:$PORT ..."
docker run -d --name $CONTAINER_NAME -p $PORT:80 $IMAGE_NAME

echo "App is running. Access it at http://localhost:$PORT/calculator/index.html"
