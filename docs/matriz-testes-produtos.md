# Matriz de Casos de Teste - Produtos

## Objetivo

Validar as funcionalidades do módulo Produtos da aplicação ServeRest.

---

## Casos Positivos

| ID | Caso de Teste | Prioridade |
|----|---------------|------------|
| CT-011 | Deve cadastrar produto com sucesso | Alta |
| CT-012 | Deve exibir produto cadastrado na listagem | Alta |
| CT-013 | Deve pesquisar produto existente | Alta |
| CT-014 | Deve editar produto com sucesso | Alta |
| CT-015 | Deve excluir produto com sucesso | Alta |
| CT-016 | Deve exibir detalhes do produto | Média |
| CT-017 | Deve permitir cadastro de produtos com estoque igual a zero | Média |

---

## Casos Negativos

| ID | Caso de Teste | Prioridade |
|----|---------------|------------|
| CT-018 | Não deve permitir cadastro sem nome | Alta |
| CT-019 | Não deve permitir cadastro sem preço | Alta |
| CT-020 | Não deve permitir cadastro sem descrição | Média |
| CT-021 | Não deve permitir cadastro sem quantidade | Média |
| CT-022 | Não deve permitir preço negativo | Alta |
| CT-023 | Não deve permitir quantidade negativa | Alta |
| CT-024 | Não deve permitir cadastro de produto duplicado | Alta |
| CT-025 | Deve exibir mensagem ao pesquisar produto inexistente | Média |
| CT-026 | Não deve permitir edição com dados inválidos | Média |
| CT-027 | Não deve permitir exclusão de produto inexistente | Baixa |

---

## Cobertura

Funcionalidades contempladas:

- Cadastro
- Pesquisa
- Consulta
- Edição
- Exclusão
- Validações
- Tratamento de erros