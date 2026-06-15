# QA Automation Portfolio

![Cypress](https://img.shields.io/badge/Cypress-E2E-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)

Projeto de automação de testes End-to-End (E2E) desenvolvido com Cypress para demonstrar conhecimentos em Quality Assurance (QA), automação de testes, organização de código e boas práticas de desenvolvimento.

## Tecnologias

* Cypress
* JavaScript
* Node.js

## Sistema Testado

Aplicação utilizada para fins de estudo e automação:

https://front.serverest.dev/login

Módulo automatizado atualmente:
- Autenticação

## Casos de Teste

### Módulo de Autenticação

* [x] CT-001 - Deve realizar login com sucesso
* [x] CT-002 - Deve exibir mensagem de erro ao informar senha inválida
* [x] CT-003 - Deve exibir mensagem de erro ao informar email inválido
* [x] CT-004 - Deve exibir mensagem de erro ao informar email e senha inválidos
* [x] CT-005 - Deve exibir mensagem ao tentar login sem preencher email
* [x] CT-006 - Deve exibir mensagem ao tentar login sem preencher senha
* [x] CT-007 - Deve exibir mensagem ao tentar login sem preencher email e senha
* [x] CT-008 - Deve impedir login com email em formato inválido
* [x] CT-009 - Deve realizar logout com sucesso
* [x] CT-010 - Deve impedir acesso à área autenticada sem login

### Módulo de Produtos

* [ ] CT-011 - Deve cadastrar produto com sucesso
* [ ] CT-012 - Deve exibir mensagem ao tentar cadastrar produto sem nome
* [ ] CT-013 - Deve exibir mensagem ao tentar cadastrar produto sem preço
* [ ] CT-014 - Deve exibir mensagem ao tentar cadastrar produto sem descrição
* [ ] CT-015 - Deve exibir mensagem ao tentar cadastrar produto sem quantidade
* [ ] CT-016 - Deve impedir cadastro de produto com nome já existente
* [ ] CT-017 - Deve validar preço igual a zero
* [ ] CT-018 - Deve validar quantidade igual a zero
* [ ] CT-019 - Deve validar preço com caracteres não numéricos
* [ ] CT-020 - Deve validar quantidade com caracteres não numéricos
* [ ] CT-021 - Deve cadastrar produto com nome contendo caracteres especiais
* [ ] CT-022 - Deve cadastrar produto com descrição extensa
* [ ] CT-023 - Deve exibir produto recém-cadastrado na listagem
* [ ] CT-024 - Deve localizar produto através da busca
* [ ] CT-025 - Deve exibir detalhes do produto cadastrado
* [ ] CT-026 - Deve editar produto com sucesso
* [ ] CT-027 - Deve refletir alterações após edição do produto
* [ ] CT-028 - Deve excluir produto com sucesso
* [ ] CT-029 - Deve remover produto da listagem após exclusão
* [ ] CT-030 - Deve impedir acesso ao cadastro de produtos sem autenticação

### Próximos Módulos

* [ ] Carrinho
* [ ] Checkout
* [ ] API Testing

## Boas Práticas Aplicadas

* Uso de massa de dados centralizada com Fixtures
* Reutilização de código através de Custom Commands
* Separação entre dados e lógica de teste
* Nomenclatura padronizada para casos de teste
* Estrutura preparada para expansão por módulos

## Estrutura do Projeto

```text
qa-automation-portfolio/
│
├── cypress/
│   │
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── produtos.cy.js
│   │
│   ├── fixtures/
│   │   ├── usuarios.json
│   │   └── produtos.json
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── docs/
│   └── matriz-testes-produtos.md
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

### Próxima evolução

```text
e2e/
├── login.cy.js
├── produtos.cy.js
├── carrinho.cy.js
├── checkout.cy.js
└── api-produtos.cy.js

fixtures/
├── usuarios.json
├── produtos.json
└── carrinho.json

docs/
├── matriz-testes-produtos.md
├── matriz-testes-carrinho.md
└── matriz-testes-checkout.md
```

## Status Atual

### Concluído
- ✅ Módulo de Autenticação
- ✅ 10 Casos de Teste Automatizados
- ✅ Custom Commands
- ✅ Massa de Dados (Fixtures)
- ✅ Matriz de Casos de Teste - Produtos

### Em Desenvolvimento
- 🔄 Automação E2E - Produtos

### Próximos Módulos
- 📦 Produtos
- 🛒 Carrinho
- 💳 Checkout
- 🔌 API Testing

## Custom Commands

| Comando                  | Descrição                   |
| ------------------------ | --------------------------- |
| `cy.login(email, senha)` | Realiza login na aplicação  |
| `cy.logout()`            | Realiza logout da aplicação |

## Estrutura dos Arquivos

| Arquivo             | Descrição                                        |
| ------------------- | ------------------------------------------------ |
| `login.cy.js`       | Cenários automatizados do módulo de autenticação |
| `usuarios.json`     | Massa de dados utilizada nos testes              |
| `commands.js`       | Comandos reutilizáveis de login e logout         |
| `cypress.config.js` | Configuração principal do Cypress                |

## Como Executar

```bash
npm install
npx cypress open
```

## Autor

Jorge Eduardo Rodrigues
