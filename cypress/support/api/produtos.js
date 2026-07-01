import { API } from './config'
import { apiRequest } from './client'
import { obterTokenAPI } from './auth'

// ======================================================
// Cria um produto via API.
//
// Pré-requisito:
// O administrador já deve existir.
//
// Parâmetro:
// admin -> objeto retornado por criarAdministradorAPI()
//
// Retorna:
// @produto
// ======================================================

Cypress.Commands.add('criarProdutoAPI', (admin) => {

  cy.fixture('produtos').then(({ produtoValido }) => {

     const nomeProduto =
          `${produtoValido.nome} ${Date.now()}`

    obterTokenAPI(admin)

      .then((token) => {

        return apiRequest(

          'POST',

          API.endpoints.produtos,

          {

            nome: nomeProduto,

            preco: Number(produtoValido.preco),

            descricao: produtoValido.descricao,

            quantidade: Number(produtoValido.quantidade)

          },

          {

            Authorization: token

          }

        )

      })

      .then((response) => {

        expect(response.status).to.eq(201)

        cy.wrap({

        id: response.body._id,

        nome: nomeProduto,

        administrador: admin

        }).as('produto')

      })

  })

})