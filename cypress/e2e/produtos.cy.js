describe('Produtos', () => {

 beforeEach(() => {

  cy.fixture('usuarios').then(({ usuarioAdmin }) => {

    cy.login(
      usuarioAdmin.email,
      usuarioAdmin.senha
    )
  })
})

  it('CT-011 - Deve cadastrar produto com sucesso', () => {

    cy.fixture('produtos').then((dados) => {

      const nomeProduto = `${dados.produtoValido.nome} ${Date.now()}`

      cy.acessarCadastroProdutos()

      cy.cadastrarProduto({
        nome: nomeProduto,
        preco: dados.produtoValido.preco,
        descricao: dados.produtoValido.descricao,
        quantidade: dados.produtoValido.quantidade
    })

      cy.url()
        .should('include', '/admin/listarprodutos')

      cy.contains(nomeProduto)
        .should('be.visible')
    })
  })

  it('CT-012 - Deve exibir mensagem ao tentar cadastrar produto sem nome', () => {

  cy.fixture('produtos').then(({ produtoSemNome }) => {

    cy.acessarCadastroProdutos()

    cy.cadastrarProduto(produtoSemNome)

    cy.contains('Nome é obrigatório')
      .should('be.visible')

  })

})
})