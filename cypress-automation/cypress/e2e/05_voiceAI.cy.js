import VoiceAiPricingPage from '../pages/VoiceAiPricingPage';

describe('Voice AI Agents Pricing Page Tests (POM)', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false);

    VoiceAiPricingPage.visit();
  });

  it('TC-08: Voice AI pricing elements and rate per minute', () => {
    VoiceAiPricingPage.verifyHeader();
    VoiceAiPricingPage.checkAdditionalFeaturesExistence();
  });

  it('TC-09: Sign-up or contact-sales buttons on Voice AI Pricing Page', () => {
    VoiceAiPricingPage.getStartBuildingBtn()
      .click()
      .url('should', 'include', '/sign-up');

    cy.visit('/pricing/voice-ai-agents');
    VoiceAiPricingPage.getContactSalesBtn()
      .click()
      .url('should', 'include', '/contact-us');
  });

    it('TC-10: Dynamical calculator total monthly cost', () => {
        VoiceAiPricingPage.scrollToCalculator();

        VoiceAiPricingPage.getTotalCostElement()
        .invoke('text')
        .then((initialCostText) => {
            cy.log(`Initial Cost: ${initialCostText}`);

            VoiceAiPricingPage.setCalculatorMinutes(50000);

            VoiceAiPricingPage.getTotalCostElement()
            .invoke('text')
            .then((updatedCostText) => {
                cy.log(`Updated Cost: ${updatedCostText}`);
                expect(updatedCostText.trim()).to.not.equal(initialCostText.trim());
            });
        });
    });
});