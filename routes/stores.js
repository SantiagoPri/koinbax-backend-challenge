const logger = require("../utils/logger");
const express = require("express");
const router = express.Router();

router
  .get(
    "/stores",
    async (req, res) => {
      logger.info("something")
      return res.send("something")
    }
  );

module.exports = router;

