import 'cypress-mailosaur';
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing tests when third-party or application scripts crash
  return false;
});