# Matriz de Casos de Teste - Produtos

## Objetivo

Validar as funcionalidades do módulo Produtos da aplicação ServeRest.

---

## Casos Positivos

| ID     | Caso de Teste                                                 | Prioridade | Status       |
| ------ | ------------------------------------------------------------- | ---------- | ------------ |
| CT-011 | Deve cadastrar produto com sucesso                            | Alta       | Automatizado |
| CT-016 | Deve cadastrar produto com sucesso sem imagem                 | Média      | Automatizado |
| CT-018 | Deve permitir cadastro com quantidade igual a zero            | Média      | Automatizado |
| CT-021 | Deve cadastrar produto com nome contendo caracteres especiais | Baixa      | Automatizado |
| CT-022 | Deve cadastrar produto com descrição extensa                  | Baixa      | Automatizado |
| CT-023 | Deve exibir produto recém-cadastrado na listagem              | Alta       | Automatizado |
| CT-028 | Deve excluir produto com sucesso                              | Alta       | Automatizado |
| CT-029 | Deve remover produto da listagem após exclusão                | Alta       | Automatizado |

---

## Casos Negativos

| ID     | Caso de Teste                                                   | Prioridade | Status        |
| ------ | --------------------------------------------------------------- | ---------- | ------------- |
| CT-012 | Deve exibir mensagem ao tentar cadastrar produto sem nome       | Alta       | Automatizado  |
| CT-013 | Deve exibir mensagem ao tentar cadastrar produto sem preço      | Alta       | Automatizado  |
| CT-014 | Deve exibir mensagem ao tentar cadastrar produto sem descrição  | Média      | Automatizado  |
| CT-015 | Deve exibir mensagem ao tentar cadastrar produto sem quantidade | Média      | Automatizado  |
| CT-017 | Deve validar preço igual a zero                                 | Alta       | Automatizado  |
| CT-019 | Deve aceitar apenas números no campo preço                      | Média      | Automatizado  |
| CT-020 | Deve impedir cadastro com caractere não numérico na quantidade  | Média      | Automatizado  |
| CT-024 | Deve pesquisar produto existente                                | Média      | Não Executado |
| CT-025 | Deve exibir detalhes do produto                                 | Média      | Não Executado |
| CT-026 | Deve editar produto com sucesso                                 | Alta       | Bloqueado     |
| CT-027 | Deve validar alteração dos dados do produto                     | Alta       | Bloqueado     |
| CT-030 | Deve impedir acesso ao cadastro de produtos sem autenticação    | Alta       | Automatizado  |

---

## Casos Não Executados

| ID     | Caso de Teste                    | Motivo                                           |
| ------ | -------------------------------- | ------------------------------------------------ |
| CT-024 | Deve pesquisar produto existente | Funcionalidade de busca inexistente (BUG-002)    |
| CT-025 | Deve exibir detalhes do produto  | Não existe tela de detalhes do produto (BUG-003) |

---

## Casos Bloqueados

| ID     | Caso de Teste                               | Motivo                                               |
| ------ | ------------------------------------------- | ---------------------------------------------------- |
| CT-026 | Deve editar produto com sucesso             | Funcionalidade Editar Produto indisponível (BUG-001) |
| CT-027 | Deve validar alteração dos dados do produto | Dependente da implementação do CT-026                |

---

## Cobertura

Funcionalidades contempladas:

* Cadastro de produtos
* Validações obrigatórias
* Validações de campos numéricos
* Cadastro sem imagem
* Cadastro com caracteres especiais
* Cadastro com descrição extensa
* Listagem de produtos
* Exclusão de produtos
* Controle de acesso sem autenticação
* Tratamento de erros

---

## Bugs Relacionados

| Bug     | Descrição                                       |
| ------- | ----------------------------------------------- |
| BUG-001 | Funcionalidade Editar Produto não funciona      |
| BUG-002 | Funcionalidade de busca de produtos inexistente |
| BUG-003 | Não existe tela de detalhes do produto          |
