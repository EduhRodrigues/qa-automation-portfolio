# Matriz de Casos de Teste - Usuário Comum

## Objetivo

Validar as funcionalidades disponíveis para usuários comuns na aplicação **ServeRest**, garantindo o correto funcionamento das operações disponíveis ao cliente e verificando que usuários sem privilégios administrativos não consigam acessar ou executar funcionalidades restritas à administração.

---

# Casos Positivos

| ID | Caso de Teste | Prioridade | Status |
|----|---------------|------------|--------|
| CT-043 | Deve realizar login como usuário comum | Alta | Automatizado |
| CT-044 | Deve exibir a Home do usuário comum após o login | Alta | Automatizado |
| CT-045 | Deve pesquisar produto existente | Alta | Automatizado |
| CT-046 | Deve informar quando a pesquisa não localizar produtos | Média | Automatizado |
| CT-047 | Deve adicionar produto à lista de compras | Alta | Automatizado |
| CT-048 | Deve aumentar a quantidade do produto na lista de compras | Média | Automatizado |
| CT-049 | Deve realizar logout com sucesso | Alta | Automatizado |
| CT-050 | Não deve acessar a Home após realizar logout utilizando o botão Voltar do navegador | Alta | Automatizado |
| CT-051 | Deve limpar a lista de compras com sucesso | Alta | Automatizado |
| CT-052 | Deve adicionar dois produtos diferentes à lista de compras | Alta | Automatizado |
| CT-053 | Deve diminuir a quantidade do produto na lista de compras | Média | Automatizado |
| CT-054 | Não deve permitir quantidade inferior a 1 | Média | Automatizado |
| CT-055 | Deve acessar a página do carrinho | Média | Automatizado |

---

# Casos de Segurança / Controle de Acesso

| ID | Caso de Teste | Prioridade | Status | Observação |
|----|---------------|------------|--------|------------|
| CT-056 | Usuário comum não deve acessar a página **Listar Usuários** | Crítica | Falhou (Bug Confirmado) | BUG-003 |
| CT-057 | Usuário comum não deve acessar a página **Cadastrar Usuários** | Crítica | Automatizado | Comportamento conforme esperado |
| CT-058 | Usuário comum não deve acessar a página **Listar Produtos** | Crítica | Automatizado | Comportamento conforme esperado |
| CT-059 | Usuário comum não deve acessar a página **Cadastrar Produtos** | Crítica | Automatizado | Comportamento conforme esperado |
| CT-060 | Usuário comum não deve acessar a página **Relatórios** | Crítica | Automatizado | Comportamento conforme esperado |
| CT-061 | Usuário comum não deve excluir outro usuário | Crítica | Falhou (Bug Confirmado) | BUG-004 |
| CT-062 | Usuário comum não deve cadastrar usuários pela área administrativa | Crítica | Falhou (Bug Confirmado) | BUG-006 |
| CT-063 | Usuário comum não deve excluir produtos pela área administrativa | Crítica | Automatizado | Comportamento conforme esperado |

---

# Casos Não Automatizados

| Funcionalidade | Motivo |
|----------------|--------|
| Editar Usuário | Funcionalidade indisponível (BUG-002). |
| Editar Produto | Funcionalidade indisponível (BUG-001). |

---

# Cobertura Funcional

## Autenticação

- Login.
- Logout.
- Invalidação da sessão após logout.

---

## Pesquisa

- Pesquisa de produto existente.
- Pesquisa sem resultados.

---

## Lista de Compras

- Adição de produto.
- Adição de múltiplos produtos.
- Limpeza da lista.
- Aumento da quantidade.
- Redução da quantidade.
- Validação do limite mínimo.
- Acesso ao carrinho.

---

## Controle de Acesso

- Acesso à listagem administrativa de usuários.
- Acesso ao cadastro administrativo de usuários.
- Acesso à listagem administrativa de produtos.
- Acesso ao cadastro administrativo de produtos.
- Acesso à página de relatórios.
- Exclusão de usuários.
- Cadastro de usuários pela área administrativa.
- Exclusão de produtos pela área administrativa.

---

# Funcionalidades Administrativas Avaliadas

| Funcionalidade | Cobertura | Situação |
|----------------|-----------|----------|
| Listar Usuários | Completa | Vulnerável (BUG-003) |
| Cadastrar Usuários | Completa | Protegida |
| Excluir Usuários | Completa | Vulnerável (BUG-004) |
| Editar Usuários | Não disponível | BUG-002 |
| Listar Produtos | Completa | Protegida |
| Cadastrar Produtos | Completa | Protegida |
| Excluir Produtos | Completa | Protegida |
| Editar Produtos | Não disponível | BUG-001 |
| Relatórios | Completa | Protegida |

---

# Resumo da Cobertura

| Categoria | Quantidade |
|-----------|-----------:|
| Casos Positivos | 13 |
| Casos de Segurança | 8 |
| Casos Automatizados | 21 |
| Bugs Confirmados | 6 |
| Funcionalidades Administrativas Avaliadas | 9 |

---

# Bugs Relacionados

| Bug | Descrição |
|------|-----------|
| BUG-001 | Botão **Editar Produto** não executa nenhuma ação. |
| BUG-002 | Botão **Editar Usuário** não executa nenhuma ação. |
| BUG-003 | Usuário comum consegue acessar a listagem administrativa de usuários. |
| BUG-004 | Usuário comum consegue excluir outros usuários. |
| BUG-005 | Primeiro clique no botão **Excluir** não executa nenhuma ação. |
| BUG-006 | Usuário comum consegue cadastrar usuários pela área administrativa. |

---

# Conclusão

O módulo **Usuário Comum** apresenta cobertura completa das funcionalidades atualmente disponíveis ao cliente, incluindo autenticação, pesquisa de produtos, gerenciamento da lista de compras, acesso ao carrinho e validação das principais restrições de segurança.

Foram identificadas **três vulnerabilidades confirmadas de controle de acesso**, documentadas como **BUG-003**, **BUG-004** e **BUG-006**, todas relacionadas à execução de funcionalidades administrativas por usuários comuns.

As funcionalidades de edição de usuários e produtos permanecem indisponíveis na aplicação, estando documentadas como **BUG-001** e **BUG-002**.

Esta matriz mantém rastreabilidade completa entre os casos de teste automatizados, as funcionalidades avaliadas e os defeitos confirmados durante a execução da suíte de testes.