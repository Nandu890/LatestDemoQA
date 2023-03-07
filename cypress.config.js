const { defineConfig } = require("cypress");
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  projectId: "1ehgii",
  e2e: {
   
    setupNodeEvents(on, config) {
      // implement node event listeners here,
      cypressSplit(on, config)
      return config
    },
    baseUrl:"https://demoqa.com",
    specPattern:"cypress/e2e/integration/*.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
    video:false,
    videoCompression:false
    
  },
  viewportHeight:840,
  viewportWidth:1280,
});
