# Matriz de Casos de Teste - Usuários

## Objetivo

Validar as funcionalidades de cadastro, listagem e exclusão de usuários no ServeRest.

---

## Casos Positivos

| ID     | Caso de Teste                                                           | Prioridade |
| ------ | ----------------------------------------------------------------------- | ---------- |
| CT-031 | Deve cadastrar usuário comum com sucesso                                | Alta       |
| CT-032 | Deve cadastrar usuário administrador com sucesso e exibi-lo na listagem | Alta       |

---

## Casos Negativos

| ID     | Caso de Teste                                                | Prioridade |
| ------ | ------------------------------------------------------------ | ---------- |
| CT-033 | Não deve permitir cadastro sem nome                          | Alta       |
| CT-034 | Não deve permitir cadastro sem email                         | Alta       |
| CT-035 | Não deve permitir cadastro sem senha                         | Alta       |
| CT-036 | Não deve permitir cadastro sem preencher campos obrigatórios | Alta       |
| CT-037 | Não deve permitir cadastro com email inválido                | Média      |
| CT-038 | Não deve permitir cadastro com email já existente            | Alta       |

---

## Regras de Negócio

| ID     | Caso de Teste                                 | Prioridade |
| ------ | --------------------------------------------- | ---------- |
| CT-039 | Não deve permitir exclusão do próprio usuário | Média      |

---

## Casos Bloqueados por Bug

| ID     | Caso de Teste                                   | Status              |
| ------ | ----------------------------------------------- | ------------------- |
| CT-040 | Deve editar usuário com sucesso                 | Bloqueado (BUG-004) |
| CT-041 | Não deve permitir edição com email já existente | Bloqueado (BUG-004) |
| CT-042 | Deve cancelar edição de usuário                 | Bloqueado (BUG-004) |

---

## Cobertura

Funcionalidades contempladas:

* Cadastro de usuários comuns
* Cadastro de usuários administradores
* Validação de campos obrigatórios
* Validação de email inválido
* Validação de email duplicado
* Listagem de usuários
* Exclusão de usuários
* Regras de negócio de exclusão
* Edição de usuários (bloqueada por bug)
