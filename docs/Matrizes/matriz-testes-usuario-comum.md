# Matriz de Casos de Teste - Usuário Comum

## Objetivo

Validar as funcionalidades disponíveis para usuários comuns, bem como as restrições de acesso às funcionalidades administrativas da aplicação ServeRest.

---

## Casos Positivos

| ID | Caso de Teste | Prioridade |
|----|---------------|------------|
| CT-043 | Deve realizar login como usuário comum com sucesso | Alta |
| CT-044 | Deve visualizar a listagem de produtos | Alta |
| CT-045 | Deve visualizar os detalhes de um produto | Média |
| CT-046 | Deve adicionar produto ao carrinho | Alta |
| CT-047 | Deve visualizar os produtos adicionados ao carrinho | Alta |
| CT-048 | Deve remover produto do carrinho | Média |
| CT-049 | Deve realizar logout com sucesso | Alta |

---

## Casos Negativos

| ID | Caso de Teste | Prioridade |
|----|---------------|------------|
| CT-050 | Não deve permitir acesso ao cadastro de usuários | Alta |
| CT-051 | Não deve permitir acesso à listagem de usuários | Alta |
| CT-052 | Não deve permitir acesso ao cadastro de produtos | Alta |
| CT-053 | Não deve permitir acesso à listagem de produtos administrativos | Alta |
| CT-054 | Não deve permitir acesso aos relatórios | Média |
| CT-055 | Não deve permitir cadastro de produtos acessando a URL diretamente | Alta |

---

## Regras de Negócio

| ID | Caso de Teste | Prioridade |
|----|---------------|------------|
| CT-056 | Não deve permitir excluir o próprio usuário | Média |
| CT-057 | Não deve permitir excluir o usuário protegido "Fulano da Silva" | Média |

---

## Casos Bloqueados por Bug

| ID | Caso de Teste | Status |
|----|---------------|--------|
| CT-058 | Usuário comum não deve conseguir acessar a listagem de usuários | Bloqueado (BUG-006) |
| CT-059 | Usuário comum não deve conseguir excluir outros usuários | Bloqueado (BUG-007) |

---

## Cobertura

Funcionalidades contempladas:

- Login de usuário comum
- Navegação pela área do cliente
- Visualização de produtos
- Visualização de detalhes dos produtos
- Adição e remoção de produtos do carrinho
- Logout
- Controle de acesso às funcionalidades administrativas
- Regras de negócio para exclusão de usuários
- Segurança e autorização de usuários

---

## Bugs Relacionados

| Bug | Descrição |
|------|-----------|
| BUG-006 | Usuário comum consegue acessar a listagem de usuários administrativos. |
| BUG-007 | Usuário comum consegue excluir outros usuários, mesmo sem possuir privilégios administrativos. |