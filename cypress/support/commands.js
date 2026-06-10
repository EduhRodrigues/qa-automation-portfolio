Cypress.Commands.add('login', (email, senha) => {

  cy.visit('https://front.serverest.dev/login')

  cy.get('[data-testid="email"]')
    .type(email)

  cy.get('[data-testid="senha"]')
    .type(senha)

  cy.get('[data-testid="entrar"]')
    .click()

  cy.url()
    .should('include', '/home')
})

Cypress.Commands.add('logout', () => {

  cy.get('[data-testid="logout"]')
    .should('be.visible')
    .click()

})