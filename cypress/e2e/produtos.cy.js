describe('Produtos', () => {

 beforeEach(() => {

    cy.cadastrarAdministrador()

    cy.get('@admin').then((admin) => {

      cy.login(
        admin.email,
        admin.senha
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

it('CT-013 - Deve exibir mensagem ao tentar cadastrar produto sem preco', () => {

  cy.fixture('produtos').then(({ produtoSemPreco }) => {

    cy.acessarCadastroProdutos()

    cy.cadastrarProduto(produtoSemPreco)

    cy.contains('Preco é obrigatório')
      .should('be.visible')

  })
})

it('CT-014 - Deve exibir mensagem ao tentar cadastrar produto sem descricao', () => {

  cy.fixture('produtos').then(({ produtoSemDescricao }) => {

    cy.acessarCadastroProdutos()

    cy.cadastrarProduto(produtoSemDescricao)

    cy.contains('Descricao é obrigatório')
      .should('be.visible')

  })
})

it('CT-015 - Deve exibir mensagem ao tentar cadastrar produto sem quantidade', () => {

  cy.fixture('produtos').then(({ produtoSemQuantidade }) => {

    cy.acessarCadastroProdutos()

    cy.cadastrarProduto(produtoSemQuantidade)

    cy.contains('Quantidade é obrigatório')
      .should('be.visible')

  })
})

it('CT-016 - Deve cadastrar produto com sucesso sem imagem', () => {

  cy.fixture('produtos').then(({ produtoSemImagem }) => {

    const nomeProduto = `${produtoSemImagem.nome} ${Date.now()}`

    cy.acessarCadastroProdutos()

    cy.cadastrarProduto({
      nome: nomeProduto,
      preco: produtoSemImagem.preco,
      descricao: produtoSemImagem.descricao,
      quantidade: produtoSemImagem.quantidade
    })

    cy.url()
      .should('include', '/admin/listarprodutos')

    cy.contains(nomeProduto)
      .should('be.visible')

  })
})

it('CT-017 - Deve validar preço igual a zero', () => {

  cy.fixture('produtos').then((dados) => {

    cy.acessarCadastroProdutos()

    cy.cadastrarProduto({
      nome: dados.produtoPrecoZero.nome,
      preco: dados.produtoPrecoZero.preco,
      descricao: dados.produtoPrecoZero.descricao,
      quantidade: dados.produtoPrecoZero.quantidade
    })

    cy.contains('Preco deve ser um número positivo')
      .should('be.visible')

  })
})

it('CT-018 - Deve permitir cadastro com quantidade igual a zero', () => {

  cy.fixture('produtos').then((dados) => {

    const nomeProduto =
      `${dados.produtoQuantidadeZero.nome} ${Date.now()}`

    cy.acessarCadastroProdutos()

    cy.cadastrarProduto({
      nome: nomeProduto,
      preco: dados.produtoQuantidadeZero.preco,
      descricao: dados.produtoQuantidadeZero.descricao,
      quantidade: dados.produtoQuantidadeZero.quantidade
    })

    cy.url()
      .should('include', '/admin/listarprodutos')

    cy.contains(nomeProduto)
      .should('be.visible')

  })
})

it('CT-019 - Deve aceitar apenas números no campo preço', () => {

  cy.acessarCadastroProdutos()

  cy.get('[data-testid="preco"]')
    .type('abc')

  cy.get('[data-testid="preco"]')
    .should('have.value', '')

})

it('CT-020 - Deve impedir cadastro com caractere não numérico na quantidade', () => {

  cy.acessarCadastroProdutos()

  cy.get('[data-testid="quantity"]')
    .type('e')

  cy.get('[data-testid="quantity"]')
    .should('have.value', '')

})

it('CT-021 - Deve cadastrar produto com nome contendo caracteres especiais', () => {

  cy.fixture('produtos').then(({ produtoNomeEspecial }) => {

    const nomeProduto =
      `${produtoNomeEspecial.nome} ${Date.now()}`

    cy.acessarCadastroProdutos()

    cy.cadastrarProduto({
      nome: nomeProduto,
      preco: produtoNomeEspecial.preco,
      descricao: produtoNomeEspecial.descricao,
      quantidade: produtoNomeEspecial.quantidade
    })

    cy.url()
      .should('include', '/admin/listarprodutos')

    cy.contains(nomeProduto)
      .should('be.visible')

  })

})

it('CT-022 - Deve cadastrar produto com descrição extensa', () => {

  cy.fixture('produtos').then(({ produtoDescricaoExtensa }) => {

    const nomeProduto =
      `${produtoDescricaoExtensa.nome} ${Date.now()}`

    cy.acessarCadastroProdutos()

    cy.cadastrarProduto({
      nome: nomeProduto,
      preco: produtoDescricaoExtensa.preco,
      descricao: produtoDescricaoExtensa.descricao,
      quantidade: produtoDescricaoExtensa.quantidade
    })

    cy.url()
      .should('include', '/admin/listarprodutos')

    cy.contains(nomeProduto)
      .should('be.visible')

  })

})

it('CT-023 - Deve exibir produto recém-cadastrado na listagem', () => {

  cy.fixture('produtos').then(({ produtoValido }) => {

    const nomeProduto =
      `${produtoValido.nome} ${Date.now()}`

    cy.acessarCadastroProdutos()

    cy.cadastrarProduto({
      nome: nomeProduto,
      preco: produtoValido.preco,
      descricao: produtoValido.descricao,
      quantidade: produtoValido.quantidade
    })

    cy.contains('tr', nomeProduto)
      .should('contain', produtoValido.preco)
      .and('contain', produtoValido.descricao)
      .and('contain', produtoValido.quantidade)

  })
})

// CT-024 - Status: Não Executado | Motivo: Funcionalidade de busca de produtos inexistente (BUG-002)
// CT-025 - Status: Não Executado | Motivo: Não existe tela de visualização/detalhes do produto (BUG-003)
// CT-026 - Status: Bloqueado | Motivo: Funcionalidade Editar Produto indisponível (BUG-001)
// CT-027 - Status: Bloqueado | Motivo: Dependente da implementação da funcionalidade de edição de produto (CT-026)

it('CT-028 - Deve excluir produto com sucesso', () => {

  cy.fixture('produtos').then(({ produtoValido }) => {

    const nomeProduto =
      `${produtoValido.nome} ${Date.now()}`

    cy.acessarCadastroProdutos()

    cy.cadastrarProduto({
      nome: nomeProduto,
      preco: produtoValido.preco,
      descricao: produtoValido.descricao,
      quantidade: produtoValido.quantidade
    })

    cy.contains('tr', nomeProduto)
      .within(() => {
        cy.contains('Excluir').click()
      })

    cy.url()
      .should('include', '/admin/listarprodutos')

  })
})

it('CT-029 - Deve remover produto da listagem após exclusão', () => {

  cy.fixture('produtos').then(({ produtoValido }) => {

    const nomeProduto =
      `${produtoValido.nome} ${Date.now()}`

    cy.acessarCadastroProdutos()

    cy.cadastrarProduto({
      nome: nomeProduto,
      preco: produtoValido.preco,
      descricao: produtoValido.descricao,
      quantidade: produtoValido.quantidade
    })

    cy.contains('tr', nomeProduto)
      .within(() => {
        cy.contains('Excluir').click()
      })

    cy.contains(nomeProduto)
      .should('not.exist')

  })
})
})

describe('Produtos sem autenticação', () => {

  it('CT-030 - Deve impedir acesso ao cadastro de produtos sem autenticação', () => {

    cy.visit('https://front.serverest.dev/admin/cadastrarprodutos')

    cy.url()
      .should('include', '/login')

  })

})