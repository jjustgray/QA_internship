import MainPage from './MainPage';

class VoiceAiPricingPage {
  get elements() {
    return {
      mainHeading: () => cy.get('h1'),
      calculatorSection: () => cy.get('section#estimate'),
      minutesInput: () => cy.get('input[type="text"]#voice-ai-minutes'),
      totalCostElement: () => cy.contains(/per month at /i),
    };
  }

  visit() {
    cy.visit('/pricing/voice-ai-agents');
    MainPage.handleCookies();
  }

  verifyHeader() {
    this.elements.mainHeading()
      .should('be.visible')
      .and('contain.text', '$0.05 per minute. No fine print.');
  }

  checkAdditionalFeaturesExistence() {
    cy.contains(/orchestration|STT|TTS/i).should('be.visible');
  }

  getStartBuildingBtn() {
    return cy.contains('h2', 'Pick your commitment, not your features.')
      .parent().parent()
      .find('a')
      .contains(/start building/i);
  }

  getContactSalesBtn() {
    return cy.contains('h2', 'Pick your commitment, not your features.')
      .parent().parent()
      .find('a')
      .contains(/contact sales/i);
  }

  scrollToCalculator() {
    this.elements.calculatorSection().scrollIntoView().should('be.visible');  
  }

  setCalculatorMinutes(minutes) {
    this.elements.minutesInput()
      .first()
      .clear()
      .type(`${minutes}`)
      .trigger('change');
  }
}

export default new VoiceAiPricingPage();
