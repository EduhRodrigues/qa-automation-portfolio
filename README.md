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

## Módulo de Autenticação

* [x] CT-001 - Deve realizar login com sucesso
* [x] CT-002 - Deve exibir mensagem de erro ao informar senha inválida
* [x] CT-003 - Deve exibir mensagem de erro ao informar email inválido
* [x] CT-004 - Deve exibir mensagem de erro ao informar email e senha inválidos
* [x] CT-005 - Deve exibir mensagem ao tentar login sem preencher email
* [x] CT-006 - Deve exibir mensagem ao tentar login sem preencher senha
* [x] CT-007 - Deve exibir mensagem ao tentar login sem preencher email e senha
* [x] CT-008 - Deve impedir login com email em formato inválido
* [x] CT-009 - Deve realizar logout com sucesso
* [ ] CT-010 - Deve impedir acesso à área autenticada sem login

## Módulo de Produtos

* [ ] Em desenvolvimento

## Módulo de Carrinho

* [ ] Em desenvolvimento

## Módulo de Checkout

* [ ] Em desenvolvimento

## Testes de API

* [ ] Em desenvolvimento

## Detalhes do Caso Implementado

## CT-001 - Deve realizar login com sucesso

## Objetivo

Validar que um usuário com credenciais válidas consegue acessar a área autenticada do sistema.

## Passos

1. Acessar a página de login.
2. Informar email válido.
3. Informar senha válida.
4. Clicar no botão Entrar.

## Validações

* Redirecionamento para `/home`
* Exibição do texto `Serverest Store`
* Login realizado com sucesso

## CT-002 - Deve exibir mensagem de erro ao informar senha inválida

## Objetivo

Validar que o sistema não permite login quando uma senha incorreta é informada.

## Passos

1. Acessar a página de login.
2. Informar email válido.
3. Informar senha inválida.
4. Clicar no botão Entrar.

## Validações

- Permanência na página `/login`
- Exibição da mensagem `Email e/ou senha inválidos`
- Login não realizado

---

## CT-003 - Deve exibir mensagem de erro ao informar email inválido

## Objetivo

Validar que o sistema não permite login quando um email não cadastrado é informado.

## Passos

1. Acessar a página de login.
2. Informar email inválido.
3. Informar senha válida.
4. Clicar no botão Entrar.

## Validações

- Permanência na página `/login`
- Exibição da mensagem `Email e/ou senha inválidos`
- Login não realizado

---

## CT-004 - Deve exibir mensagem de erro ao informar email e senha inválidos

## Objetivo

Validar que o sistema não permite login quando email e senha inválidos são informados.

## Passos

1. Acessar a página de login.
2. Informar email inválido.
3. Informar senha inválida.
4. Clicar no botão Entrar.

## Validações

- Permanência na página `/login`
- Exibição da mensagem `Email e/ou senha inválidos`
- Login não realizado

---

## CT-005 - Deve exibir mensagem ao tentar login sem preencher email

## Objetivo

Validar que o campo email é obrigatório.

## Passos

1. Acessar a página de login.
2. Deixar o campo email em branco.
3. Informar senha válida.
4. Clicar no botão Entrar.

## Validações

- Permanência na página `/login`
- Exibição da mensagem `Email é obrigatório`
- Login não realizado

---

## CT-006 - Deve exibir mensagem ao tentar login sem preencher senha

## Objetivo

Validar que o campo senha é obrigatório.

## Passos

1. Acessar a página de login.
2. Informar email válido.
3. Deixar o campo senha em branco.
4. Clicar no botão Entrar.

## Validações

- Permanência na página `/login`
- Exibição da mensagem `Password é obrigatório`
- Login não realizado

---

## CT-007 - Deve exibir mensagem ao tentar login sem preencher email e senha

## Objetivo

Validar que os campos email e senha são obrigatórios.

## Passos

1. Acessar a página de login.
2. Deixar o campo email em branco.
3. Deixar o campo senha em branco.
4. Clicar no botão Entrar.

## Validações

- Permanência na página `/login`
- Exibição da mensagem `Email é obrigatório`
- Exibição da mensagem `Password é obrigatório`
- Login não realizado

---

## CT-008 - Deve impedir login com email em formato inválido

## Objetivo

Validar que o navegador impede o envio do formulário quando o email está em formato inválido.

## Passos

1. Acessar a página de login.
2. Informar email em formato inválido.
3. Informar senha válida.
4. Tentar realizar login.

## Validações

- Campo email marcado como inválido
- Exibição da mensagem nativa de validação do navegador
- Formulário não enviado
- Permanência na página de login

## CT-009 - Deve realizar logout com sucesso

##Objetivo

Validar que um usuário autenticado consegue encerrar sua sessão e retornar para a tela de login.

## Passos

1. Realizar login com credenciais válidas.
2. Validar acesso à área autenticada.
3. Clicar no botão Logout.
4. Aguardar o redirecionamento.

## Validações

* Redirecionamento para `/login`
* Exibição da tela de login
* Encerramento da sessão do usuário

## CT-010 - Deve impedir acesso à área autenticada sem login

## Objetivo

Validar que usuários não autenticados não conseguem acessar áreas protegidas da aplicação.

## Passos

1. Acessar diretamente a URL `/home` sem realizar login.
2. Aguardar o comportamento da aplicação.

## Validações

* Redirecionamento automático para `/login`
* Exibição da tela de login
* Bloqueio de acesso à área autenticada


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