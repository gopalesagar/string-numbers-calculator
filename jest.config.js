module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: ["**/src/**/*.spec.ts"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    }
  }
};
