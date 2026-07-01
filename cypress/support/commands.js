// ======================================================
// Login
// ======================================================
//
// Realiza autenticação utilizando as credenciais
// informadas.
//
// O ServeRest redireciona:
// - Usuário comum      -> /home
// - Administrador      -> /admin/home
// ======================================================

Cypress.Commands.add('login', (email, senha) => {

  cy.visit('https://front.serverest.dev/login')

  cy.get('[data-testid="email"]')
    .should('be.visible')
    .clear()
    .type(email)

  cy.get('[data-testid="senha"]')
    .should('be.visible')
    .clear()
    .type(senha)

  cy.get('[data-testid="entrar"]')
    .should('be.visible')
    .click()

  // Valida que o login foi realizado com sucesso
  // para qualquer perfil de usuário.
  cy.location('pathname')
    .should((pathname) => {

      expect([
        '/home',
        '/admin/home'
      ]).to.include(pathname)

    })

})


// ======================================================
// Logout
// ======================================================
//
// Encerra a sessão do usuário autenticado e valida
// o retorno para a tela de login.
// ======================================================

Cypress.Commands.add('logout', () => {

  cy.get('[data-testid="logout"]')
    .should('be.visible')
    .click()

  cy.location('pathname')
    .should('eq', '/login')

})


// ======================================================
// Navegação
// ======================================================
//
// Centraliza acessos às principais telas da aplicação.
// ======================================================

Cypress.Commands.add('acessarCadastroProdutos', () => {

  cy.get('[data-testid="cadastrarProdutos"]')
    .should('be.visible')
    .click()

})

Cypress.Commands.add('acessarCadastroUsuarios', () => {

  cy.visit('https://front.serverest.dev/login')

  cy.get('[data-testid="cadastrar"]')
    .should('be.visible')
    .click()

})


// ======================================================
// Cadastro de Produto
// ======================================================
//
// Preenche apenas os campos informados no objeto.
// Campos nulos ou indefinidos são ignorados para
// permitir a reutilização do comando em cenários
// positivos e negativos.
// ======================================================

Cypress.Commands.add('cadastrarProduto', (produto) => {

  if (produto.nome != null) {

    cy.get('[data-testid="nome"]')
      .clear()
      .type(String(produto.nome))

  }

  if (produto.preco != null) {

    cy.get('[data-testid="preco"]')
      .clear()
      .type(String(produto.preco))

  }

  if (produto.descricao != null) {

    cy.get('[data-testid="descricao"]')
      .clear()
      .type(String(produto.descricao))

  }

  if (produto.quantidade != null) {

    cy.get('[data-testid="quantity"]')
      .clear()
      .type(String(produto.quantidade))

  }

  if (produto.imagem != null) {

    cy.get('[data-testid="imagem"]')
      .selectFile(produto.imagem)

  }

  cy.get('[data-testid="cadastarProdutos"]')
    .click()

})

// ======================================================
// Cadastro Genérico de Usuário
// ======================================================
//
// Utilizado pelos cenários de cadastro de usuários
// comuns e administradores.
//
// Campos não informados são ignorados para permitir
// reutilização em testes de validação.
// ======================================================

Cypress.Commands.add('cadastrarUsuario', (usuario) => {

  if (usuario.nome != null) {

    cy.get('[data-testid="nome"]')
      .clear()
      .type(String(usuario.nome))

  }

  if (usuario.email != null) {

    cy.get('[data-testid="email"]')
      .clear()
      .type(String(usuario.email))

  }

  if (usuario.senha != null) {

    cy.get('[data-testid="password"]')
      .clear()
      .type(String(usuario.senha))

  }

  if (usuario.administrador === true) {

    cy.get('[data-testid="checkbox"]')
      .check()

  }

  cy.get('[data-testid="cadastrar"]')
    .click()

})

// ======================================================
// Cadastro de Administrador
// ======================================================
//
// Cria um administrador com e-mail único.
//
// Ao término do cadastro a aplicação permanece
// autenticada como administrador.
// ======================================================

Cypress.Commands.add('cadastrarAdministrador', () => {

  cy.fixture('usuarios').then(({ usuarioAdmin }) => {

    const emailAdmin = usuarioAdmin.email.replace(
      '@gmail.com',
      `${Date.now()}@gmail.com`
    )

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="cadastrar"]')
      .should('be.visible')
      .click()

    cy.cadastrarUsuario({

      nome: usuarioAdmin.nome,
      email: emailAdmin,
      senha: usuarioAdmin.senha,
      administrador: true

    })

    // Confirma que o cadastro foi realizado
    cy.contains('Cadastro realizado com sucesso')
      .should('be.visible')

    // O administrador deve permanecer autenticado
    cy.location('pathname')
      .should('eq', '/admin/home')

    cy.wrap({

      nome: usuarioAdmin.nome,
      email: emailAdmin,
      senha: usuarioAdmin.senha

    }).as('admin')

  })

})

// ======================================================
// Cadastro de Usuário Comum
// ======================================================
//
// Cria um usuário comum com e-mail único.
//
// Ao término do cadastro a aplicação permanece
// autenticada como usuário comum.
// ======================================================

Cypress.Commands.add('cadastrarUsuarioComum', () => {

  cy.fixture('usuarios').then(({ usuarioComum }) => {

    const emailUsuario = usuarioComum.email.replace(
      '@gmail.com',
      `${Date.now()}@gmail.com`
    )

    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="cadastrar"]')
      .should('be.visible')
      .click()

    cy.cadastrarUsuario({

      nome: usuarioComum.nome,
      email: emailUsuario,
      senha: usuarioComum.senha

    })

    // Confirma que o cadastro foi realizado
    cy.contains('Cadastro realizado com sucesso')
      .should('be.visible')

    // O usuário comum deve permanecer autenticado
    cy.location('pathname')
      .should('eq', '/home')

    cy.wrap({

      nome: usuarioComum.nome,
      email: emailUsuario,
      senha: usuarioComum.senha

    }).as('usuario')

  })

})