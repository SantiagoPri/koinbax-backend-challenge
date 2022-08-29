const mongoose = require("mongoose");
const logger = require("./logger");
mongoose.Promise = Promise;

const dotenv = require("dotenv");
dotenv.config();
const config = require("config");

try {
  if (process.env.NODE_ENV !== "test") {
    const mongoUrl =
      "mongodb://" +
      config.get("mongodb.address") +
      "/" +
      config.get("mongodb.dbname");
    mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("DB connected");
  }
} catch (error) {
  logger.error("Could not connect to db");
  process.exit(1);
}
