describe('Login', () => {

  it('CT-001 - Deve realizar login com sucesso', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioValido

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
    .should('be.visible')
    .type(usuario.email)

    cy.get('[data-testid="senha"]')
    .should('be.visible')
    .type(usuario.senha)

    cy.get('[data-testid="entrar"]')
    .should('be.visible')
    .click()
    
    cy.url()
    .should('include', '/home')

    cy.contains('Serverest Store')
    .should('be.visible')
   })
  })

  it('CT-002 - Deve exibir mensagem de erro ao informar senha inválida', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioSenhaInvalida

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
    .should('be.visible')
    .type(usuario.email)

    cy.get('[data-testid="senha"]')
    .should('be.visible')
    .type(usuario.senha)

    cy.get('[data-testid="entrar"]')
    .should('be.visible')
    .click()

    cy.url()
    .should('include', '/login')

    cy.get('.alert')
    .should('be.visible')
    .should('contain.text', 'Email e/ou senha inválidos')
   })
  })
})