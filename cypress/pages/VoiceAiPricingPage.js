import MainPage from './MainPage';

class VoiceAiPricingPage {
  get elements() {
    return {
      mainHeading: 'h1',
      calculatorSection: 'section#estimate',
      minutesInput: 'input[type="text"]#voice-ai-minutes',
      totalCostDisplay: 'p:contains("/ mo"), div:contains("$")',
    };
  }

  visit() {
    cy.visit('/pricing/voice-ai-agents');
    MainPage.handleCookies();
  }

  verifyHeader() {
    cy.get(this.elements.mainHeading)
      .should('be.visible')
      .and('contain.text', '$0.05 per minute. No fine print.');
  }

  checkAdditionalFeaturesExistence() {
    cy.contains(/orchestration|STT|TTS/i).should('be.visible');
  }

  getStartBuildingBtn() {
    return cy.contains('h2', 'Pick your commitment, not your features.').parent().parent().find('a').contains(/start building/i);
  }

  getContactSalesBtn() {
    cy.visit('/pricing/voice-ai-agents');
    return cy.contains('h2', 'Pick your commitment, not your features.').parent().parent().find('a').contains(/contact sales/i);
  }

  scrollToCalculator() {
    cy.get(this.elements.calculatorSection).scrollIntoView().should('be.visible');  
  }

  setCalculatorMinutes(minutes) {
    cy.get(this.elements.minutesInput)
      .first()
      .clear({ force: true })
      .type(`${minutes}`, { force: true })
      .trigger('change', { force: true });
  }

  getTotalCostElement() {
    return cy.contains(/per month at /i);
  }
}

export default new VoiceAiPricingPage();
