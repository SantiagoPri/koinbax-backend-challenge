const Store = require("../models/store");
const logger = require("../utils/logger");
const { formatDocumentOut } = require("../validations/store");

async function getStoresByPage(page, limit) {
  const total = await Store.countDocuments();
  const pages = Math.ceil(total / limit);
  if (page > pages) {
    return {
      message: `The maximun number of page for limit = ${limit} is ${pages}`,
    };
  }
  const documentsToSkip = (page - 1) * limit;
  const stores = await Store.find({})
    .sort({ id: -1 })
    .skip(documentsToSkip)
    .limit(limit);

  return {
    data: stores.map((store) => {
      return formatDocumentOut(store);
    }),
    page,
    pages,
    limit,
    total,
  };
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
