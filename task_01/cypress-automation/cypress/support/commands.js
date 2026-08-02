Cypress.Commands.add('typeLikeHuman', { prevSubject: 'element' }, (subject, text, minDelay = 100, maxDelay = 300) => {
  // 1. Обов'язково очищаємо поле перед введенням
  cy.wrap(subject, { log: false }).clear({ log: false })

  // 2. Перетворюємо рядок на масив символів
  const chars = text.split('')

  // 3. Використовуємо вбудований cy.wrap() + cy.each() для правильної асинхронної черги
  cy.wrap(chars, { log: false }).each((char) => {
    // Рандомна затримка обчислюється індивідуально для КОЖНОГО символу в момент його введення
    const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay)
    
    // Вводимо символ
    cy.wrap(subject, { log: false }).type(char, { delay: randomDelay, log: false })
  })

  // 4. Гарний лог у Cypress Runner
  Cypress.log({
    name: 'typeLikeHuman',
    message: text,
    $el: subject
  })

  // 5. Повертаємо subject для підтримки chaining (ланцюжків команд)
  return cy.wrap(subject, { log: false })
})
