# QA Automation Portfolio

![Cypress](https://img.shields.io/badge/Cypress-E2E-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/Status-In%20Progress-blue)

Projeto de automação de testes End-to-End (E2E) desenvolvido com **Cypress**, com foco em demonstrar conhecimentos em **Quality Assurance (QA)**, automação de testes, organização de código, controle de acesso e boas práticas de desenvolvimento.

---

# Tecnologias

* Cypress
* JavaScript (ES6)
* Node.js

---

# Sistema Testado

Aplicação utilizada para fins de estudo:

https://front.serverest.dev/login

---

# Cobertura Atual

## Administrador

* ✅ Login
* ✅ Logout
* ✅ Gerenciamento de Produtos
* ✅ Gerenciamento de Usuários

## Usuário Comum

* 🔄 Login
* 🔄 Pesquisa de Produtos
* 🔄 Carrinho de Compras
* 🔄 Controle de Acesso

---

# Casos de Teste Automatizados

| Módulo                   | Cobertura           |
| ------------------------ | ------------------- |
| Login                    | ✅ CT-001 ao CT-010  |
| Produtos (Administrador) | ✅ CT-011 ao CT-030  |
| Usuários (Administrador) | ✅ CT-031 ao CT-039  |
| Usuário Comum            | 🔄 CT-043 ao CT-059 |

---

# Boas Práticas Aplicadas

* Reutilização de código com Custom Commands
* Centralização das massas de teste utilizando Fixtures
* Separação entre dados e lógica de automação
* Geração dinâmica de dados para evitar duplicidade de registros
* Organização dos testes por módulo funcional
* Organização por perfil de usuário (Administrador e Usuário Comum)
* Validação de cenários positivos e negativos
* Controle de autenticação utilizando `beforeEach`
* Utilização de seletores estáveis (`data-testid`)
* Documentação dos bugs encontrados
* Estrutura preparada para escalabilidade e manutenção

---

# Estrutura do Projeto

```text
qa-automation-portfolio/

├── cypress/
│
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── logout.cy.js
│   │   ├── produtos.cy.js
│   │   ├── usuarios.cy.js
│   │   └── usuario-comum.cy.js
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
│   ├── matriz-testes-login.md
│   ├── matriz-testes-produtos.md
│   ├── matriz-testes-usuarios.md
│   ├── matriz-testes-usuario-comum.md
│   └── bug-report.md
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Custom Commands

| Comando                        | Finalidade                                               |
| ------------------------------ | -------------------------------------------------------- |
| `cy.login(email, senha)`       | Centraliza o fluxo de autenticação                       |
| `cy.logout()`                  | Centraliza o fluxo de logout                             |
| `cy.acessarCadastroProdutos()` | Navega para a tela de cadastro de produtos               |
| `cy.cadastrarProduto(produto)` | Executa o cadastro de produtos                           |
| `cy.acessarCadastroUsuarios()` | Navega para a tela de cadastro de usuários               |
| `cy.cadastrarUsuario(usuario)` | Executa o cadastro de usuários comuns ou administradores |

---

# Status Atual

## Concluído

* ✅ Módulo Login
* ✅ Módulo Logout
* ✅ Módulo Produtos (Administrador)
* ✅ Módulo Usuários (Administrador)
* ✅ 39 Casos de Teste Automatizados
* ✅ Matrizes de Casos de Teste
* ✅ Custom Commands
* ✅ Fixtures
* ✅ Controle de Acesso por Autenticação
* ✅ Validações Positivas e Negativas
* ✅ Estrutura escalável para novos módulos
* ✅ Documentação dos Bugs Encontrados
* ✅ Versionamento Git

---

## Em Desenvolvimento

* 🔄 Módulo Usuário Comum
* 🔄 Ampliação da cobertura E2E
* 🔄 API Testing
* 🔄 CI/CD
* 🔄 Relatórios Automatizados

---

# Casos Bloqueados pela Aplicação

## Produtos (Administrador)

* ⚠️ CT-024 – Busca de produtos inexistente na área administrativa
* ⚠️ CT-025 – Visualização de detalhes de produto inexistente
* ⚠️ CT-026 – Editar produto
* ⚠️ CT-027 – Persistência da edição

## Usuários (Administrador)

* ⚠️ CT-040 – Editar usuário
* ⚠️ CT-041 – Validação de email duplicado na edição
* ⚠️ CT-042 – Cancelar edição

## Usuário Comum

* ⚠️ CT-058 – Usuário comum consegue acessar listagem de usuários administrativos (BUG-006)
* ⚠️ CT-059 – Usuário comum consegue excluir outros usuários (BUG-007)

---

# Bugs Documentados

| Bug        | Descrição                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------- |
| 🐞 BUG-001 | Botão **Editar Produto** não executa nenhuma ação                                         |
| 🐞 BUG-002 | Funcionalidade de busca de produtos inexistente na área administrativa                    |
| 🐞 BUG-003 | Funcionalidade de visualização de detalhes de produtos inexistente na área administrativa |
| 🐞 BUG-004 | Botão **Editar Usuário** não executa nenhuma ação                                         |
| 🐞 BUG-005 | Primeiro clique no botão **Excluir** não executa nenhuma ação                             |
| 🐞 BUG-006 | Usuário comum consegue acessar a listagem de usuários administrativos                     |
| 🐞 BUG-007 | Usuário comum consegue excluir outros usuários                                            |

---

# Próximos Módulos

* Usuário Comum
* Carrinho de Compras
* Checkout
* API Testing
* CI/CD
* Relatórios Automatizados

---

# Como Executar

Instale as dependências:

```bash
npm install
```

Executar em modo interativo:

```bash
npx cypress open
```

Executar em modo headless:

```bash
npx cypress run
```

---

# Autor

**Jorge Eduardo Rodrigues**

