class SignupPage {
    getBusinessTab = () => cy.contains('button[role="tab"]', 'Business');
    getEmailInput = () => cy.get('input#sign-up-email');
    getFirstnameInput = () => cy.get('input#sign-up-first-name');
    getLastnameInput = () => cy.get('input#sign-up-last-name');
    getPasswordInput = () => cy.get('input#sign-up-password');
    getTermsCheckbox = () => cy.get('input#sign-up-terms');
    getSignupButton = () => cy.get('form[aria-label="signup-form"] button[type="submit"]');
    getEmailError = () => cy.get('div#sign-up-email_message');
    getPasswordError = () => cy.get('div#sign-up-password_message');

    makeBusinessTabActive() {
        this.getBusinessTab()
        .click()
        .should('have.attr', 'aria-selected', 'true');
    }

    fillSignupForm(userData) {
        this.getEmailInput().clear().type(userData.email);
        this.getFirstnameInput().clear().type(userData.firstName);
        this.getLastnameInput().clear().type(userData.lastName);
        this.getPasswordInput().clear().type(userData.password);
        this.getTermsCheckbox().click();
        this.getSignupButton().click();
    }
}

export default new SignupPage();