const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3seh5u", // From Cypress Cloud dashboard
  e2e: {
    baseUrl: "https://telnyx.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    blockHosts: [
      "*clarity.ms",
      "*intercom.io",
      "*analytics.google.com",
      "*google-analytics.com",
      "*clearbit.com",
      "*stackadapt.com",
      "*.linkedin.com",
      "*prism-ingest.telnyx.tech" // якщо не тестуєте їхню аналітику
    ],
  },
});