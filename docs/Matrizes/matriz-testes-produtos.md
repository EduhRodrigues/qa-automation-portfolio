# Matriz de Casos de Teste - Produtos

## Objetivo

Validar as funcionalidades do módulo **Produtos** da aplicação **ServeRest**, contemplando cenários positivos, negativos, validações de regras de negócio, controle de acesso e funcionalidades indisponíveis na versão atual da aplicação.

---

# Casos Positivos

| ID | Caso de Teste | Prioridade | Status |
|----|---------------|------------|--------|
| CT-011 | Deve cadastrar produto com sucesso | Alta | Automatizado |
| CT-016 | Deve cadastrar produto com sucesso sem imagem | Média | Automatizado |
| CT-018 | Deve permitir cadastro com quantidade igual a zero | Média | Automatizado |
| CT-021 | Deve cadastrar produto com nome contendo caracteres especiais | Baixa | Automatizado |
| CT-022 | Deve cadastrar produto com descrição extensa | Baixa | Automatizado |
| CT-023 | Deve exibir produto recém-cadastrado na listagem | Alta | Automatizado |
| CT-028 | Deve excluir produto com sucesso | Alta | Automatizado |
| CT-029 | Deve remover produto da listagem após exclusão | Alta | Automatizado |

---

# Casos Negativos

| ID | Caso de Teste | Prioridade | Status |
|----|---------------|------------|--------|
| CT-012 | Deve exibir mensagem ao tentar cadastrar produto sem nome | Alta | Automatizado |
| CT-013 | Deve exibir mensagem ao tentar cadastrar produto sem preço | Alta | Automatizado |
| CT-014 | Deve exibir mensagem ao tentar cadastrar produto sem descrição | Média | Automatizado |
| CT-015 | Deve exibir mensagem ao tentar cadastrar produto sem quantidade | Média | Automatizado |
| CT-017 | Deve validar preço igual a zero | Alta | Automatizado |
| CT-019 | Deve aceitar apenas números no campo preço | Média | Automatizado |
| CT-020 | Deve impedir cadastro com caractere não numérico na quantidade | Média | Automatizado |
| CT-030 | Deve impedir acesso ao cadastro de produtos sem autenticação | Alta | Automatizado |

---

# Casos Não Executados

| ID | Caso de Teste | Status | Motivo |
|----|---------------|--------|--------|
| CT-024 | Deve pesquisar produto existente | Não Executado | A aplicação não possui funcionalidade de pesquisa de produtos administrativos (BUG-002). |
| CT-025 | Deve exibir detalhes do produto | Não Executado | A aplicação não possui tela de visualização/detalhes do produto (BUG-003). |

---

# Casos Bloqueados

| ID | Caso de Teste | Status | Motivo |
|----|---------------|--------|--------|
| CT-026 | Deve editar produto com sucesso | Bloqueado | Botão **Editar** não possui implementação (BUG-001). |
| CT-027 | Deve validar alteração dos dados do produto | Bloqueado | Dependente da implementação do CT-026. |

---

# Cobertura Funcional

## Cadastro de Produtos

- Cadastro de produto com sucesso.
- Cadastro de produto sem imagem.
- Cadastro com quantidade igual a zero.
- Cadastro com nome contendo caracteres especiais.
- Cadastro com descrição extensa.

---

## Validação de Campos Obrigatórios

- Nome obrigatório.
- Preço obrigatório.
- Descrição obrigatória.
- Quantidade obrigatória.

---

## Validação de Campos

- Preço deve ser maior que zero.
- Campo preço aceita apenas valores numéricos.
- Campo quantidade aceita apenas valores numéricos.
- Quantidade igual a zero permitida.

---

## Listagem

- Exibição do produto recém-cadastrado.
- Persistência do cadastro na listagem.

---

## Exclusão

- Exclusão de produto.
- Remoção do produto da listagem após exclusão.

---

## Segurança

- Bloqueio de acesso ao cadastro de produtos sem autenticação.

---

# Funcionalidades Avaliadas

| Funcionalidade | Cobertura | Situação |
|----------------|-----------|----------|
| Cadastro de Produto | Completa | Automatizada |
| Validações Obrigatórias | Completa | Automatizada |
| Validação de Campos Numéricos | Completa | Automatizada |
| Cadastro sem Imagem | Completa | Automatizada |
| Cadastro com Caracteres Especiais | Completa | Automatizada |
| Cadastro com Descrição Extensa | Completa | Automatizada |
| Listagem de Produtos | Completa | Automatizada |
| Exclusão de Produtos | Completa | Automatizada |
| Pesquisa de Produtos | Não disponível | Não implementada |
| Visualização de Detalhes | Não disponível | Não implementada |
| Edição de Produtos | Parcial | Bloqueada por BUG-001 |
| Controle de Acesso sem Autenticação | Completa | Automatizada |

---

# Resumo da Cobertura

| Categoria | Quantidade |
|-----------|-----------:|
| Casos Positivos | 8 |
| Casos Negativos | 8 |
| Casos Não Executados | 2 |
| Casos Bloqueados | 2 |
| Casos Automatizados | 16 |
| Total de Casos Planejados | 20 |

---

# Bugs Relacionados

| Bug | Descrição |
|------|-----------|
| BUG-001 | Botão **Editar Produto** não executa nenhuma ação. |
| BUG-002 | Funcionalidade de pesquisa de produtos administrativos inexistente. |
| BUG-003 | Tela de visualização/detalhes de produtos inexistente. |

---

# Conclusão

O módulo **Produtos** possui cobertura completa de todas as funcionalidades atualmente implementadas na aplicação relacionadas ao gerenciamento de produtos.

Os cenários automatizados contemplam:

- cadastro de produtos;
- validações obrigatórias;
- validações de campos numéricos;
- regras de negócio;
- persistência dos dados;
- exclusão de produtos;
- controle de acesso sem autenticação.

As funcionalidades de **pesquisa**, **visualização de detalhes** e **edição de produtos** não puderam ser automatizadas por limitações da própria aplicação, permanecendo devidamente rastreadas pelos casos de teste e pelos respectivos bugs documentados.

Esta matriz mantém rastreabilidade completa entre requisitos, casos de teste automatizados e defeitos identificados durante a execução da suíte de testes.