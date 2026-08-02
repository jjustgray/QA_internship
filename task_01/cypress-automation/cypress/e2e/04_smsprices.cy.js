import MessagingPage from '../pages/MessagingPage';
import MainPage from '../pages/MainPage';

describe('TC-05: Pay for SMS in different regions', () => {
  beforeEach(() => {
    // Ignore uncaught third-party application exceptions
    Cypress.on('uncaught:exception', () => false);
    cy.visit('/pricing/messaging');
    MainPage.handleCookies();
    MessagingPage.findPayAsYouGoHeading().should('be.visible');
  });

  it('TC-05: Verify "Send outbound messages" price updates when changing regions', () => {
    // 1. Select Turkey and retrieve SMS rate
    MessagingPage.selectCountry('Turkey');
    MessagingPage.findSENDERTypesHeading().should('be.visible');
    
    // Ensure table reflects Turkey before reading
    cy.contains('Pay as you go for Turkey', { timeout: 10000 }).should('be.visible');

    MessagingPage.getSmsRate().then((turkeyPrice) => {
      cy.log(`Turkey "Send outbound messages" SMS Price: ${turkeyPrice}`);

      // 2. Select Ukraine and retrieve SMS rate
      MessagingPage.selectCountry('Ukraine');

      // Ensure heading updates to Ukraine before reading new price
      cy.contains('Pay as you go for Ukraine', { timeout: 10000 }).should('be.visible');

      MessagingPage.getSmsRate().then((ukrainePrice) => {
        cy.log(`Ukraine "Send outbound messages" SMS Price: ${ukrainePrice}`);

        // 3. Assert that prices are different across regions
        expect(ukrainePrice).to.not.equal(turkeyPrice);
      });
    });
  });
});