
# Resto Web App

## Project Motivation

This app was created to help people and businesses in Bulgaria during the transition period when the country switches to the euro. For 6 months after the switch, stores are required to:

- Accept both euro (EUR) and Bulgarian lev (BGN) as payment, even in combination (e.g., 20 euro and 20 lev for a product costing 22 euro).
- Return change only in euro.

The calculator makes it easy to enter amounts in both currencies, calculate the total, and determine the correct change to return in euro, ensuring compliance with the new regulations and making the transition smoother for both customers and merchants.

A simple static web calculator for converting between Euro and BGN, and calculating change for a product price. Built with Hugo and Docker, with a modern UI and full Bulgarian localization.

## Features
- Input fields for Euro, BGN, and product price (in Euro)
- Accepts both dot and comma as decimal separators
- Real-time validation with error messages in Bulgarian
- Responsive and modern design
- Built as a static site with Hugo
- Dockerized for easy deployment

## Usage

### 1. Build the Docker Image

From the project root, run:


```bash
bash build-docker.sh
```

This will build the Docker image using the Dockerfile in `.docker/`.

### 2. Run the App Locally

Start the app in a Docker container:

```bash
bash start-docker.sh
```

The app will be available at: [http://localhost:8080/](http://localhost:8080/)

### 3. Manual Docker Commands


You can also build and run manually:


```bash
docker build -f .docker/Dockerfile -t resto-web-app .
docker run -p 8080:80 resto-web-app
```

Then open [http://localhost:8080/](http://localhost:8080/) in your browser.

### 4. GitHub Actions & Container Registry

A GitHub Actions workflow is included to build and publish the Docker image to GitHub Container Registry (`ghcr.io`) on every push to `main` or via manual trigger. The image is tagged with the build date and time.

---

## Calculator Usage
- Enter an amount in Euro or BGN and the product price in Euro.
- Fields accept both `,` and `.` as decimal separators.
- Invalid input will highlight the field in red and show an error message.
- The calculate button is disabled until all fields are valid.
- The result shows the change in Euro.

---

## Project Structure
- `resto-web-app/` - Hugo static site
- `resto-web-app/static/` - Calculator HTML, CSS, JS
-.docker/Dockerfile - Docker build file
-build-docker.sh - Build script
-start-docker.sh - Run script
-.github/workflows/docker-publish.yml - GitHub Actions workflow

---

## License
MIT
