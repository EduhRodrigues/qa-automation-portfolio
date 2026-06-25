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

Cypress.Commands.add('acessarCadastroProdutos', () => {

  cy.get('[data-testid="cadastrarProdutos"]')
    .click()

})

Cypress.Commands.add('cadastrarProduto', (produto) => {

  if (produto.nome) {
    cy.get('[data-testid="nome"]')
      .type(produto.nome)
  }

  if (produto.preco) {
    cy.get('[data-testid="preco"]')
      .type(produto.preco)
  }

  if (produto.descricao) {
    cy.get('[data-testid="descricao"]')
      .type(produto.descricao)
  }

  if (produto.quantidade) {
    cy.get('[data-testid="quantity"]')
      .type(produto.quantidade)
  }

  if (produto.imagem) {
    cy.get('[data-testid="imagem"]')
      .selectFile(produto.imagem)
  }

  cy.get('[data-testid="cadastarProdutos"]')
    .click()

})

Cypress.Commands.add('cadastrarUsuario', (usuario) => {

  cy.get('[data-testid="nome"]')
    .type(usuario.nome)

  cy.get('[data-testid="email"]')
    .type(usuario.email)

  cy.get('[data-testid="password"]')
    .type(usuario.senha)

  if (usuario.administrador) {

    cy.get('[data-testid="checkbox"]')
      .check()

  }

  cy.get('[data-testid="cadastrar"]')
    .click()

})

Cypress.Commands.add('acessarCadastroUsuarios', () => {

  cy.visit('https://front.serverest.dev/login')

  cy.get('[data-testid="cadastrar"]')
    .click()

})

Cypress.Commands.add('cadastrarUsuario', (usuario) => {

  if (usuario.nome) {
    cy.get('[data-testid="nome"]')
      .type(usuario.nome)
  }

  if (usuario.email) {
    cy.get('[data-testid="email"]')
      .type(usuario.email)
  }

  if (usuario.senha) {
    cy.get('[data-testid="password"]')
      .type(usuario.senha)
  }

  if (usuario.admin) {
    cy.get('[data-testid="checkbox"]')
      .check()
  }

  cy.get('[data-testid="cadastrar"]')
    .click()

})

