const logger = require("../utils/logger");
const express = require("express");
const { getStoresByPage, createStore } = require("../services/stores");
const { validateAndFormat } = require("../validations/store");
const { checkParam } = require("../utils/decorators");
const router = express.Router();

router.get("/stores/", async (req, res) => {
  try {
    const getStoresByPageWithParams = checkParam(getStoresByPage);
    const response = await getStoresByPageWithParams(req.query);
    if (response.message) {
      res.status(400);
      return res.send(`invalidParameter: ${response.message}`);
    }
    return res.send(response);
  } catch (error) {
    logger.error(error);
    res.status(500);
    return res.send("internalError");
  }
});

router.post("/stores/", async (req, res) => {
  try {
    if (!req.body) {
      res.status(400);
      return res.send("invalidParameter");
    }
    const store = validateAndFormat(req.body);
    if (store.message) {
      res.status(400);
      return res.send(`invalidParameter: ${store.message}`);
    }
    await createStore(store);
    return res.send("Store created succesfully");
  } catch (error) {
    logger.error(error);
    res.status(500);
    return res.send("internalError");
  }
});

module.exports = router;
