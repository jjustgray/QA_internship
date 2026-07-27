class MainPage {
  // Common Elements / Actions
  common = {
    cookieBannerAccept: () => cy.get('#onetrust-accept-btn-handler'),
  };

  // TC-01: Navigation Menu Test
  tc01 = {
    productsDropdown: () => cy.contains('span', 'Products'),
    smsApiOption: () => cy.contains('div', 'SMS API'),
  };

  // TC-02: Footer Text Main Page Test
  tc02 = {
    footer: () => cy.get('footer'),
    privacyLink: () => cy.contains('a', 'Data and Privacy'),
  };

  // TC-03: Verify navigation to Contact Us page and form availability
  tc03 = {
    contactUsHeaderLink: () => cy.get('header a[href*="/contact-us"]').first()
  };

  handleCookies() {
    // Cypress will retry looking for the accept button for up to 10 seconds
    cy.get('#onetrust-accept-btn-handler', { timeout: 10000 })
        .should('be.visible')
        .click();
  }

  navigateToSMSApi() {
    this.tc01.productsDropdown().click();
    this.tc01.smsApiOption().click();
  }

  clickContactUs() {
    this.tc03.contactUsHeaderLink().click({ force: true });
  }
}

export default new MainPage();