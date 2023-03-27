const { defineConfig } = require("cypress");
const webpackPreprocessor = require("@cypress/webpack-preprocessor");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      on("file:preprocessor", webpackPreprocessor());
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
  baseUrl: "http://localhost:3000/",
  env: {
    email: "dreamtraveler0822+11@gmail.com",
    password: "qweasdzxc!~123",
  },
});
