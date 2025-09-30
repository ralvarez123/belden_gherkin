const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
   // baseUrl: 'https://redesign.belden.com/',
    baseUrl: 'https://stage102.belden.com/',
   // baseUrl: 'https://www.belden.com/',
    //defaultCommandTimeout: 5000,
    
    // Retry configuration for flaky test handling
    retries: {
      runMode: 2,
      openMode: 1
    },
    
    // Viewport configuration for consistent testing
    /*{ width: 430, height: 932 },  // Mobile
    { width: 834, height: 1024 }, // Tablet
    { width: 1280, height: 720 }, // Desktop
    { width: 1920, height: 1080 } // Full HD */
    viewportWidth: 430,
    viewportHeight: 932,
    video: true, // Enable video recording
    videoUploadOnPasses: false, // Set to false if you don't want to upload videos on passing tests
    videosFolder: 'cypress/videos', // Specify the folder where videos are stored
    videoCompression: 32, // Adjust the compression level (0-51, lower means better quality)
    /* videoFileName: () => {
      // Generate a unique video file name using a timestamp
      const timestamp = new Date().toISOString().replace(/[name]/g, '-'); // Replace colons and dots for valid filename
      return `cypress-video-${timestamp}.mp4`;}, */
      screenshotOnRunFailure: true, // Capture screenshots on failure
      reporter: "cypress-multi-reporters",
      reporterOptions: {
        configFile: "reporter-config.json"
      },
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
