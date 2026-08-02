class MessagingPage {
  findPayAsYouGoHeading() {
    return cy.contains('h2', 'Pay as you go');
  }

  findSENDERTypesHeading() {
    return cy.contains('h2', 'SENDER types');
  }

  selectCountry = (countryName) => {
      cy.get('#country-filter').click({force: true});
      cy.contains('span', countryName).click();
  }

  getSmsRate() {
    return cy
      .contains('div, span, td', 'Send outbound messages')
      .parent() // Scope to the parent container/row holding both the label and price
      .get(':nth-child(1) > :nth-child(3) > .bg-transparent') // Find the price element within that row
      .invoke('text')
      .then((text) => {
        const match = text.match(/\$\d+\.\d+/);
        return match ? match[0] : text.trim();
      });
  }
}

export default new MessagingPage();