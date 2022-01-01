module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};
