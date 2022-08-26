const logger = require("./logger");
const auth = require("basic-auth");
const User = require("../models/user");

const verifyUser = async (req, res, next) => {
  try {
    const credentials = await auth(req);
    if (!(credentials && credentials.name && credentials.pass)) {
      res.statusCode = 401;
      return res.end("Unauthorized");
    }
    const query = await User.find({ username: credentials.name }).exec();
    if (query.lenght > 1) {
      logger.info(
        "multiple objects with the same user name, getting the first one"
      );
    }
    const user = new User(query[0]);
    if (user.verifyPassword(credentials.pass)) {
      next();
    } else {
      res.statusCode = 401;
      return res.end("Unauthorized");
    }
  } catch (error) {
    res.statusCode = 500;
    return res.end("internalError");
  }
};

module.exports = verifyUser;
