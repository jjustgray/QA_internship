class MessagingPage {
  findPayAsYouGoHeading() {
    return cy.contains('h2', 'Pay as you go');
  }

  findSENDERTypesHeading() {
    return cy.contains('h2', 'SENDER types');
  }

  selectCountry = (countryName) => {
      cy.get('button#country-filter').should('be.visible').click();
      cy.get('button#country-filter').scrollIntoView();
      cy.contains('span', countryName).click();
  }

  getSmsRate() {
    return cy.contains('div', 'Alphanumeric Sender ID')
      .parent()
      .contains('div[class*="bg-transparent"]','per message part')
      .invoke('text')
      .then((text) => {
        const match = text.match(/\$\d+\.\d+/);
        return match ? match[0] : text.trim();
      });
  }
}

export default new MessagingPage();