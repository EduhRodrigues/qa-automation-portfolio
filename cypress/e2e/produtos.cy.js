describe('Produtos', () => {

  beforeEach(() => {
    cy.login(
      'teste.qa.admin@gmail.com',
      'senha_teste_admin'
    )
  })

  it('CT-011 - Deve cadastrar produto com sucesso', () => {

    cy.fixture('produtos').then((dados) => {

      const nomeProduto = `${dados.produtoValido.nome} ${Date.now()}`

      cy.get('[data-testid="cadastrarProdutos"]')
        .click()

      cy.get('[data-testid="nome"]')
        .type(nomeProduto)

      cy.get('[data-testid="preco"]')
        .type(dados.produtoValido.preco)

      cy.get('[data-testid="descricao"]')
        .type(dados.produtoValido.descricao)

      cy.get('[data-testid="quantity"]')
        .type(dados.produtoValido.quantidade)

      cy.get('[data-testid="imagem"]')
        .selectFile('cypress/fixtures/produto.jpg')

      cy.get('[data-testid="cadastarProdutos"]')
        .scrollIntoView()
        .click()

      cy.url()
  .should('include', '/admin/listarprodutos')

cy.get('tbody tr')
  .should('have.length.greaterThan', 0)
  
    })

  })

})