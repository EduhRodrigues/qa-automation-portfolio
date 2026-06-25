# Matriz de Casos de Teste - Logout

## Objetivo

Validar o encerramento da sessão do usuário e garantir que áreas protegidas não possam ser acessadas após o logout.

---

## Casos Positivos

| ID | Caso de Teste | Prioridade |
|----|---------------|------------|
| CT-035 | Deve realizar logout com sucesso | Alta |
| CT-036 | Deve impedir acesso à área administrativa após logout | Alta |

---

## Casos Negativos

Nenhum caso negativo identificado para a funcionalidade implementada atualmente.

---

## Cobertura

Funcionalidades contempladas:

- Encerramento de sessão
- Redirecionamento para tela de login
- Invalidação da sessão autenticada
- Proteção de rotas administrativas após logout