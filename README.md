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

### Próximos Módulos

* [ ] Produtos
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
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js
│   ├── fixtures/
│   │   └── usuarios.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md

Próxima evolução:

e2e/
├── login.cy.js
├── produtos.cy.js
├── carrinho.cy.js
└── checkout.cy.js
```

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

## Roadmap

Próximas implementações:

- [ ] Módulo de Produtos
- [ ] Módulo de Carrinho
- [ ] Módulo de Checkout
- [ ] Testes de API
- [ ] Integração com GitHub Actions
- [ ] Relatórios automatizados

## Como Executar

```bash
npm install
npx cypress open
```

## Autor

Jorge Eduardo Rodrigues
