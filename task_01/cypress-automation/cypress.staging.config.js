const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3seh5u", // From Cypress Cloud dashboard
  e2e: {
    baseUrl: "https://portal.telnyx.com/#",
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/staging/*.cy.{js,jsx,ts,tsx}",
    env: {
      MAILOSAUR_API_KEY: "u3xF3Am7TwH8Cl7dgUYcFeFmPYr8NPXc",
      MAILOSAUR_SERVER_ID: "4tctvri9",
      MAILOSAUR_SERVER_DOMAIN: "4tctvri9.mailosaur.net"
    },
    // blockHosts: [
    //   "*clarity.ms",
    //   "*intercom.io",
    //   "*analytics.google.com",
    //   "*google-analytics.com",
    //   "*clearbit.com",
    //   "*stackadapt.com",
    //   "*.linkedin.com",
    //   "*prism-ingest.telnyx.tech" // якщо не тестуєте їхню аналітику
    // ],
  },
});