const {
  mockedStoresFromDB,
  mockedFormatedStore,
} = require("../../__mocks__/stores.js");
const { getStoresByPage, createStore } = require("../../services/stores.js");
const store = require("../../models/store.js");
const mockingoose = require("mockingoose");

describe("services for stores", () => {
  describe("getStoresByPage", () => {
    beforeAll(() => {
      mockingoose(store).toReturn(8, "countDocuments");
      mockingoose(store).toReturn(mockedStoresFromDB, "find");
    });

    it("Works when sending page and limit", async () => {
      const page = 2;
      const limit = 3;
      const response = await getStoresByPage(page, limit);
      expect(response.page).toBe(page);
      expect(response.pages).toBeGreaterThan(0);
      expect(response.limit).toBe(limit);
      expect(response.total).toBeGreaterThanOrEqual(page * limit);
    });

    it("Doesn't works when not sending page and limit", async () => {
      const response = await getStoresByPage();
      expect(response.page).toBe(undefined);
      expect(response.limit).toBe(undefined);
    });

    it("Doesn't works when not sending page and limit greater than the total", async () => {
      const page = 6;
      const limit = 5;
      const response = await getStoresByPage(page, limit);
      expect(response.message).toBe(
        "The maximun number of page for limit = 5 is 2"
      );
    });
  });

  describe("Create Store", () => {
    it("Create a Store", async () => {
      jest.spyOn(store, "create").mockImplementationOnce(async () => {});
      mockingoose(store).toReturn({}, "create");
      await createStore(mockedFormatedStore);
    });
  });
});
