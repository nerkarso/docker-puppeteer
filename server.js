const crypto = require("crypto");
const fastify = require("fastify")({ logger: true });
const path = require("path");
const { screenshot } = require("./screenshot");

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
});

fastify.route({
  method: "GET",
  url: "/",
  schema: {
    // Request needs to have a querystring with a `url` parameter
    querystring: {
      type: "object",
      properties: {
        url: { type: "string" },
      },
      required: ["url"],
    },
  },
  handler: async (req, res) => {
    const { url } = req.query;
    const hash = crypto.createHash("md5").update(url).digest("hex");
    const fileName = hash.concat(".png");
    const filePath = path.join(__dirname, "public", "screenshots", fileName);

    await screenshot(url, filePath);

    res.header("Content-Type", "text/html");

    return `<a href="/screenshots/${fileName}">${fileName}</a>`;
  },
});

const start = async () => {
  try {
    await fastify.listen({
      host: process.env.HOST || "0.0.0.0",
      port: process.env.PORT || 3000,
    });
  } catch (err) {
    fastify.log.error(err);
  }
};

start();
