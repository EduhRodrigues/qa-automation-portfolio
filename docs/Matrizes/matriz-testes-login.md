# Matriz de Casos de Teste - Login

## Objetivo

Validar o processo de autenticação da aplicação **ServeRest**, garantindo que apenas usuários com credenciais válidas consigam acessar áreas autenticadas, que as validações de login sejam executadas corretamente e que usuários não autenticados permaneçam impedidos de acessar funcionalidades protegidas.

---

# Casos Positivos

| ID | Caso de Teste | Prioridade | Status |
|----|---------------|------------|--------|
| CT-001 | Deve realizar login com sucesso | Alta | Automatizado |
| CT-009 | Deve realizar logout com sucesso | Alta | Automatizado |

---

# Casos Negativos

| ID | Caso de Teste | Prioridade | Status |
|----|---------------|------------|--------|
| CT-002 | Deve exibir mensagem de erro ao informar senha inválida | Alta | Automatizado |
| CT-003 | Deve exibir mensagem de erro ao informar e-mail inválido | Alta | Automatizado |
| CT-004 | Deve exibir mensagem de erro ao informar e-mail e senha inválidos | Alta | Automatizado |
| CT-005 | Deve exibir mensagem ao tentar login sem preencher o e-mail | Alta | Automatizado |
| CT-006 | Deve exibir mensagem ao tentar login sem preencher a senha | Alta | Automatizado |
| CT-007 | Deve exibir mensagem ao tentar login sem preencher e-mail e senha | Alta | Automatizado |
| CT-008 | Deve impedir login com e-mail em formato inválido | Média | Automatizado |
| CT-010 | Deve impedir acesso à área autenticada sem login | Alta | Automatizado |

---

# Casos Não Executados

Nenhum.

---

# Casos Bloqueados

Nenhum.

---

# Cobertura Funcional

## Autenticação

- Login utilizando credenciais válidas.
- Logout após autenticação.
- Redirecionamento para a Home após login.
- Redirecionamento para a tela de Login após logout.

---

## Validação de Credenciais

- Senha inválida.
- E-mail inválido.
- E-mail e senha inválidos.

---

## Validação de Campos Obrigatórios

- E-mail obrigatório.
- Senha obrigatória.
- Validação simultânea dos campos obrigatórios.

---

## Validação de Formato

- Validação nativa do navegador para o campo de e-mail.

---

## Controle de Acesso

- Bloqueio de acesso direto à área autenticada sem autenticação.

---

# Funcionalidades Avaliadas

| Funcionalidade | Cobertura | Situação |
|----------------|-----------|----------|
| Login | Completa | Automatizada |
| Logout | Completa | Automatizada |
| Validação de Credenciais | Completa | Automatizada |
| Validação de Campos Obrigatórios | Completa | Automatizada |
| Validação do Formato do E-mail | Completa | Automatizada |
| Mensagens de Erro | Completa | Automatizada |
| Controle de Acesso sem Autenticação | Completa | Automatizada |

---

# Regras de Negócio Validadas

- Apenas usuários com credenciais válidas conseguem autenticar-se.
- Credenciais inválidas não concedem acesso ao sistema.
- Campos obrigatórios impedem a submissão do formulário quando não preenchidos.
- O campo de e-mail respeita a validação nativa do navegador.
- Usuários não autenticados não conseguem acessar áreas protegidas da aplicação.

---

# Resumo da Cobertura

| Categoria | Quantidade |
|-----------|-----------:|
| Casos Positivos | 2 |
| Casos Negativos | 8 |
| Casos Automatizados | 10 |
| Casos Não Executados | 0 |
| Casos Bloqueados | 0 |
| Total de Casos Planejados | 10 |

---

# Bugs Relacionados

Durante a execução dos cenários de **Login** e **Logout** não foram identificados defeitos funcionais ou vulnerabilidades relacionadas ao processo de autenticação.

---

# Evidências Validadas

Os cenários automatizados confirmam que:

- usuários válidos conseguem autenticar-se com sucesso;
- usuários com credenciais inválidas permanecem bloqueados;
- mensagens de erro são exibidas corretamente para cada cenário;
- campos obrigatórios impedem o envio do formulário quando não preenchidos;
- o navegador valida corretamente o formato do campo de e-mail;
- o logout encerra a sessão autenticada;
- usuários não autenticados permanecem impedidos de acessar áreas protegidas da aplicação.

---

# Conclusão

O módulo **Login** apresenta cobertura completa das funcionalidades atualmente implementadas relacionadas ao processo de autenticação da aplicação **ServeRest**.

Os testes automatizados validam:

- autenticação com credenciais válidas;
- tratamento de credenciais inválidas;
- validação de campos obrigatórios;
- validação do formato do e-mail;
- apresentação das mensagens de erro;
- encerramento da sessão por meio do logout;
- proteção das áreas autenticadas contra acessos não autorizados.

Todos os **10 casos de teste** foram automatizados e executados com sucesso, sem identificação de defeitos funcionais relacionados ao processo de autenticação.

Esta matriz mantém rastreabilidade entre os requisitos funcionais, os casos de teste automatizados e o comportamento observado durante a execução da suíte.