describe('Login', () => {

  it('CT-001 - Deve realizar login com sucesso', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioValido

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
    .should('be.visible')
    .type(usuario.email)

    cy.get('[data-testid="senha"]')
    .should('be.visible')
    .type(usuario.senha)

    cy.get('[data-testid="entrar"]')
    .should('be.visible')
    .click()
    
    cy.url()
    .should('include', '/home')

    cy.contains('Serverest Store')
    .should('be.visible')
   })
  })

  it('CT-002 - Deve exibir mensagem de erro ao informar senha inválida', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioSenhaInvalida

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
    .should('be.visible')
    .type(usuario.email)

    cy.get('[data-testid="senha"]')
    .should('be.visible')
    .type(usuario.senha)

    cy.get('[data-testid="entrar"]')
    .should('be.visible')
    .click()

    cy.url()
    .should('include', '/login')

    cy.get('.alert')
    .should('be.visible')
    .should('contain.text', 'Email e/ou senha inválidos')
   })
  })
   
   it('CT-003 - Deve exibir mensagem de erro ao informar email inválido', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioEmailInvalido

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
    .should('be.visible')
    .type(usuario.email)

    cy.get('[data-testid="senha"]')
    .should('be.visible')
    .type(usuario.senha)

    cy.get('[data-testid="entrar"]')
    .should('be.visible')
    .click()

    cy.url()
    .should('include', '/login')

    cy.get('.alert')
    .should('be.visible')
    .should('contain.text', 'Email e/ou senha inválidos')
   })
  })
  it('CT-004 - Deve exibir mensagem de erro ao informar email e senha inválidos', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioInvalido

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
    .should('be.visible')
    .type(usuario.email)

    cy.get('[data-testid="senha"]')
    .should('be.visible')
    .type(usuario.senha)

    cy.get('[data-testid="entrar"]')
    .should('be.visible')
    .click()

    cy.url()
    .should('include', '/login')

    cy.get('.alert')
    .should('be.visible')
    .should('contain.text', 'Email e/ou senha inválidos')
   })
  })

   it('CT-005 - Deve exibir mensagem ao tentar login sem preencher email', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioSemEmail

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
    .should('be.visible')

    cy.get('[data-testid="senha"]')
    .should('be.visible')
    .type(usuario.senha)

    cy.get('[data-testid="entrar"]')
    .should('be.visible')
    .click()

    cy.url()
    .should('include', '/login')

    cy.get('.alert')
    .should('be.visible')
    .should('contain.text', 'Email é obrigatório')
   })
  })

  it('CT-006 - Deve exibir mensagem ao tentar login sem preencher senha', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioSemSenha

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
    .should('be.visible')
    .type(usuario.email)

    cy.get('[data-testid="senha"]')
    .should('be.visible')
    // .type(usuario.senha)

    cy.get('[data-testid="entrar"]')
    .should('be.visible')
    .click()

    cy.url()
    .should('include', '/login')

    cy.get('.alert')
    .should('be.visible')
    .should('contain.text', 'Password é obrigatório')
   })
  })

  it('CT-007 - Deve exibir mensagem ao tentar login sem preencher email e senha', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioSemSenha

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
    .should('be.visible')
    // .type(usuario.email)

    cy.get('[data-testid="senha"]')
    .should('be.visible')
    // .type(usuario.senha)

    cy.get('[data-testid="entrar"]')
    .should('be.visible')
    .click()

    cy.url()
    .should('include', '/login')

    cy.get('.alert')
    .should('be.visible')
    .should('contain.text', 'Email é obrigatório')
    .should('contain.text', 'Password é obrigatório')
   })
  })

 it('CT-008 - Deve impedir login com email em formato inválido', () => {

    cy.fixture('usuarios').then((usuarios) => {

      const usuario = usuarios.usuarioEmailFormatoInvalido

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]')
   .type(usuario.email)
   .invoke('prop', 'validationMessage')
   .should('contain', '@')

    cy.get('[data-testid="senha"]')
    .should('be.visible')
    .type(usuario.senha)

    cy.get('[data-testid="entrar"]')
    .should('be.visible')
    .click()

    cy.url()
    .should('include', '/login')

   })
  })
})