import VoiceAiPricingPage from '../pages/VoiceAiPricingPage';

describe('Voice AI Agents Pricing Page Tests (POM)', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false);

    VoiceAiPricingPage.visit();
  });

  it.skip('TC-08: Should display Voice AI pricing elements and rate per minute', () => {
    // 1. Проверяем главный заголовок страницы
    VoiceAiPricingPage.verifyHeader();

    // 2. Проверяем наличие базовой ставки $0.05 за минуту
    VoiceAiPricingPage.verifyPricingRate('$0.05');

    // 3. Дополнительно проверяем присутствие упоминания базовых функций (STT / TTS / Orchestration)
    cy.contains(/orchestration|STT|TTS/i).should('be.visible');
  });

  it.skip('TC-09: Should verify CTA navigation buttons and their links', () => {
    // 1. Проверяем кнопку регистрационной воронки (Start Building Free / Sign Up)
    VoiceAiPricingPage.getStartBuildingBtn()
      .should('have.attr', 'href')
      .and('include', 'sign-up');

    // 2. Проверяем кнопку связи с экспертом / отделом продаж (Talk to an Expert)
    VoiceAiPricingPage.getTalkToExpertBtn()
      .should('have.attr', 'href')
      .and('include', 'contact-us');
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
            .then((updatedCostText) => { // Changed .should() to .then()
                cy.log(`Updated Cost: ${updatedCostText}`);
                expect(updatedCostText.trim()).to.not.equal(initialCostText.trim());
            });
        });
    });
});