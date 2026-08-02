import mainPage from '../pages/MainPage';

describe('UI and Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    mainPage.handleCookies();
  });

  it('TC-01: Navigation Menu Test', () => {
    mainPage.navigateToDFPage();
    cy.url().should('include', '/products');
    cy.title().should('include', 'Products Overview');
  });

  it.skip('TC-02: Footer Text Main Page Test', () => {
    cy.scrollTo('bottom');
    mainPage.elements.footer().should('be.visible');
    mainPage.elements.footer().should('contain', 'Telnyx LLC 2026');
    mainPage.elements.privacyLink().should('be.visible').click();
  });

  it.skip('TC-03: Verify navigation to Contact Us page and form availability', () => {
    mainPage.clickContactUs();
    cy.url().should('include', '/contact-us');

    cy.get('h1').should('be.visible');
    cy.get('form').should('exist').and('be.visible');
  });
});