const mongoose = require("mongoose");
const logger = require("../utils/logger");
mongoose.Promise = Promise;
const dotenv = require("dotenv");
dotenv.config();
const config = require("config");
const fs = require("fs");
const Store = require("../models/store");
const { validateAndFormat } = require("../validations/store");

mongoose.connect(
  "mongodb://" +
    config.get("mongodb.address") +
    "/" +
    config.get("mongodb.dbname"),
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const clearStores = async () => {
  try {
	await Store.deleteMany()
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

clearStores();
