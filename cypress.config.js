const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({

  video: true,  // Ensuring here that video recording is enabled
  videoUploadOnPasses: true,  // To save videos even when all tests pass
  videoCompression: false, 
  screenshotsFolder: "cypress/screenshots", 
  videosFolder: "cypress/videos",
  
  e2e: {
    specPattern: "cypress/tests/feature/shopping.feature",
    setupNodeEvents,
  },
});