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