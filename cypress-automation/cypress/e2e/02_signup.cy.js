import SignupPage from "../pages/SignupPage";

describe('User sign-up and login tests', () => {
    beforeEach(() => {
        cy.visit('/sign-up');
    })

    it('TC-04: Sign-Up Form Validation (Negative)', () => {
        SignupPage.makeBusinessTabActive();
        SignupPage.fillSignupForm({
            email: '', 
            firstName: 'John', 
            lastName: 'Johnson', 
            password: 'randomchars'
        })
        SignupPage.getEmailError()
            .should('be.visible')
            .should('contain', 'Please enter an email address');
        SignupPage.getPasswordError()
            .should('be.visible')
            .should('contain', 'Password must be at least 12 characters');
        cy.location('pathname').should('include', '/sign-up');
    })
});