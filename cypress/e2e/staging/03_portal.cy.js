describe('Telnyx Portal', () => {
  const serverId = Cypress.env('MAILOSAUR_SERVER_ID');
  const serverDomain = Cypress.env('MAILOSAUR_SERVER_DOMAIN');

  beforeEach(() => {
    cy.visit('/login');
  });

  it('TC-06: Log in via Magic Link from email (Negative)', () => {
    const testEmail = `user_${Date.now()}@${serverDomain}`;

    cy.get('input[name="email"]')
      .typeLikeHuman(testEmail)
      .should('have.value', testEmail);
    cy.contains('button', 'Send me sign-in link').click();

    cy.contains(/Security verification failed/i, { timeout: 10000 }).should('be.visible');
    cy.log('Security verification failed message is displayed.');

    // cy.contains(/Check your email|Magic link sent/i, { timeout: 10000 }).should('be.visible');

    // cy.mailosaurGetMessage(serverId, {
    //   sentTo: testEmail
    // }, {
    //   timeout: 30000 // таймаут ожидания письма 30 секунд
    // }).then((email) => {
    //   expect(email.subject).to.match(/login|magic link|log in/i);

    //   const magicLinkUrl = email.html.links.find(link => 
    //     link.href && link.href.includes('portal.telnyx.com')
    //   )?.href;

    //   expect(magicLinkUrl).to.be.a('string').and.not.be.empty;

    //   cy.visit(magicLinkUrl);

    //   cy.url().should('include', '/home');
    //   cy.get('body').should('not.contain', 'Log in');
    // });
  });

  it('TC-07: Toggle theme between light and dark mode', () => {
    cy.get('.MuiSwitch-root input[type="checkbox"]')
      .first()
      .as('themeSwitch');

    cy.get('@themeSwitch').then(($input) => {
      const isInitiallyChecked = $input.prop('checked');

      cy.get('@themeSwitch').click({ force: true });

      cy.get('@themeSwitch').should(($updatedInput) => {
        expect($updatedInput.prop('checked')).to.not.equal(isInitiallyChecked);
      });

      cy.get('@themeSwitch').click({ force: true });

      cy.get('@themeSwitch').should(($finalInput) => {
        expect($finalInput.prop('checked')).to.equal(isInitiallyChecked);
      });
    });
  });
});