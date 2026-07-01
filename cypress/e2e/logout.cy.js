describe('Logout', () => {

  // =====================================================
  // CT-035
  // Deve realizar logout com sucesso.
  //
  // O administrador é criado dinamicamente para garantir
  // independência da massa de dados e evitar dependência
  // de credenciais fixas.
  // =====================================================

  it('CT-035 - Deve realizar logout com sucesso', () => {

    cy.cadastrarAdministrador()

    cy.get('@admin').then((admin) => {

      // Realiza login com o administrador criado
      cy.login(
        admin.email,
        admin.senha
      )

      // Efetua logout
      cy.logout()

      // Deve retornar para a tela de login
      cy.url()
        .should('include', '/login')

      cy.contains('Login')
        .should('be.visible')

    })

  })

  // =====================================================
  // CT-036
  // Deve impedir acesso à área administrativa após logout.
  //
  // Após encerrar a sessão, qualquer tentativa de acessar
  // uma rota protegida deve redirecionar o usuário para
  // a tela de login.
  // =====================================================

  it('CT-036 - Deve impedir acesso à área administrativa após logout', () => {

    cy.cadastrarAdministrador()

    cy.get('@admin').then((admin) => {

      // Realiza login com o administrador criado
      cy.login(
        admin.email,
        admin.senha
      )

      // Encerra a sessão
      cy.logout()

      // Tenta acessar diretamente uma rota protegida
      cy.visit('https://front.serverest.dev/admin/home')

      // Deve ser redirecionado para o login
      cy.url()
        .should('include', '/login')

      cy.contains('Login')
        .should('be.visible')

    })

  })

})