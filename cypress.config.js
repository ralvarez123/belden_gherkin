const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: 'https://redesign.belden.com/',
    //defaultCommandTimeout: 5000,
    
    // Retry configuration for flaky test handling
    retries: {
      runMode: 2,
      openMode: 1
    },
    
    // Viewport configuration for consistent testing
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Cucumber preprocessor setup
    
    
  setupNodeEvents: async (on, config) => {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    
    // Pattern for feature files
    //specPattern: 'cypress/e2e/step-definitions/features/*.feature',
    
    // Additional Cucumber configuration
   // excludeSpecPattern: ['*.js', '*.ts'],
   // supportFile: 'cypress/support/e2e.js'
  },
});
