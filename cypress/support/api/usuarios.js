import { API } from './config'
import { apiRequest } from './client'

// ======================================================
// Função interna
// ======================================================

function criarUsuario(usuario, administrador = false, alias = 'usuario') {

  const email = usuario.email.replace(
    '@gmail.com',
    `${Date.now()}${Math.floor(Math.random() * 10000)}@gmail.com`
  )

  return apiRequest(

    'POST',

    API.endpoints.usuarios,

    {

      nome: usuario.nome,
      email,
      password: usuario.senha,
      administrador: administrador.toString()

    }

  ).then((response) => {

    expect(response.status).to.eq(201)

    cy.wrap({

      id: response.body._id,
      nome: usuario.nome,
      email,
      senha: usuario.senha

    }).as(alias)

  })

}

// ======================================================
// Usuário comum (mantém compatibilidade)
// ======================================================

Cypress.Commands.add('criarUsuarioAPI', (alias = 'usuario') => {

  cy.fixture('usuarios').then(({ usuarioComum }) => {

    criarUsuario(
      usuarioComum,
      false,
      alias
    )

  })

})

// ======================================================
// Administrador (mantém compatibilidade)
// ======================================================

Cypress.Commands.add('criarAdministradorAPI', (alias = 'admin') => {

  cy.fixture('usuarios').then(({ usuarioAdmin }) => {

    criarUsuario(
      usuarioAdmin,
      true,
      alias
    )

  })

})

// ======================================================
// NOVO
// Cria qualquer usuário informado
//
// Não afeta nenhum teste existente.
// ======================================================

Cypress.Commands.add(

  'criarUsuarioCustomAPI',

  (usuario, administrador = false, alias = 'usuarioCustom') => {

    criarUsuario(
      usuario,
      administrador,
      alias
    )

  }

)