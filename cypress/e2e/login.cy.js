describe('Login', () => {

  it('CT-001 - Deve realizar login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('email_teste@gmail.com')
    cy.get('[data-testid="senha"]').type('senha_teste')
    cy.get('[data-testid="entrar"]').click()
    cy.url().should('eq', 'https://front.serverest.dev/home')
    cy.contains('Serverest Store').should('be.visible')
  })
})