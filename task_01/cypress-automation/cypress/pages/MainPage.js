class MainPage {
  // Единое хранилище всех DOM-селекторов страницы
  get elements() {
    return {
      // Cookie banner
      cookieBannerAccept: () => cy.get('#onetrust-accept-btn-handler'),

      // Navigation / Header
      productsDropdown: () => cy.contains('span', 'Products'),
      viewAllPrimitivesLink: () => cy.contains('a', /view all primitives/i),
      contactUsHeaderLink: () => cy.get('header a[href*="/contact-us"]').first(),

      // Footer
      footer: () => cy.get('footer'),
      privacyLink: () => cy.contains('a', 'Data and Privacy'),
    };
  }

  // Методы действий (Actions)
  handleCookies() {
    this.elements
      .cookieBannerAccept()
      .should('be.visible')
      .click();
  }

  navigateToDFPage() {
    this.elements.productsDropdown().click();
    this.elements.viewAllPrimitivesLink().click({ force: true });
  }

  clickContactUs() {
    this.elements.contactUsHeaderLink().click({ force: true });
  }
}

export default new MainPage();