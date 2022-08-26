const Store = require("../models/store");
const logger = require("../utils/logger");

async function getStoresByPage(page, limit) {
    
}

async function createStore(formatedStore) {
  const store = new Store(formatedStore);
  await Store.create(store);

  logger.info("Store created succesfully");
}

module.exports = {
  getStoresByPage,
  createStore,
};
