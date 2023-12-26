const express = require("express");
const cors = require("cors");
const session = require("express-session");
const swaggerJsdoc = require("swagger-jsdoc");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const cookieParser = require("cookie-parser");
const { swaggerOptions } = require("./utils/constants.js");
const connectDB = require("./database/db");

dotenv.config();
const app = express();

app.use(cookieParser());

// CORS middleware configuration
app.use(
  cors({
    origin: *,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  })
);

app.use(express.json());
app.use(
  session({
    secret: "qwsdfghjuiko9i8u7y6etwrqesadfgthy",
    resave: true,
    saveUninitialized: true,
  })
);

const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes
const storyRoutes = require("./routes/story.routes.js");

// Set CORS headers for the story routes
app.use("/api/story", (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
}, storyRoutes);

app.listen(process.env.PORT, () => {
  connectDB();
});
