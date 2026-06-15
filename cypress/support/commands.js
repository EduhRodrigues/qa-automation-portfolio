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

  cy.get('[data-testid="nome"]')
    .type(produto.nome)

  cy.get('[data-testid="preco"]')
    .type(produto.preco)

  cy.get('[data-testid="descricao"]')
    .type(produto.descricao)

  cy.get('[data-testid="quantity"]')
    .type(produto.quantidade)

  cy.get('[data-testid="imagem"]')
    .selectFile('cypress/fixtures/produto.jpg')

  cy.get('[data-testid="cadastarProdutos"]')
    .click()

})