import { defineConfig } from 'cypress'
import EndToEndConfigOptions = Cypress.EndToEndConfigOptions

const cypressJsonConfig: EndToEndConfigOptions = {
  baseUrl: 'http://localhost:3000',
  fileServerFolder: '.',
  fixturesFolder: 'src/test/fixtures',
  video: true,
  videosFolder: 'src/test/videos',
  screenshotsFolder: 'src/test/screenshots',
  chromeWebSecurity: false,
  specPattern: 'src/test/e2e/**/*.cy.{js,jsx,ts,tsx}',
  supportFile: false,
}

export default defineConfig({
  waitForAnimations: false,
  fileServerFolder: 'src/test',
  e2e: {
    ...cypressJsonConfig,
  },
})
