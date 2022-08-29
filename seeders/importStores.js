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
const importStores = async () => {
  try {
    const unformatedStores = JSON.parse(fs.readFileSync("data.json"));
    const formatedStores = unformatedStores
      .map((store) => {
        return new Store(validateAndFormat(store));
      })
      .filter((store) => {
        return store.name ? true : false;
      });
    await Store.insertMany(formatedStores);
    logger.info("Stores collection succesfully populated");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

if (process.env.NODE_ENV !== "test") {
  importStores().then(() => {
    process.exit();
  });
}
module.exports = importStores;
