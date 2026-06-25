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

it('CT-032 - Deve cadastrar usuário administrador com sucesso', () => {

  cy.fixture('usuarios').then(({ usuarioAdmin }) => {

    const emailUnico =
      usuarioAdmin.email.replace(
        '@gmail.com',
        `${Date.now()}@gmail.com`
      )

    cy.acessarCadastroUsuarios()

    cy.cadastrarUsuario({
      nome: usuarioAdmin.nome,
      email: emailUnico,
      senha: usuarioAdmin.senha,
      admin: true
    })

    cy.contains('Cadastro realizado com sucesso')
      .should('be.visible')

    cy.url()
      .should('include', '/admin/home')

    cy.get('[data-testid="listarUsuarios"]')
      .click()

    cy.contains(usuarioAdmin.nome)
      .should('be.visible')

    cy.contains(emailUnico)
      .should('be.visible')

  })

})

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
      .should('contain.text', 'Email deve ser um email válido')

    cy.url()
      .should('include', '/cadastrarusuarios')

  })

})

it('CT-038 - Não deve permitir cadastro com email já existente', () => {

  cy.fixture('usuarios').then(({ usuarioComum }) => {

    const emailDuplicado =
      usuarioComum.email.replace(
        '@gmail.com',
        `${Date.now()}@gmail.com`
      )

    cy.acessarCadastroUsuarios()

    cy.cadastrarUsuario({
      nome: usuarioComum.nome,
      email: emailDuplicado,
      senha: usuarioComum.senha
    })

    cy.contains('Cadastro realizado com sucesso')
      .should('be.visible')

    cy.visit('https://front.serverest.dev/cadastrarusuarios')

    cy.cadastrarUsuario({
      nome: usuarioComum.nome,
      email: emailDuplicado,
      senha: usuarioComum.senha
    })

    cy.get('.alert')
      .should('contain.text', 'Este email já está sendo usado')

  })

})

it('CT-039 - Não deve permitir exclusão do próprio usuário', () => {

  cy.fixture('usuarios').then(({ usuarioAdmin }) => {

    const emailUnico =
      usuarioAdmin.email.replace(
        '@gmail.com',
        `${Date.now()}@gmail.com`
      )

    cy.acessarCadastroUsuarios()

    cy.cadastrarUsuario({
      nome: usuarioAdmin.nome,
      email: emailUnico,
      senha: usuarioAdmin.senha,
      admin: true
    })

    cy.contains('Cadastro realizado com sucesso')
      .should('be.visible')

    cy.logout()

    cy.login(
      emailUnico,
      usuarioAdmin.senha
    )

    cy.get('[data-testid="listarUsuarios"]')
      .click()

    // BUG-005
    // O primeiro clique no botão Excluir não executa nenhuma ação.
    // É necessário um segundo clique para que a aplicação processe a solicitação.

    cy.contains('tr', emailUnico)
    .within(() => {

    cy.contains('Excluir')
      .click()
      .click()

  })

    cy.get('.alert')
      .should('be.visible')
      .and('contain.text', 'Não é possível excluir o próprio usuário!')

    cy.contains(emailUnico)
      .should('be.visible')

  })

})
