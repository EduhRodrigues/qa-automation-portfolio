# Matriz de Casos de Teste - Usuários

## Objetivo

Validar as funcionalidades do módulo **Usuários** da aplicação **ServeRest**, contemplando o cadastro de usuários comuns e administradores, validações de campos obrigatórios, regras de negócio, validações de dados e funcionalidades administrativas atualmente disponíveis.

---

# Casos Positivos

| ID | Caso de Teste | Prioridade | Status |
|----|---------------|------------|--------|
| CT-031 | Deve cadastrar usuário comum com sucesso | Alta | Automatizado |
| CT-032 | Deve cadastrar usuário administrador com sucesso | Alta | Automatizado |

---

# Casos Negativos

| ID | Caso de Teste | Prioridade | Status |
|----|---------------|------------|--------|
| CT-033 | Não deve permitir cadastro sem nome | Alta | Automatizado |
| CT-034 | Não deve permitir cadastro sem e-mail | Alta | Automatizado |
| CT-035 | Não deve permitir cadastro sem senha | Alta | Automatizado |
| CT-036 | Não deve permitir cadastro sem preencher os campos obrigatórios | Alta | Automatizado |
| CT-037 | Não deve permitir cadastro com e-mail em formato inválido | Média | Automatizado |
| CT-038 | Não deve permitir cadastro com e-mail já existente | Alta | Automatizado |

---

# Regras de Negócio

| ID | Caso de Teste | Prioridade | Status |
|----|---------------|------------|--------|
| CT-039 | Não deve permitir exclusão do próprio usuário | Média | Automatizado |

---

# Casos Bloqueados

Os cenários abaixo permanecem bloqueados porque a funcionalidade de edição de usuários não está implementada na versão atual da aplicação.

| ID | Caso de Teste | Status | Motivo |
|----|---------------|--------|--------|
| CT-040 | Deve editar usuário com sucesso | Bloqueado | Botão **Editar** não executa nenhuma ação (BUG-002). |
| CT-041 | Não deve permitir edição com e-mail já existente | Bloqueado | Dependente da implementação do CT-040. |
| CT-042 | Deve cancelar edição de usuário | Bloqueado | Dependente da implementação do CT-040. |

---

# Cobertura Funcional

## Cadastro de Usuários

- Cadastro de usuário comum.
- Cadastro de usuário administrador.
- Redirecionamento após cadastro.
- Exibição do administrador na listagem de usuários.

---

## Validação de Campos Obrigatórios

- Nome obrigatório.
- E-mail obrigatório.
- Senha obrigatória.
- Validação simultânea de todos os campos obrigatórios.

---

## Validação de Dados

- Formato válido do endereço de e-mail.
- Cadastro utilizando e-mail duplicado.

---

## Regras de Negócio

- Impedir que um administrador exclua o próprio usuário.

---

## Funcionalidades Administrativas Avaliadas

| Funcionalidade | Cobertura | Situação |
|----------------|-----------|----------|
| Cadastro de Usuário Comum | Completa | Automatizada |
| Cadastro de Usuário Administrador | Completa | Automatizada |
| Validação de Campos Obrigatórios | Completa | Automatizada |
| Validação de Formato de E-mail | Completa | Automatizada |
| Validação de E-mail Duplicado | Completa | Automatizada |
| Listagem de Usuários | Completa | Automatizada |
| Regra de Exclusão do Próprio Usuário | Completa | Automatizada |
| Edição de Usuários | Parcial | Bloqueada (BUG-002) |

---

# Resumo da Cobertura

| Categoria | Quantidade |
|-----------|-----------:|
| Casos Positivos | 2 |
| Casos Negativos | 6 |
| Regras de Negócio | 1 |
| Casos Automatizados | 9 |
| Casos Bloqueados | 3 |
| Total de Casos Planejados | 12 |

---

# Bugs Relacionados

| Bug | Descrição |
|------|-----------|
| BUG-002 | Botão **Editar Usuário** não executa nenhuma ação. |
| BUG-005 | O botão **Excluir** exige dois cliques para processar a solicitação de exclusão. |

---

# Conclusão

O módulo **Usuários** possui cobertura completa das funcionalidades atualmente implementadas relacionadas ao cadastro e gerenciamento de usuários na aplicação **ServeRest**.

Os testes automatizados contemplam:

- cadastro de usuários comuns;
- cadastro de administradores;
- validações de campos obrigatórios;
- validação do formato do e-mail;
- validação de e-mail duplicado;
- regra de negócio que impede a exclusão do próprio usuário administrador.

Os cenários de edição (**CT-040**, **CT-041** e **CT-042**) permanecem classificados como **Bloqueados**, pois a funcionalidade não está implementada na aplicação.

Durante a execução da suíte também foi identificado o **BUG-005**, no qual o botão **Excluir** exige dois cliques para processar a solicitação. Esse comportamento foi documentado e tratado na automação por meio de um workaround temporário até que a aplicação seja corrigida.

Esta matriz mantém rastreabilidade entre requisitos, casos de teste automatizados e defeitos identificados durante a execução dos testes.