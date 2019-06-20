module.exports = {
  rootDir: "..",
  testURL: "http://localhost:8080",
  moduleNameMapper: {
    "~(.*)$": "<rootDir>/src/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/styleMock.js",
    "\\.(s?css|less)$": "<rootDir>/jest/styleMock.js"
  },
  transform: {
    "^.+\\.[tj]sx?$": "<rootDir>/node_modules/babel-jest"
  },
  moduleFileExtensions: ["js", "ts", "tsx", "json", "es6"],
  testRegex: "/jest/.*spec\\.tsx?$",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/jest/"
    // 'CompareModelVersionsAllocationsTable',
    // 'ModelDetailsTable',
    // 'ModelsListTable',
    // 'NumericEditor',
  ],
  setupFilesAfterEnv: ["<rootDir>/jest/enzyme-test-setup.js"],
  displayName: "unit",
  globals: {
    NODE_ENV: "test"
  }
};
