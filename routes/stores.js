const logger = require("../utils/logger");
const express = require("express");
const { getStoresByPage, createStore } = require("../services/stores");
const { validateAndFormat } = require("../validations/store");
const router = express.Router();

router.get("/stores/", async (req, res) => {
  try {
    const query = req.query.q ? JSON.parse(req.query.q) : null;
    if (!(query && query.page && query.limit)) {
      res.status(400);
      return res.send("invalidQuery");
    }
    const { page, limit } = query;
    const response = await getStoresByPage(page, limit);
    return res.send("something");
  } catch (error) {
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
    if (!store) {
      res.status(400);
      return res.send("invalidParameter");
    }
    await createStore(store);
    return res.send("Store created succesfully");
  } catch (error) {
    logger.error(error)
    res.status(500);
    return res.send("internalError");
  }
});

module.exports = router;
