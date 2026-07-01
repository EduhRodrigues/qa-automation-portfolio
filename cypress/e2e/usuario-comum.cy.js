describe('Usuário Comum', () => {

  // =====================================================
  // Preparação da massa de dados
  //
  // Todos os cenários utilizam um usuário comum criado
  // via API, reduzindo o tempo de execução e evitando
  // dependência da interface para preparação dos testes.
  // =====================================================

  beforeEach(() => {
    cy.criarUsuarioAPI()
  })

  // =====================================================
  // CT-043
  // Deve realizar login como usuário comum
  // =====================================================

  it('CT-043 - Deve realizar login como usuário comum', () => {

    cy.get('@usuario').then((usuario) => {

      cy.login(usuario.email, usuario.senha)

      cy.url().should('include', '/home')

      cy.contains('Produtos')
        .should('be.visible')

    })

  })

  // =====================================================
  // CT-044
  // Deve exibir a Home do usuário comum após login
  // =====================================================

  it('CT-044 - Deve exibir a Home do usuário comum após o login', () => {

    cy.get('@usuario').then((usuario) => {

      cy.login(usuario.email, usuario.senha)

      cy.url().should('include', '/home')

      cy.contains('Produtos')
        .should('be.visible')

      cy.get('[data-testid="pesquisar"]')
        .should('be.visible')

      cy.contains('Adicionar a lista')
        .should('be.visible')

      cy.contains('Cadastrar Usuários').should('not.exist')
      cy.contains('Listar Usuários').should('not.exist')
      cy.contains('Cadastrar Produtos').should('not.exist')
      cy.contains('Listar Produtos').should('not.exist')
      cy.contains('Relatórios').should('not.exist')

    })

  })

  // =====================================================
  // CT-045
  // Deve pesquisar produto existente
  // =====================================================

  it('CT-045 - Deve pesquisar produto existente', () => {

    cy.get('@usuario').then((usuario) => {

      cy.login(usuario.email, usuario.senha)

      cy.get('[data-testid="pesquisar"]')
        .type('Logitech')

      cy.contains('button', 'Pesquisar')
        .click()

      cy.contains('Logitech')
        .should('be.visible')

      cy.contains('Adicionar a lista')
        .should('be.visible')

    })

  })

  // =====================================================
  // CT-046
  // Deve informar quando nenhum produto for encontrado
  // =====================================================

  it('CT-046 - Deve informar quando a pesquisa não localizar produtos', () => {

    cy.get('@usuario').then((usuario) => {

      cy.login(usuario.email, usuario.senha)

      cy.get('[data-testid="pesquisar"]')
        .type(`produto_inexistente_${Date.now()}`)

      cy.contains('button', 'Pesquisar')
        .click()

      cy.contains('Nenhum produto foi encontrado')
        .should('be.visible')

      cy.url().should('include', '/home')

    })

  })

  // =====================================================
  // CT-047
  // Deve adicionar produto à lista de compras
  // =====================================================

  it('CT-047 - Deve adicionar produto à lista de compras', () => {

    cy.criarAdministradorAPI()

    cy.get('@admin').then((admin) => {

      cy.criarProdutoAPI(admin)

      cy.get('@produto').then((produto) => {

        cy.get('@usuario').then((usuario) => {

          cy.login(usuario.email, usuario.senha)

          cy.get('[data-testid="pesquisar"]')
            .clear()
            .type(produto.nome)

          cy.contains('button', 'Pesquisar')
            .click()

          cy.contains(produto.nome)
            .should('be.visible')

          cy.contains('Adicionar a lista')
            .click()

          cy.get('[data-testid="lista-de-compras"]')
            .click()

          cy.contains(produto.nome)
            .should('be.visible')

          cy.get('.card')
            .should('have.length.at.least', 1)

        })

      })

    })

  })

  // =====================================================
  // CT-048
  // Deve aumentar a quantidade do produto na lista
  // =====================================================

  it('CT-048 - Deve aumentar a quantidade do produto na lista de compras', () => {

    cy.criarAdministradorAPI()

    cy.get('@admin').then((admin) => {

      cy.criarProdutoAPI(admin)

      cy.get('@produto').then((produto) => {

        cy.get('@usuario').then((usuario) => {

          cy.login(usuario.email, usuario.senha)

          cy.get('[data-testid="pesquisar"]')
            .clear()
            .type(produto.nome)

          cy.contains('button', 'Pesquisar')
            .click()

          cy.contains(produto.nome)
            .should('be.visible')

          cy.contains('Adicionar a lista')
            .click()

          cy.get('[data-testid="lista-de-compras"]')
            .click()

          cy.contains(produto.nome)
            .should('be.visible')

          cy.get('[data-testid="product-increase-quantity"]')
            .click()

          cy.contains(produto.nome)
            .should('be.visible')

          cy.get('.card')
            .should('have.length.at.least', 1)

        })

      })
    })
  })

 // =====================================================
// CT-049
// Deve realizar logout com sucesso
//
// Prioridade: Alta
// Massa de dados:
// - Usuário comum criado via API (beforeEach)
// =====================================================

it('CT-049 - Deve realizar logout com sucesso', () => {

  cy.get('@usuario').then((usuario) => {

    // Login
    cy.login(
      usuario.email,
      usuario.senha
    )

    cy.url()
      .should('include', '/home')

    // Logout
    cy.logout()

    // Valida retorno para tela de login
    cy.url()
      .should('include', '/login')

    // Valida elementos da tela de login
    cy.get('[data-testid="email"]')
      .should('be.visible')

    cy.get('[data-testid="senha"]')
      .should('be.visible')

    cy.contains('Entrar')
      .should('be.visible')

  })

})


// =====================================================
// CT-050
// Não deve acessar a Home após realizar logout utilizando
// o botão Voltar do navegador
//
// Prioridade: Alta
// Massa de dados:
// - Usuário comum criado via API (beforeEach)
// =====================================================

it('CT-050 - Não deve acessar a Home após realizar logout utilizando o botão Voltar do navegador', () => {

  cy.get('@usuario').then((usuario) => {

    // Login
    cy.login(
      usuario.email,
      usuario.senha
    )

    cy.url()
      .should('include', '/home')

    // Logout
    cy.logout()

    cy.url()
      .should('include', '/login')

    // Simula clique no botão Voltar do navegador
    cy.go('back')

    // O usuário não deve voltar para a área autenticada
    cy.url()
      .should('include', '/login')

    // Tela de login continua sendo exibida
    cy.get('[data-testid="email"]')
      .should('be.visible')

    cy.get('[data-testid="senha"]')
      .should('be.visible')

    cy.contains('Entrar')
      .should('be.visible')

    })
  })

 // =====================================================
// CT-051
// Deve limpar a lista de compras com sucesso
//
// Prioridade: Alta
// Massa de dados:
// - Usuário comum criado via API (beforeEach)
// - Administrador criado via API
// - Produto criado via API
// =====================================================

it('CT-051 - Deve limpar a lista de compras com sucesso', () => {

  cy.criarAdministradorAPI()

  cy.get('@admin').then((admin) => {

    cy.criarProdutoAPI(admin)

    cy.get('@produto').then((produto) => {

      cy.get('@usuario').then((usuario) => {

        // Login
        cy.login(
          usuario.email,
          usuario.senha
        )

        // Pesquisa o produto criado
        cy.get('[data-testid="pesquisar"]')
          .clear()
          .type(produto.nome)

        cy.contains('button', 'Pesquisar')
          .click()

        // Adiciona à lista
        cy.contains('Adicionar a lista')
          .click()

        // Abre a lista
        cy.get('[data-testid="lista-de-compras"]')
          .click()

        // Valida que o produto foi adicionado
        cy.contains(produto.nome)
          .should('be.visible')

        // Limpa a lista
        cy.get('[data-testid="limparLista"]')
          .click()

        // Valida que o produto não existe mais
        cy.contains(produto.nome)
          .should('not.exist')

      })

    })

  })
})

// =====================================================
// CT-052
// Deve adicionar dois produtos diferentes à lista de compras
//
// Prioridade: Alta
// Massa de dados:
// - Usuário comum criado via API (beforeEach)
// - Administrador criado via API
// - Dois produtos criados via API
// =====================================================

it('CT-052 - Deve adicionar dois produtos diferentes à lista de compras', () => {

  // Cria administrador
  cy.criarAdministradorAPI()

  cy.get('@admin').then((admin) => {

    // Cria o primeiro produto
    cy.criarProdutoAPI(admin)

    cy.get('@produto').then((produto1) => {

      // Cria o segundo produto
      cy.criarProdutoAPI(admin)

      cy.get('@produto').then((produto2) => {

        cy.get('@usuario').then((usuario) => {

          // Login
          cy.login(
            usuario.email,
            usuario.senha
          )

          // ==========================
          // Produto 1
          // ==========================

          cy.get('[data-testid="pesquisar"]')
            .should('be.visible')
            .clear()
            .type(produto1.nome)

          cy.contains('button', 'Pesquisar')
            .click()

          cy.contains(produto1.nome)
            .should('be.visible')

          cy.contains('Adicionar a lista')
            .click()

          // ==========================
          // Volta para Home
          // ==========================

          cy.contains('Página Inicial')
            .click()

          cy.url()
            .should('include', '/home')

          // Aguarda a Home carregar completamente
          cy.contains('Produtos')
            .should('be.visible')

          cy.get('[data-testid="pesquisar"]', { timeout: 10000 })
            .should('be.visible')
            .clear()

          // ==========================
          // Produto 2
          // ==========================

          cy.get('[data-testid="pesquisar"]')
            .type(produto2.nome)

          cy.contains('button', 'Pesquisar')
            .click()

          cy.contains(produto2.nome)
            .should('be.visible')

          cy.contains('Adicionar a lista')
            .click()

          // ==========================
          // Valida a lista
          // ==========================

          cy.contains(produto1.nome)
            .should('be.visible')

          cy.contains(produto2.nome)
            .should('be.visible')

          cy.get('.card')
            .should('have.length', 2)

        })

      })

    })

  })

})

// =====================================================
// CT-053
// Deve diminuir a quantidade do produto na lista de compras
//
// Prioridade: Alta
// Massa de dados:
// - Usuário comum criado via API (beforeEach)
// - Administrador criado via API
// - Produto criado via API
// =====================================================

it('CT-053 - Deve diminuir a quantidade do produto na lista de compras', () => {

  cy.criarAdministradorAPI()

  cy.get('@admin').then((admin) => {

    cy.criarProdutoAPI(admin)

    cy.get('@produto').then((produto) => {

      cy.get('@usuario').then((usuario) => {

        // Login
        cy.login(
          usuario.email,
          usuario.senha
        )

        // Pesquisa o produto
        cy.get('[data-testid="pesquisar"]')
          .clear()
          .type(produto.nome)

        cy.contains('button', 'Pesquisar')
          .click()

        cy.contains(produto.nome)
          .should('be.visible')

        // Adiciona à lista
        cy.contains('Adicionar a lista')
          .click()

        // Aumenta para 2 unidades
        cy.get('[data-testid="product-increase-quantity"]')
          .click()

        // Valida Total = 2
        cy.contains(/^Total:\s*2$/)
          .should('be.visible')

        // Diminui novamente
        cy.get('[data-testid="product-decrease-quantity"]')
          .click()

        // Valida Total = 1
        cy.contains(/^Total:\s*1$/)
          .should('be.visible')

          })

      })

    })

  })

  // =====================================================
// CT-054
// Não deve permitir quantidade inferior a 1
//
// Prioridade: Alta
// Massa de dados:
// - Usuário comum criado via API (beforeEach)
// - Administrador criado via API
// - Produto criado via API
// =====================================================

it('CT-054 - Não deve permitir quantidade inferior a 1', () => {

  cy.criarAdministradorAPI()

  cy.get('@admin').then((admin) => {

    cy.criarProdutoAPI(admin)

    cy.get('@produto').then((produto) => {

      cy.get('@usuario').then((usuario) => {

        // Login
        cy.login(
          usuario.email,
          usuario.senha
        )

        // Pesquisa o produto
        cy.get('[data-testid="pesquisar"]')
          .clear()
          .type(produto.nome)

        cy.contains('button', 'Pesquisar')
          .click()

        cy.contains(produto.nome)
          .should('be.visible')

        // Adiciona à lista
        cy.contains('Adicionar a lista')
          .click()

        // Quantidade inicial = 1
        cy.contains(/^Total:\s*1$/)
          .should('be.visible')

        // Tenta diminuir abaixo de 1
        cy.get('[data-testid="product-decrease-quantity"]')
          .click()

        // Continua em 1
        cy.contains(/^Total:\s*1$/)
          .should('be.visible')

      })

    })

  })

})

// =====================================================
// CT-055
// Deve acessar a página do carrinho
//
// Prioridade: Média
// Massa de dados:
// - Usuário comum criado via API (beforeEach)
// - Administrador criado via API
// - Produto criado via API
// =====================================================

it('CT-055 - Deve acessar a página do carrinho', () => {

  cy.criarAdministradorAPI()

  cy.get('@admin').then((admin) => {

    cy.criarProdutoAPI(admin)

    cy.get('@produto').then((produto) => {

      cy.get('@usuario').then((usuario) => {

        // Login
        cy.login(
          usuario.email,
          usuario.senha
        )

        // Pesquisa o produto
        cy.get('[data-testid="pesquisar"]')
          .clear()
          .type(produto.nome)

        cy.contains('button', 'Pesquisar')
          .click()

        // Adiciona à lista
        cy.contains('Adicionar a lista')
          .click()

        // Acessa a página do carrinho
        cy.get('[data-testid="adicionar carrinho"]')
          .click()

        // Valida o redirecionamento
        cy.url()
          .should('include', '/carrinho')

        // Valida a mensagem atualmente exibida pela aplicação
        cy.contains('Em construção')
          .should('be.visible')

      })

    })

  })

})

// =====================================================
// CT-056
// Usuário comum não deve acessar a página
// "Listar Usuários"
//
// Prioridade: Crítica
//
// Resultado esperado:
// - O acesso deve ser bloqueado.
// - A página administrativa não deve ser exibida.
// =====================================================

it('CT-056 - Usuário comum não deve acessar a página Listar Usuários', () => {

  cy.get('@usuario').then((usuario) => {

    // Login
    cy.login(
      usuario.email,
      usuario.senha
    )

    cy.url()
      .should('include', '/home')

    // Tenta acessar diretamente a área administrativa
    cy.visit('https://front.serverest.dev/admin/listarusuarios')

    // O usuário comum NÃO deveria visualizar a listagem
    cy.contains('Lista dos usuários')
      .should('not.exist')

    // Também não deveria permanecer na rota administrativa
    cy.url()
      .should('not.include', '/admin/listarusuarios')

  })

})

// =====================================================
// CT-057
// Usuário comum não deve acessar a página
// "Cadastrar Usuários"
//
// Prioridade: Crítica
//
// Resultado esperado:
// - O acesso deve ser bloqueado.
// - A tela de cadastro de usuários não deve ser exibida.
// =====================================================

it('CT-057 - Usuário comum não deve acessar a página Cadastrar Usuários', () => {

  cy.get('@usuario').then((usuario) => {

    // Login
    cy.login(
      usuario.email,
      usuario.senha
    )

    cy.url()
      .should('include', '/home')

    // Tenta acessar diretamente a área administrativa
    cy.visit('https://front.serverest.dev/admin/cadastrarusuarios')

    // O usuário comum NÃO deveria visualizar a tela
    cy.contains('Cadastro de usuários')
      .should('not.exist')

    // Também não deveria permanecer na rota administrativa
    cy.url()
      .should('not.include', '/admin/cadastrarusuarios')

  })

})

// =====================================================
// CT-058
// Usuário comum não deve acessar a página
// "Listar Produtos"
//
// Prioridade: Crítica
//
// Resultado esperado:
// - O acesso deve ser bloqueado.
// - A listagem de produtos administrativos não deve ser exibida.
// =====================================================

it('CT-058 - Usuário comum não deve acessar a página Listar Produtos', () => {

  cy.get('@usuario').then((usuario) => {

    // Login
    cy.login(
      usuario.email,
      usuario.senha
    )

    cy.url()
      .should('include', '/home')

    // Tenta acessar diretamente a área administrativa
    cy.visit('https://front.serverest.dev/admin/listarprodutos')

    // O usuário comum NÃO deveria visualizar esta tela
    cy.contains('Lista dos Produtos')
      .should('not.exist')

    // Também não deveria permanecer na rota administrativa
    cy.url()
      .should('not.include', '/admin/listarprodutos')

  })

})

// =====================================================
// CT-059
// Usuário comum não deve acessar a página
// "Cadastrar Produtos"
//
// Prioridade: Crítica
//
// Resultado esperado:
// - O acesso deve ser bloqueado.
// - A tela de cadastro de produtos não deve ser exibida.
// =====================================================

it('CT-059 - Usuário comum não deve acessar a página Cadastrar Produtos', () => {

  cy.get('@usuario').then((usuario) => {

    // Login
    cy.login(
      usuario.email,
      usuario.senha
    )

    cy.url()
      .should('include', '/home')

    // Tenta acessar diretamente a área administrativa
    cy.visit('https://front.serverest.dev/admin/cadastrarprodutos')

    // O usuário comum NÃO deveria visualizar esta tela
    cy.contains('Cadastro de produtos')
      .should('not.exist')

    // Também não deveria permanecer na rota administrativa
    cy.url()
      .should('not.include', '/admin/cadastrarprodutos')

  })

})

// =====================================================
// CT-060
// Usuário comum não deve acessar a página Relatórios
//
// Prioridade: Crítica
//
// Resultado esperado:
// - O acesso deve ser bloqueado.
// - A página de relatórios não deve ser exibida.
// =====================================================

it('CT-060 - Usuário comum não deve acessar a página Relatórios', () => {

  cy.get('@usuario').then((usuario) => {

    // Login
    cy.login(
      usuario.email,
      usuario.senha
    )

    cy.url()
      .should('include', '/home')

    // Tenta acessar diretamente a área administrativa
    cy.visit('https://front.serverest.dev/admin/relatorios')

    // O usuário comum NÃO deveria visualizar esta tela
    cy.contains('Em construção')
      .should('not.exist')

    // Também não deveria permanecer na rota administrativa
    cy.url()
      .should('not.include', '/admin/relatorios')

  })

})

// =====================================================
// CT-061
// Usuário comum não deve excluir outro usuário
//
// Prioridade: Crítica
//
// Resultado esperado:
// - Usuário comum NÃO deve conseguir excluir
//   outro usuário.
// =====================================================

it('CT-061 - Usuário comum não deve excluir outro usuário', () => {

  // Usuário que fará login
  cy.criarUsuarioAPI('usuarioLogin')

  // Usuário que será alvo da exclusão
  cy.fixture('usuarios').then(({ usuarioComum }) => {

    cy.criarUsuarioCustomAPI({

      nome: 'Usuário Alvo',

      email: `usuario.alvo.${Date.now()}@gmail.com`,

      senha: usuarioComum.senha

    }, false, 'usuarioExcluir')

  })

  cy.get('@usuarioLogin').then((usuarioLogin) => {

    cy.get('@usuarioExcluir').then((usuarioExcluir) => {

      // Login
      cy.login(
        usuarioLogin.email,
        usuarioLogin.senha
      )

      // Acessa diretamente a listagem de usuários
      cy.visit('https://front.serverest.dev/admin/listarusuarios')

      // Localiza exatamente o usuário criado
      cy.contains('td', usuarioExcluir.email)
        .parents('tr')
        .within(() => {

          cy.contains('Excluir')
            .click()

        })

      cy.reload()

        cy.get('table')
        .should('contain', usuarioExcluir.email)

    })

  })

})

// =====================================================
// CT-062
// Usuário comum não deve cadastrar usuários
// pela área administrativa
//
// Prioridade: Crítica
//
// Resultado esperado:
// - Usuário comum NÃO deve conseguir cadastrar
//   usuários pela área administrativa.
// =====================================================

it('CT-062 - Usuário comum não deve cadastrar usuários pela área administrativa', () => {

  cy.cadastrarUsuarioComum()

  cy.get('@usuario').then((usuario) => {

    cy.login(
      usuario.email,
      usuario.senha
    )

    const nome = 'Usuário Criado Indevidamente'
    const email = `novo.usuario.${Date.now()}@gmail.com`
    const senha = 'senha123'

    // Acessa diretamente a rota administrativa
    cy.visit('https://front.serverest.dev/admin/cadastrarusuarios')

    cy.get('[data-testid="nome"]')
      .type(nome)

    cy.get('[data-testid="email"]')
      .type(email)

    cy.get('[data-testid="password"]')
      .type(senha)

    cy.get('[data-testid="checkbox"]')
      .click()

    cy.get('[data-testid="cadastrarUsuario"]')
      .click()

    // A aplicação redireciona para a listagem
    cy.url()
      .should('include', '/admin/listarusuarios')

    // Validação definitiva:
    // o usuário NÃO pode ter sido criado.
    cy.request('GET', 'https://serverest.dev/usuarios')
      .then((response) => {

        const usuarioCriado = response.body.usuarios.find(
          (u) => u.email === email
        )

        expect(
          usuarioCriado,
          [
            'BUG CRÍTICO - Broken Access Control',
            'Usuário comum conseguiu cadastrar um usuário pela área administrativa.',
            `Nome criado: ${nome}`,
            `Email criado: ${email}`
          ].join('\n')
        ).to.be.undefined

    })

  })
  
})

// =====================================================
// CT-063
// Usuário comum não deve excluir produtos
// pela área administrativa
//
// Prioridade: Crítica
//
// Resultado esperado:
// - Usuário comum NÃO deve conseguir excluir
//   produtos pela área administrativa.
// =====================================================

it('CT-063 - Usuário comum não deve excluir produtos pela área administrativa', () => {

  // Cria um administrador
  cy.criarAdministradorAPI()

  cy.get('@admin').then((admin) => {

    // Cria um produto
    cy.criarProdutoAPI(admin)

    cy.get('@produto').then((produto) => {

      // Cria um usuário comum
      cy.criarUsuarioAPI('usuarioLogin')

      cy.get('@usuarioLogin').then((usuarioLogin) => {

        // Login como usuário comum
        cy.login(
          usuarioLogin.email,
          usuarioLogin.senha
        )

        // Acessa diretamente a listagem administrativa
        cy.visit('https://front.serverest.dev/admin/listarprodutos')

        // Localiza exatamente o produto criado
        cy.contains('td', produto.nome)
          .parents('tr')
          .within(() => {

            cy.contains('Excluir')
              .click()

          })

        // Atualiza a página
        cy.reload()

        // Validação definitiva:
        // O produto NÃO pode ter sido excluído.
        cy.request('GET', 'https://serverest.dev/produtos')
          .then((response) => {

            const produtoEncontrado = response.body.produtos.find(
              (p) => p.nome === produto.nome
            )

            expect(
              produtoEncontrado,
              [
                'BUG CRÍTICO - Broken Access Control',
                'Usuário comum conseguiu excluir um produto pela área administrativa.',
                `Produto: ${produto.nome}`
              ].join('\n')
            ).to.not.be.undefined

          })

      })

    })

  })

})

  })
