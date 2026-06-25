# Bug Report

## BUG-001 - Botão Editar Produto não executa nenhuma ação

### Módulo

Produtos

### Severidade

Alta

### Passos para reproduzir

1. Efetuar login como administrador.
2. Acessar **Listar Produtos**.
3. Clicar no botão **Editar** de qualquer produto.

### Resultado Esperado

O sistema deve abrir a tela de edição do produto selecionado.

### Resultado Obtido

Nenhuma ação é executada ao clicar no botão **Editar**.

### Status

Aberto

---

## BUG-002 - Botão Editar Usuário não executa nenhuma ação

### Módulo

Usuários

### Severidade

Média

### Passos para reproduzir

1. Efetuar login como administrador.
2. Acessar **Listar Usuários**.
3. Clicar no botão **Editar** de qualquer usuário.

### Resultado Esperado

O sistema deve abrir a tela de edição do usuário selecionado.

### Resultado Obtido

Nenhuma ação é executada ao clicar no botão **Editar**.

### Observações

* A URL permanece em `/admin/listarusuarios`.
* Não ocorre redirecionamento.
* Nenhuma mensagem de erro é exibida.

### Status

Aberto

---

## BUG-003 - Usuário comum consegue acessar listagem administrativa de usuários

### Módulo

Controle de Acesso / Usuários

### Severidade

Crítica

### Passos para reproduzir

1. Efetuar login com um usuário comum.
2. Acessar diretamente a URL:

```text
/admin/listarusuarios
```

### Resultado Esperado

O sistema deve impedir o acesso ou redirecionar o usuário para uma página de acesso negado.

### Resultado Obtido

O usuário comum consegue acessar a listagem administrativa de usuários.

### Status

Aberto

---

## BUG-004 - Usuário comum consegue excluir outros usuários

### Módulo

Controle de Acesso / Usuários

### Severidade

Crítica

### Passos para reproduzir

1. Efetuar login com um usuário comum.
2. Acessar diretamente a URL:

```text
/admin/listarusuarios
```

3. Clicar em **Excluir** para remover outro usuário.

### Resultado Esperado

Usuários comuns não devem possuir permissão para excluir usuários.

### Resultado Obtido

O usuário comum consegue excluir outros usuários cadastrados no sistema.

### Observações

* O sistema impede a exclusão do próprio usuário.
* O sistema impede a exclusão do usuário "Fulano da Silva".
* Os demais usuários podem ser removidos normalmente.

### Status

Aberto

## BUG-005 - Primeiro clique no botão "Excluir" não executa nenhuma ação

**Status:** Confirmado

**Severidade:** Média

**Prioridade:** Média

### Descrição

Ao clicar no botão **Excluir** na listagem de usuários, nenhuma ação é executada no primeiro clique. Apenas após um segundo clique a aplicação processa a solicitação de exclusão ou exibe a mensagem de regra de negócio.

### Passos para reproduzir

1. Realizar login como administrador.
2. Acessar **Listar Usuários**.
3. Localizar qualquer usuário.
4. Clicar uma única vez no botão **Excluir**.

### Resultado esperado

A aplicação deve processar a solicitação imediatamente após o primeiro clique, executando a exclusão ou exibindo a mensagem de validação correspondente.

### Resultado obtido

Nenhuma ação é executada no primeiro clique. É necessário um segundo clique para que a aplicação processe a solicitação.

### Impacto

- Experiência do usuário comprometida.
- Possibilidade de o usuário acreditar que o botão está inoperante.
- Necessidade de workaround na automação dos testes.

### Workaround na automação

```javascript
cy.contains('tr', emailUnico)
  .within(() => {

    cy.contains('Excluir')
      .click()
      .click()

  })
```