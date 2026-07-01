describe('Cadastro de Usuários', () => {

  // =====================================================
  // CT-031
  // Valida o cadastro de um usuário comum e o acesso à
  // Home da aplicação após o cadastro.
  // =====================================================

  it('CT-031 - Deve cadastrar usuário comum com sucesso', () => {

    cy.fixture('usuarios').then(({ usuarioComum }) => {

      const emailUnico =
        usuarioComum.email.replace(
          '@gmail.com',
          `${Date.now()}@gmail.com`
        )

      cy.acessarCadastroUsuarios()

      cy.cadastrarUsuario({

        nome: usuarioComum.nome,
        email: emailUnico,
        senha: usuarioComum.senha

      })

      cy.contains('Cadastro realizado com sucesso')
        .should('be.visible')

      cy.url()
        .should('include', '/home')

      cy.contains('Produtos')
        .should('be.visible')

    })

  })

  // =====================================================
  // CT-032
  // Valida o cadastro de um administrador e verifica
  // sua exibição na listagem de usuários.
  // =====================================================

  it('CT-032 - Deve cadastrar usuário administrador com sucesso', () => {

  cy.fixture('usuarios').then(({ usuarioAdmin }) => {

    const emailUnico = usuarioAdmin.email.replace(
      '@gmail.com',
      `${Date.now()}@gmail.com`
    )

    // =====================================================
    // Objetivo:
    // Validar o cadastro de um usuário administrador,
    // garantindo que o registro seja persistido e
    // exibido na listagem de usuários.
    // =====================================================

    // Acessa a tela pública de cadastro
    cy.acessarCadastroUsuarios()

    // Realiza o cadastro
    cy.cadastrarUsuario({

      nome: usuarioAdmin.nome,
      email: emailUnico,
      senha: usuarioAdmin.senha,
      administrador: true

    })

    // Aguarda a Home administrativa carregar
    cy.get('[data-testid="listarUsuarios"]', { timeout: 10000 })
      .should('be.visible')
      .click()

    // Confirma que a listagem foi aberta
    cy.url()
      .should('include', '/admin/listarusuarios')

    // Aguarda a requisição da listagem terminar
    cy.get('table', { timeout: 10000 })
      .should('be.visible')

    // Valida que o administrador recém-cadastrado
    // foi persistido na aplicação
    cy.contains('tr', emailUnico, { timeout: 10000 })
      .should('be.visible')
      .within(() => {

        cy.contains(usuarioAdmin.nome)
          .should('be.visible')

        cy.contains('true')
          .should('be.visible')

      })

  })

})

  // =====================================================
  // CT-033
  // Valida mensagem ao tentar cadastrar usuário
  // sem informar o nome.
  // =====================================================

  it('CT-033 - Não deve permitir cadastro sem nome', () => {

    cy.fixture('usuarios').then(({ usuarioComum }) => {

      const emailUnico =
        usuarioComum.email.replace(
          '@gmail.com',
          `${Date.now()}@gmail.com`
        )

      cy.acessarCadastroUsuarios()

      cy.cadastrarUsuario({

        email: emailUnico,
        senha: usuarioComum.senha

      })

      cy.contains('Nome é obrigatório')
        .should('be.visible')

    })

  })

  // =====================================================
  // CT-034
  // Valida mensagem ao tentar cadastrar usuário
  // sem informar o e-mail.
  // =====================================================

  it('CT-034 - Não deve permitir cadastro sem email', () => {

    cy.fixture('usuarios').then(({ usuarioComum }) => {

      cy.acessarCadastroUsuarios()

      cy.cadastrarUsuario({

        nome: usuarioComum.nome,
        senha: usuarioComum.senha

      })

      cy.contains('Email é obrigatório')
        .should('be.visible')

    })

  })

  // =====================================================
  // CT-035
  // Valida mensagem ao tentar cadastrar usuário
  // sem informar a senha.
  // =====================================================

  it('CT-035 - Não deve permitir cadastro sem senha', () => {

    cy.fixture('usuarios').then(({ usuarioComum }) => {

      const emailUnico =
        usuarioComum.email.replace(
          '@gmail.com',
          `${Date.now()}@gmail.com`
        )

      cy.acessarCadastroUsuarios()

      cy.cadastrarUsuario({

        nome: usuarioComum.nome,
        email: emailUnico

      })

      cy.contains('Password é obrigatório')
        .should('be.visible')

    })

  })

  // =====================================================
  // CT-036
  // Valida mensagens ao tentar cadastrar usuário
  // sem preencher nenhum campo obrigatório.
  // =====================================================

  it('CT-036 - Não deve permitir cadastro sem preencher campos obrigatórios', () => {

    cy.acessarCadastroUsuarios()

    cy.get('[data-testid="cadastrar"]')
      .click()

    cy.contains('Nome é obrigatório')
      .should('be.visible')

    cy.contains('Email é obrigatório')
      .should('be.visible')

    cy.contains('Password é obrigatório')
      .should('be.visible')

  })

  // =====================================================
  // CT-037
  // Valida que o sistema não permite cadastro com
  // e-mail em formato inválido.
  // =====================================================

  it('CT-037 - Não deve permitir cadastro com email inválido', () => {

    cy.fixture('usuarios').then(({ usuarioComum }) => {

      const emailInvalido =
        usuarioComum.email.replace(
          '@gmail.com',
          '@gmail'
        )

      cy.acessarCadastroUsuarios()

      cy.cadastrarUsuario({

        nome: usuarioComum.nome,
        email: emailInvalido,
        senha: usuarioComum.senha

      })

      cy.get('.alert')
        .should('be.visible')
        .and('contain.text', 'Email deve ser um email válido')

      cy.url()
        .should('include', '/cadastrarusuarios')

    })

  })

  // =====================================================
  // CT-038
  // Valida que o sistema não permite cadastrar dois
  // usuários utilizando o mesmo endereço de e-mail.
  // =====================================================

  it('CT-038 - Não deve permitir cadastro com email já existente', () => {

    cy.fixture('usuarios').then(({ usuarioComum }) => {

      const emailUnico =
        usuarioComum.email.replace(
          '@gmail.com',
          `${Date.now()}@gmail.com`
        )

      // Primeiro cadastro
      cy.acessarCadastroUsuarios()

      cy.cadastrarUsuario({

        nome: usuarioComum.nome,
        email: emailUnico,
        senha: usuarioComum.senha

      })

      cy.contains('Cadastro realizado com sucesso')
        .should('be.visible')

      // Efetua logout para voltar à tela pública
      cy.logout()

      // Segundo cadastro utilizando o mesmo e-mail
      cy.acessarCadastroUsuarios()

      cy.cadastrarUsuario({

        nome: usuarioComum.nome,
        email: emailUnico,
        senha: usuarioComum.senha

      })

      cy.get('.alert')
        .should('be.visible')
        .and('contain.text', 'Este email já está sendo usado')

    })

  })

// =====================================================
// CT-039
// Regra de negócio:
// O sistema não deve permitir que um administrador
// exclua o próprio usuário.
//
// Observação:
// Atualmente este cenário depende do BUG-005,
// onde o botão Excluir exige dois cliques.
// =====================================================

it('CT-039 - Não deve permitir exclusão do próprio usuário', () => {

  cy.cadastrarAdministrador()

  cy.get('@admin').then((admin) => {

    cy.get('[data-testid="listarUsuarios"]')
      .click()

    // Localiza o administrador criado no próprio teste
    cy.contains('tr', admin.email)
      .within(() => {

        // BUG-005
        // O primeiro clique no botão Excluir não executa
        // nenhuma ação. É necessário clicar duas vezes.
        cy.contains('Excluir')
          .click()
          .click()

      })

    cy.get('.alert')
      .should('be.visible')
      .and('contain.text', 'Não é possível excluir o próprio usuário!')

    // Garante que o usuário continua na listagem
    cy.contains(admin.email)
      .should('be.visible')

  })
})
})