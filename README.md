# QA Automation Portfolio

Projeto de automação de testes End-to-End (E2E) desenvolvido com Cypress para demonstrar conhecimentos em Quality Assurance (QA), automação de testes e boas práticas de desenvolvimento.

## Tecnologias

* Cypress
* JavaScript
* Node.js

## Sistema Testado

ServeRest

https://front.serverest.dev/login

## Casos de Teste

### Módulo de Autenticação

* [x] CT-001 - Deve realizar login com sucesso
* [x] CT-002 - Não deve realizar login com senha inválida
* [ ] CT-003 - Não deve realizar login com email inexistente
* [ ] CT-004 - Deve validar campo de email obrigatório
* [ ] CT-005 - Deve validar campo de senha obrigatório
* [ ] CT-006 - Deve validar campos vazios
* [ ] CT-007 - Deve validar formato de email inválido
* [ ] CT-008 - Deve realizar login utilizando a tecla Enter
* [ ] CT-009 - Deve realizar logout com sucesso
* [ ] CT-010 - Deve impedir acesso à área autenticada sem login

### Módulo de Produtos

* [ ] Em desenvolvimento

### Módulo de Carrinho

* [ ] Em desenvolvimento

### Módulo de Checkout

* [ ] Em desenvolvimento

### Testes de API

* [ ] Em desenvolvimento

## Detalhes do Caso Implementado

### CT-001 - Deve realizar login com sucesso

**Objetivo**

Validar que um usuário com credenciais válidas consegue acessar a área autenticada do sistema.

**Passos**

1. Acessar a página de login.
2. Informar email válido.
3. Informar senha válida.
4. Clicar no botão Entrar.

**Validações**

* Redirecionamento para `/home`
* Exibição do texto `Serverest Store`
* Login realizado com sucesso

CT-002 - Deve exibir mensagem de erro ao informar senha inválida

**Objetivo**

Validar que o sistema impede o acesso quando um usuário informa uma senha incorreta.

**Passos**

1. Acessar a página de login.
2. Informar email válido.
3. Informar senha inválida.
4. Clicar no botão Entrar.

**Validações**

* Permanência na página de login (/login)
* Exibição da mensagem "Email e/ou senha inválidos"
* Login não realizado


## Estrutura do Projeto

```text
cypress/
├── e2e/
├── fixtures/
└── support/
```

## Como Executar

```bash
npm install
npx cypress open
```

## Autor

Eduardo Rodrigues

Em transição para a área de Quality Assurance (QA), desenvolvendo projetos práticos de automação de testes utilizando Cypress e JavaScript.
