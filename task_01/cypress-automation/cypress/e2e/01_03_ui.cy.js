import MainPage from '../pages/MainPage';

describe('UI and Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    MainPage.handleCookies();
  });

  it('TC-01: Navigation Menu Test', () => {
    MainPage.navigateToSMSApi();
    cy.url().should('include', '/products/sms-api');
    cy.title().should('include', 'SMS API');
  });

  it('TC-02: Footer Text Main Page Test', () => {
    cy.scrollTo('bottom');
    MainPage.tc02.footer().should('be.visible');
    MainPage.tc02.footer().should('contain', 'Telnyx LLC 2026');
    MainPage.tc02.privacyLink().should('be.visible').click();
  });

  it('TC-03: Verify navigation to Contact Us page and form availability', () => {
    MainPage.clickContactUs();
    cy.url().should('include', '/contact-us');

    cy.get('h1').should('be.visible');
    cy.get('form').should('exist').and('be.visible');
  });
});