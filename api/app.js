const mongoose = require("mongoose");
const logger = require("../utils/logger");
mongoose.Promise = Promise;

const express = require("express");
const cors = require("cors");
const { urlencoded, json } = require("body-parser");
const basicAuthMiddleware = require("../utils/basicAuth");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const config = require("config");


// Health check
app.get("/health", (req, res) => res.status(200).send("API is running!"));

require("../utils/connect");

// Middlewares
app
  .use(cors({ credentials: true }))
  .use(urlencoded({ extended: true, limit: "50mb" }))
  .use(json({ limit: "50mb" }))
  .use(basicAuthMiddleware);

app.use("/api/", require("../routes/stores"));

// // Start the server
// app.listen(config.get("port"));
// logger.info("API initialized on port " + config.get("port"));

module.exports = app;
