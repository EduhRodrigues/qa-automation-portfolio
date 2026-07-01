import { API } from './config'
import { apiRequest } from './client'

// ======================================================
// Realiza login via API e retorna o token JWT.
// ======================================================

export const obterTokenAPI = (usuario) => {

  return apiRequest(

    'POST',

    API.endpoints.login,

    {

      email: usuario.email,

      password: usuario.senha

    }

  ).then((response) => {

    expect(response.status).to.eq(200)

    return response.body.authorization

  })

}