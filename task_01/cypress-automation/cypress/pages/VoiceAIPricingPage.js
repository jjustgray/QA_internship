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