describe('Login', () => {

  beforeEach(() => {

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
      .should('be.visible')

    cy.get('[data-testid="senha"]')
      .should('be.visible')

  })

  // =====================================================
  // CT-001
  // Deve realizar login com sucesso
  // =====================================================

  it('CT-001 - Deve realizar login com sucesso', () => {

    cy.criarUsuarioAPI('usuarioLogin')

cy.get('@usuarioLogin').then((usuario) => {

  cy.login(
    usuario.email,
    usuario.senha
  )

  cy.url()
    .should('include', '/home')

  cy.contains('Serverest Store')
    .should('be.visible')
    })

  })

  // =====================================================
  // CT-002
  // Deve exibir mensagem de erro ao informar senha inválida
  // =====================================================

  it('CT-002 - Deve exibir mensagem de erro ao informar senha inválida', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioSenhaInvalida

      cy.get('[data-testid="email"]')
        .type(usuario.email)

      cy.get('[data-testid="senha"]')
        .type(usuario.senha)

      cy.get('[data-testid="entrar"]')
        .click()

      cy.url()
        .should('include', '/login')

      cy.get('.alert')
        .should('be.visible')
        .and('contain.text', 'Email e/ou senha inválidos')

    })

  })

  // =====================================================
  // CT-003
  // Deve exibir mensagem de erro ao informar email inválido
  // =====================================================

  it('CT-003 - Deve exibir mensagem de erro ao informar email inválido', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioEmailInvalido

      cy.get('[data-testid="email"]')
        .type(usuario.email)

      cy.get('[data-testid="senha"]')
        .type(usuario.senha)

      cy.get('[data-testid="entrar"]')
        .click()

      cy.url()
        .should('include', '/login')

      cy.get('.alert')
        .should('be.visible')
        .and('contain.text', 'Email e/ou senha inválidos')

    })

  })

  // =====================================================
  // CT-004
  // Deve exibir mensagem de erro ao informar email e senha
  // inválidos
  // =====================================================

  it('CT-004 - Deve exibir mensagem de erro ao informar email e senha inválidos', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioInvalido

      cy.get('[data-testid="email"]')
        .type(usuario.email)

      cy.get('[data-testid="senha"]')
        .type(usuario.senha)

      cy.get('[data-testid="entrar"]')
        .click()

      cy.url()
        .should('include', '/login')

      cy.get('.alert')
        .should('be.visible')
        .and('contain.text', 'Email e/ou senha inválidos')

    })

  })

    // =====================================================
  // CT-005
  // Deve exibir mensagem ao tentar login sem preencher email
  // =====================================================

  it('CT-005 - Deve exibir mensagem ao tentar login sem preencher email', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioSemEmail

      cy.get('[data-testid="senha"]')
        .type(usuario.senha)

      cy.get('[data-testid="entrar"]')
        .click()

      cy.url()
        .should('include', '/login')

      cy.get('.alert')
        .should('be.visible')
        .and('contain.text', 'Email é obrigatório')

    })

  })

  // =====================================================
  // CT-006
  // Deve exibir mensagem ao tentar login sem preencher senha
  // =====================================================

  it('CT-006 - Deve exibir mensagem ao tentar login sem preencher senha', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioSemSenha

      cy.get('[data-testid="email"]')
        .type(usuario.email)

      cy.get('[data-testid="entrar"]')
        .click()

      cy.url()
        .should('include', '/login')

      cy.get('.alert')
        .should('be.visible')
        .and('contain.text', 'Password é obrigatório')

    })

  })

  // =====================================================
  // CT-007
  // Deve exibir mensagem ao tentar login sem preencher
  // email e senha
  // =====================================================

  it('CT-007 - Deve exibir mensagem ao tentar login sem preencher email e senha', () => {

    cy.get('[data-testid="entrar"]')
      .click()

    cy.url()
      .should('include', '/login')

    cy.get('.alert')
      .should('be.visible')
      .and('contain.text', 'Email é obrigatório')
      .and('contain.text', 'Password é obrigatório')

  })

  // =====================================================
  // CT-008
  // Deve impedir login com email em formato inválido
  // =====================================================

  it('CT-008 - Deve impedir login com email em formato inválido', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioEmailFormatoInvalido

      cy.get('[data-testid="email"]')
        .type(usuario.email)
        .invoke('prop', 'validationMessage')
        .should('contain', '@')

      cy.get('[data-testid="senha"]')
        .type(usuario.senha)

      cy.get('[data-testid="entrar"]')
        .click()

      cy.url()
        .should('include', '/login')

    })

  })

    // =====================================================
  // CT-009
  // Deve realizar logout com sucesso
  // =====================================================

  it('CT-009 - Deve realizar logout com sucesso', () => {

  cy.criarUsuarioAPI('usuarioLogin')

  cy.get('@usuarioLogin').then((usuario) => {

    cy.login(
      usuario.email,
      usuario.senha
    )

    cy.logout()

    cy.url()
      .should('include', '/login')

    cy.contains('Login')
      .should('be.visible')

    })

  })

  // =====================================================
  // CT-010
  // Deve impedir acesso à área autenticada sem login
  // =====================================================

  it('CT-010 - Deve impedir acesso à área autenticada sem login', () => {

    cy.visit('https://front.serverest.dev/home')

    cy.url()
      .should('include', '/login')

    cy.contains('Login')
      .should('be.visible')

  })

})