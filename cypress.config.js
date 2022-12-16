const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here,
    },
    baseUrl:"https://demoqa.com",
    specPattern:"cypress/e2e/integration/*.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
    
  },
  viewportHeight:840,
  viewportWidth:1280,
});
