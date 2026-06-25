# Matriz de Casos de Teste - Login

## Objetivo

Validar as funcionalidades de autenticação e controle de acesso da aplicação ServeRest.

---

## Casos Positivos

| ID     | Caso de Teste                    | Prioridade | Status       |
| ------ | -------------------------------- | ---------- | ------------ |
| CT-001 | Deve realizar login com sucesso  | Alta       | Automatizado |
| CT-009 | Deve realizar logout com sucesso | Alta       | Automatizado |

---

## Casos Negativos

| ID     | Caso de Teste                                                    | Prioridade | Status       |
| ------ | ---------------------------------------------------------------- | ---------- | ------------ |
| CT-002 | Deve exibir mensagem de erro ao informar senha inválida          | Alta       | Automatizado |
| CT-003 | Deve exibir mensagem de erro ao informar email inválido          | Alta       | Automatizado |
| CT-004 | Deve exibir mensagem de erro ao informar email e senha inválidos | Alta       | Automatizado |
| CT-005 | Deve exibir mensagem ao tentar login sem preencher email         | Alta       | Automatizado |
| CT-006 | Deve exibir mensagem ao tentar login sem preencher senha         | Alta       | Automatizado |
| CT-007 | Deve exibir mensagem ao tentar login sem preencher email e senha | Alta       | Automatizado |
| CT-008 | Deve impedir login com email em formato inválido                 | Média      | Automatizado |
| CT-010 | Deve impedir acesso à área autenticada sem login                 | Alta       | Automatizado |

---

## Casos Não Executados

Nenhum.

---

## Casos Bloqueados

Nenhum.

---

## Cobertura

Funcionalidades contempladas:

* Login com credenciais válidas
* Logout
* Validação de email inválido
* Validação de senha inválida
* Validação de credenciais inválidas
* Validação de campos obrigatórios
* Validação de formato de email
* Controle de acesso sem autenticação
* Tratamento de mensagens de erro

---

## Bugs Relacionados

Nenhum bug identificado durante a execução dos testes de Login.
