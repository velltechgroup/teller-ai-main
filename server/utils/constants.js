const dotenv = require("dotenv");
dotenv.config();

const swaggerOptions = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "MindMystery API Documentation",
      version: "0.1.0",
      description:
        "This is a web application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "MindMystery",
        url: "https://MindMystery.com",
        email: "info@MindMystery.com",
      },
    },
    servers: [
      {
        url: process.env.BACKEND_URL,
      },
    ],
  },
  apis: ["./routes/*.js", "./controllers/*.js", "./models/*.js"],
};

module.exports = { swaggerOptions };
