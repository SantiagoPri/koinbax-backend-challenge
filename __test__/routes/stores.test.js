const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../api/app.js");
const { mockedSuccesfullStore } = require("../../__mocks__/stores.js");
const populateStores = require("../../seeders/importStores");
const clearStores = require("../../seeders/clearStores.js");

describe("Api routes for stores", () => {
  const userName = "test@koibanx.com";
  const password = "admin";

  const server = request(app);
  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterEach(async () => {
    // Clear database after each test
    await clearStores();
  });

  describe("GET api/stores", () => {
    it("Gets Unathorized response", async () => {
      const response = await request(app)
        .get("/api/stores?q={'page':2,'limit':2}")
        .send();
      expect(response.status).toBe(401);
      expect(response.text).toBe("Unauthorized");
    });

    it("Works when sending page and limit", async () => {
      // Populate the database for the Happy path
      await populateStores();

      const response = await server
        .get('/api/stores?q={"page":2,"limit":2}')
        .auth(userName, password)
        .send();
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("data");
      expect(response.body).toHaveProperty("page");
      expect(response.body).toHaveProperty("pages");
      expect(response.body).toHaveProperty("limit");
      expect(response.body).toHaveProperty("total");
    });

    it("Doesn't works when not sending page and limit", async () => {
      const response = await server
        .get("/api/stores")
        .auth(userName, password)
        .send();

      expect(response.status).toBe(500);
      expect(response.text).toContain("internalError");
    });

    it("Doesn't works when sending incorrect page and limit", async () => {
      const response = await server
        .get('/api/stores?q={"page":2,"limit":2}')
        .auth(userName, password)
        .send();

      expect(response.status).toBe(400);
      expect(response.text).toContain("invalidParameter:");
    });
  });

  describe("POST api/stores", () => {
    it("Gets Unathorized response", async () => {
      const response = await request(app).post("/api/stores").send();
      expect(response.status).toBe(401);
      expect(response.text).toBe("Unauthorized");
    });

    it("Works when sending the full information of a store", async () => {
      const response = await server
        .post("/api/stores")
        .auth(userName, password)
        .send(mockedSuccesfullStore);
      expect(response.status).toBe(200);
      expect(response.text).toBe("Store created succesfully");
    });

    it("Doesn't works when not sending body", async () => {
      const response = await server
        .post("/api/stores")
        .auth(userName, password)
        .send();

      expect(response.status).toBe(400);
      expect(response.text).toContain("invalidParameter:");
    });
  });

  afterAll(async () => {
    // Closing the DB connection allows Jest to exit successfully.
    await mongoose.disconnect();
  });
});
