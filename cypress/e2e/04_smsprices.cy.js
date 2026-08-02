import MessagingPage from '../pages/MessagingPage';
import MainPage from '../pages/MainPage';

describe('Pay for SMS in different regions', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.visit('/pricing/messaging');
    MainPage.handleCookies();
    MessagingPage.findPayAsYouGoHeading().should('be.visible');
  });

  it('TC-05: Verify "Send outbound messages" price updates when changing regions', () => {
    MessagingPage.selectCountry('Turkey');
    MessagingPage.findSENDERTypesHeading().should('be.visible');
    
    cy.contains('Pay as you go for Turkey', { timeout: 10000 }).should('be.visible');

    MessagingPage.getSmsRate().then((turkeyPrice) => {
      cy.log(`Turkey "Send outbound messages" SMS Price: ${turkeyPrice}`);

      MessagingPage.selectCountry('Ukraine');

      cy.contains('Pay as you go for Ukraine', { timeout: 10000 }).should('be.visible');

      MessagingPage.getSmsRate().then((ukrainePrice) => {
        cy.log(`Ukraine "Send outbound messages" SMS Price: ${ukrainePrice}`);
        expect(ukrainePrice).to.not.equal(turkeyPrice);
      });
    });
  });
});