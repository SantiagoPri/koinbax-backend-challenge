const mongoose = require("mongoose");
const logger = require("../utils/logger");
mongoose.Promise = Promise;
const dotenv = require("dotenv");
dotenv.config();
const config = require("config");
const fs = require("fs");
const Store = require("../models/store");
const { validateAndFormat } = require("../validations/store");

if (process.env.NODE_ENV !== "test") {
  mongoose.connect(
    "mongodb://" +
      config.get("mongodb.address") +
      "/" +
      config.get("mongodb.dbname"),
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  logger.info("DB connected");
}

const clearStores = async () => {
  try {
    await Store.deleteMany();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

if (process.env.NODE_ENV !== "test") {
  clearStores().then(() => {
    process.exit();
  });
}
module.exports = clearStores;
