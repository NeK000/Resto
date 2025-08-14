#!/bin/bash
# Build and run the Hugo resto-app Docker image

set -e

IMAGE_NAME="resto-app"
DOCKERFILE=".docker/Dockerfile"

# Build the Docker image

echo "Building Docker image..."
docker build -f $DOCKERFILE -t $IMAGE_NAME .

echo "Build complete. To run the container, use:"
echo "  docker run -p 8080:80 $IMAGE_NAME"
