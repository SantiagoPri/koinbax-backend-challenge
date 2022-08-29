module.exports = {
  //testEnvironment: "node",
  moduleFileExtensions: ["js", "json"],
  collectCoverageFrom: ["**/*.js"],
  coverageReporters: ["html", "text"],
  testMatch: ["**/__test__/**/*.js"],
  testPathIgnorePatterns: ["__mocks__"],
  preset: "@shelf/jest-mongodb",
};
