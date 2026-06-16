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

* [x] CT-011 - Deve cadastrar produto com sucesso
* [x] CT-012 - Deve exibir mensagem ao tentar cadastrar produto sem nome
* [x] CT-013 - Deve exibir mensagem ao tentar cadastrar produto sem preço
* [x] CT-014 - Deve exibir mensagem ao tentar cadastrar produto sem descrição
* [x] CT-015 - Deve exibir mensagem ao tentar cadastrar produto sem quantidade
* [x] CT-016 - Deve cadastrar produto com sucesso sem imagem
* [x] CT-017 - Deve validar preço igual a zero
* [x] CT-018 - Deve permitir cadastro com quantidade igual a zero
* [x] CT-019 - Deve aceitar apenas números no campo preço
* [x] CT-020 - Deve impedir cadastro com caractere não numérico na quantidade
* [x] CT-021 - Deve cadastrar produto com nome contendo caracteres especiais
* [x] CT-022 - Deve cadastrar produto com descrição extensa
* [x] CT-023 - Deve exibir produto recém-cadastrado na listagem
* [NA] CT-024 - Deve localizar produto através da busca.
Motivo: a tela de listagem de produtos não possui funcionalidade de busca.
* [NA] CT-025 - Deve exibir detalhes do produto cadastrado
Motivo: funcionalidade não implementada na aplicação.
* [NA] CT-026 - Deve editar produto com sucesso
Motivo: botão Editar não executa nenhuma ação.
* [NA] CT-027 - Deve refletir alterações após edição do produto
Dependente da funcionalidade de edição.
* [x] CT-028 - Deve excluir produto com sucesso
* [x] CT-029 - Deve remover produto da listagem após exclusão
* [x] CT-030 - Deve impedir acesso ao cadastro de produtos sem autenticação

### Próximos Módulos

* [ ] Carrinho
* [ ] Checkout
* [ ] API Testing

## Boas Práticas Aplicadas

* Uso de Fixtures para centralização das massas de teste
* Reutilização de código através de Custom Commands
* Separação entre dados de teste e lógica de automação
* Geração dinâmica de dados para evitar duplicidade de registros
* Organização dos cenários por módulo funcional
* Uso de BeforeEach para autenticação dos cenários protegidos
* Validação positiva e negativa das funcionalidades
* Estrutura preparada para escalabilidade e manutenção
* Documentação dos bugs encontrados durante a execução dos testes
* Utilização de seletores estáveis com data-testid

## Estrutura do Projeto

qa-automation-portfolio/

├── cypress/
│
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── produtos.cy.js
│   │
│   ├── fixtures/
│   │   ├── usuarios.json
│   │   ├── produtos.json
│   │   └── produto.jpg
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── docs/
│   ├── matriz-testes-produtos.md
│   ├── matriz-testes-carrinho.md
│   ├── matriz-testes-checkout.md
│   └── bug-report.md
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md

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
- ✅ Módulo de Produtos
- ✅ 20 Casos de Teste Automatizados
- ✅ Custom Commands
- ✅ Massa de Dados (Fixtures)
- ✅ Matriz de Casos de Teste - Produtos
- ✅ Documentação de Bugs Encontrados
- ✅ Controle de Acesso por Autenticação
- ✅ Validações Positivas e Negativas
- ✅ Estrutura Escalável para Novos Módulos

### Em andamento

- 🔄 Módulo de Carrinho
- 🔄 Módulo de Checkout

### Não automatizados devido a limitações da aplicação

- ⚠️ CT-024 - Localizar produto através da busca (funcionalidade inexistente)
- ⚠️ CT-025 - Exibir detalhes do produto cadastrado (funcionalidade inexistente)
- ⚠️ CT-026 - Editar produto com sucesso (botão Editar não funciona)
- ⚠️ CT-027 - Refletir alterações após edição do produto (dependente da funcionalidade de edição)

### Em Desenvolvimento
- 🔄 Automação E2E - Produtos

### Próximos Módulos
- 🛒 Carrinho
- 💳 Checkout
- 🔌 API Testing

## Custom Commands

| Comando                              | Finalidade |
| ------------------------------------ | ---------- |
| `cy.login(email, senha)`             | Centraliza o fluxo de autenticação de usuários |
| `cy.logout()`                        | Centraliza o fluxo de encerramento de sessão |
| `cy.acessarCadastroProdutos()`       | Navega até a tela de cadastro de produtos |
| `cy.cadastrarProduto(produto)`       | Executa o preenchimento e envio do formulário de cadastro de produtos |

## Estrutura dos Arquivos

| Arquivo | Descrição |
|----------|----------|
| login.cy.js | Testes automatizados do módulo de autenticação |
| produtos.cy.js | Testes automatizados do módulo de produtos |
| usuarios.json | Massa de dados dos testes de autenticação |
| produtos.json | Massa de dados dos testes de produtos |
| commands.js | Custom Commands reutilizáveis |
| cypress.config.js | Configuração principal do Cypress |
| bug-report.md | Registro dos defeitos encontrados |

## Como Executar

```bash
npm install
npx cypress open
```

## Autor

Jorge Eduardo Rodrigues
