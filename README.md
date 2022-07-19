# Docker Puppeteer

This is a sample app that runs Puppeteer inside a Docker container.

## Stack

- Docker
- Fastify
- Node.js

## Getting Started

Follow these steps to get the app up and running.

1. Install the Node.js dependencies.

```
npm install
```

2. Make a copy of `.env.example` to `.env.development` and update the credentials.

3. Start the server in development mode.

```sh
npm run dev
```

## Production

Follow these steps to run the app in production.

1. Make a copy of `.env.example` to `.env.production` and update the credentials.

2. Build the Docker image.

```sh
docker build -t docker-puppeteer .
```

3. Run the Docker container.

```sh
docker run -p 3000:3000 --name docker-puppeteer -td docker-puppeteer
```

> You can replace the last `docker-puppeteer` with your container name.

## References

- [Running Puppeteer in Docker](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-in-docker)
- [How to Run Puppeteer and Headless Chrome in a Docker Container](https://www.howtogeek.com/devops/how-to-run-puppeteer-and-headless-chrome-in-a-docker-container/)
- [How to use Puppeteer inside a Docker container](https://dev.to/cloudx/how-to-use-puppeteer-inside-a-docker-container-568c)
