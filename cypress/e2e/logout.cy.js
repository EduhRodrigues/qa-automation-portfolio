describe('Logout', () => {

  it('CT-035 - Deve realizar logout com sucesso', () => {

    cy.fixture('usuarios').then(({ usuarioAdmin }) => {

      cy.login(
        usuarioAdmin.email,
        usuarioAdmin.senha
      )

      cy.logout()

      cy.url()
        .should('include', '/login')

      cy.contains('Login')
        .should('be.visible')

    })
  })

  it('CT-036 - Deve impedir acesso à área administrativa após logout', () => {

    cy.fixture('usuarios').then(({ usuarioAdmin }) => {

      cy.login(
        usuarioAdmin.email,
        usuarioAdmin.senha
      )

      cy.logout()

      cy.visit('https://front.serverest.dev/admin/home')

      cy.url()
        .should('include', '/login')

    })
  })

})