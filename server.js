const dotenv = require("dotenv");
dotenv.config();
const config = require("config");
const app = require("./api/app");
const logger = require("./utils/logger");

// Start the server
app.listen(config.get("port"));
logger.info("API initialized on port " + config.get("port"));