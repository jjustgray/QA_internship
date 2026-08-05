class MainPage {
  // Единое хранилище всех DOM-селекторов страницы
  get elements() {
    return {
      // Cookie banner
      cookieBannerAccept: () => cy.get('#onetrust-accept-btn-handler'),

      // Navigation / Header
      productsDropdown: () => cy.contains('span', 'Products'),
      viewAllPrimitivesLink: () => cy.contains('span', /view all primitives/i),
      contactUsHeaderLink: () => cy.get('header').contains('a:visible', /contact us/i),
      footer: () => cy.get('footer'),
      privacyLink: () => cy.contains('a', 'Data and Privacy'),
    };
  }

  // Методы действий (Actions)
  handleCookies() {
    this.elements
      .cookieBannerAccept()
      .click();
  }

  navigateToDFPage() {
    this.elements.productsDropdown().click();
    this.elements.viewAllPrimitivesLink().should('be.visible').click();
  }

  clickContactUs() {
    this.elements.contactUsHeaderLink().click();
  }
}

export default new MainPage();