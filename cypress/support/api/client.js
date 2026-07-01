import { API } from './config'

// ======================================================
// API Client
//
// Centraliza todas as requisições HTTP utilizadas pelos
// helpers de preparação de massa de dados.
//
// Objetivo:
// - Evitar repetição de cy.request()
// - Centralizar a montagem da URL
// - Facilitar futuras alterações (headers, timeout,
//   autenticação, interceptação etc.)
// ======================================================

export const apiRequest = (
  method,
  endpoint,
  body = null,
  headers = {}
) => {

  const request = {

    method,

    url: `${API.baseUrl}${endpoint}`,

    failOnStatusCode: false

  }

  // Adiciona body apenas quando existir
  if (body) {

    request.body = body

  }

  // Adiciona headers apenas quando existirem
  if (Object.keys(headers).length > 0) {

    request.headers = headers

  }

  return cy.request(request)

}