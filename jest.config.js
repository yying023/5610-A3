module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testMatch: ["<rootDir>/src/test/**/*.test.(js|jsx|ts|tsx)"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "^axios$": "<rootDir>/src/__mocks__/axios.js"
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  verbose: true
};

