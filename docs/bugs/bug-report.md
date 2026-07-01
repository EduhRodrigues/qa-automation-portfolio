# Bug Report

## BUG-001 - Botão Editar Produto não executa nenhuma ação

### Módulo

Produtos

### Severidade

Alta

### Prioridade

Alta

### Descrição

Ao clicar no botão **Editar** na listagem de produtos, nenhuma ação é executada. O sistema não redireciona para a tela de edição, não apresenta mensagens e permanece na mesma página.

### Passos para reproduzir

1. Efetuar login como administrador.
2. Acessar **Listar Produtos**.
3. Clicar no botão **Editar** de qualquer produto.

### Resultado Esperado

O sistema deve abrir a tela de edição do produto selecionado.

### Resultado Obtido

Nenhuma ação é executada ao clicar no botão **Editar**.

### Observações

- Nenhuma requisição é enviada ao servidor.
- A URL permanece em `/admin/listarprodutos`.
- Não há mensagens de erro no sistema.

### Status

Aberto

---

## BUG-002 - Botão Editar Usuário não executa nenhuma ação

### Módulo

Usuários

### Severidade

Média

### Prioridade

Alta

### Descrição

Ao clicar no botão **Editar** na listagem de usuários, nenhuma ação é executada. O sistema permanece na mesma página sem qualquer resposta visual.

### Passos para reproduzir

1. Efetuar login como administrador.
2. Acessar **Listar Usuários**.
3. Clicar no botão **Editar** de qualquer usuário.

### Resultado Esperado

O sistema deve abrir a tela de edição do usuário selecionado.

### Resultado Obtido

Nenhuma ação é executada ao clicar no botão **Editar**.

### Observações

- A URL permanece em `/admin/listarusuarios`.
- Nenhuma requisição é enviada ao servidor.
- Não ocorre redirecionamento.
- Nenhuma mensagem de erro é exibida.

### Status

Aberto

---

## BUG-003 - Usuário comum consegue acessar listagem administrativa de usuários

### Módulo

Controle de Acesso / Usuários

### Severidade

Crítica

### Prioridade

Crítica

### Descrição

Usuários comuns conseguem acessar diretamente a listagem administrativa de usuários utilizando a URL da área administrativa, caracterizando falha de controle de acesso (Broken Access Control).

### Passos para reproduzir

1. Efetuar login com um usuário comum.
2. Acessar diretamente:

```text
/admin/listarusuarios
```

### Resultado Esperado

O sistema deve impedir o acesso ou redirecionar o usuário para uma página de acesso negado.

### Resultado Obtido

O usuário comum consegue visualizar toda a listagem administrativa de usuários.

### Status

Aberto

---

## BUG-004 - Usuário comum consegue excluir outros usuários

### Módulo

Controle de Acesso / Usuários

### Severidade

Crítica

### Prioridade

Crítica

### Descrição

Usuários comuns conseguem excluir outros usuários utilizando a área administrativa, caracterizando falha crítica de controle de acesso (Broken Access Control).

### Passos para reproduzir

1. Efetuar login com um usuário comum.
2. Acessar:

```text
/admin/listarusuarios
```

3. Localizar qualquer usuário.
4. Clicar em **Excluir**.

### Resultado Esperado

Usuários comuns não devem possuir permissão para excluir usuários.

### Resultado Obtido

O usuário comum consegue excluir outros usuários cadastrados no sistema.

### Observações

- O sistema impede a exclusão do próprio usuário.
- O sistema impede a exclusão do usuário **Fulano da Silva**.
- Os demais usuários podem ser removidos normalmente.

### Status

Aberto

---

## BUG-005 - Primeiro clique no botão Excluir não executa nenhuma ação

### Módulo

Usuários

### Severidade

Média

### Prioridade

Média

### Descrição

Ao clicar no botão **Excluir** na listagem de usuários, nenhuma ação é executada no primeiro clique. Apenas após um segundo clique a aplicação processa a solicitação.

### Passos para reproduzir

1. Realizar login como administrador.
2. Acessar **Listar Usuários**.
3. Localizar qualquer usuário.
4. Clicar apenas uma vez em **Excluir**.

### Resultado Esperado

A aplicação deve processar imediatamente a solicitação de exclusão ou exibir a mensagem correspondente.

### Resultado Obtido

Nenhuma ação ocorre no primeiro clique. É necessário clicar novamente.

### Impacto

- Experiência do usuário comprometida.
- Sensação de botão inoperante.
- Necessidade de workaround na automação.

### Workaround na automação

```javascript
cy.contains('tr', emailUnico)
  .within(() => {

    cy.contains('Excluir')
      .click()
      .click()

  })
```

### Status

Aberto

---

# Novos Bugs Encontrados

---

## BUG-006 - Usuário comum consegue cadastrar usuários pela área administrativa

### Módulo

Controle de Acesso / Usuários

### Severidade

Crítica

### Prioridade

Crítica

### Descrição

Mesmo sendo um usuário comum, é possível acessar a tela administrativa de cadastro de usuários e criar novos usuários com sucesso.

O teste automatizado validou o comportamento tanto pela interface quanto pela API, confirmando que o usuário é efetivamente persistido na base de dados.

Trata-se de uma falha de **Broken Access Control (OWASP A01:2021)**.

### Passos para reproduzir

1. Efetuar login com um usuário comum.
2. Acessar:

```text
/admin/cadastrarusuarios
```

3. Informar nome, e-mail e senha.
4. Marcar o usuário como administrador (opcional).
5. Clicar em **Cadastrar**.

### Resultado Esperado

O sistema deve impedir o acesso à funcionalidade ou bloquear o cadastro.

### Resultado Obtido

O usuário é criado com sucesso e fica disponível na base de dados.

### Evidências

- Redirecionamento para `/admin/listarusuarios`.
- Usuário localizado posteriormente através da API (`GET /usuarios`).
- Cadastro persistido após atualização da página.

### Status

Aberto

---

## BUG-007 - Usuário comum consegue excluir produtos pela área administrativa

### Módulo

Controle de Acesso / Produtos

### Severidade

Crítica

### Prioridade

Crítica

### Descrição

Usuários comuns conseguem excluir produtos utilizando a área administrativa.

O teste automatizado confirmou a exclusão tanto pela interface quanto pela API, caracterizando uma falha crítica de controle de acesso (**Broken Access Control - OWASP A01:2021**).

### Passos para reproduzir

1. Efetuar login com um usuário comum.
2. Acessar:

```text
/admin/listarprodutos
```

3. Localizar qualquer produto.
4. Clicar em **Excluir**.

### Resultado Esperado

Usuários comuns não devem possuir permissão para excluir produtos.

### Resultado Obtido

O produto é removido definitivamente da base de dados.

### Evidências

- Requisição `DELETE /produtos/{id}` executada com sucesso.
- Produto deixa de existir após consulta na API (`GET /produtos`).

### Status

Aberto