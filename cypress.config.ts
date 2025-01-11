import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    projectId: 'your-project-id',
    env: {
      apiUrl: 'https://api.example.com',
      NEXT_PUBLIC_ENDPOINT_BASE: 'https://jsonplaceholder.typicode.com',
      NEXT_LOCAL_ENDPOINT_BASE: 'https://jsonplaceholder.typicode.com',
    },
  },
});
