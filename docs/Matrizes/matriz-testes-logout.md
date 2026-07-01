# Matriz de Casos de Teste - Logout

## Objetivo

Validar o processo de encerramento de sessão da aplicação **ServeRest**, garantindo que o logout invalide corretamente a sessão autenticada, redirecione o usuário para a tela de login e impeça o acesso às áreas protegidas da aplicação após o término da autenticação.

---

# Casos Positivos

| ID | Caso de Teste | Prioridade | Status |
|----|---------------|------------|--------|
| CT-035 | Deve realizar logout com sucesso | Alta | Automatizado |
| CT-036 | Deve impedir acesso à área administrativa após logout | Alta | Automatizado |

---

# Casos Negativos

Não foram identificados cenários negativos aplicáveis à funcionalidade de logout na versão atual da aplicação.

---

# Cobertura Funcional

## Logout

- Encerramento da sessão autenticada.
- Redirecionamento para a tela de login.
- Exibição da tela de autenticação após o logout.

---

## Segurança

- Invalidação da sessão autenticada.
- Bloqueio de acesso às rotas administrativas após o logout.
- Proteção das áreas restritas para usuários não autenticados.

---

# Funcionalidades Avaliadas

| Funcionalidade | Cobertura | Situação |
|----------------|-----------|----------|
| Logout | Completa | Automatizada |
| Redirecionamento para Login | Completa | Automatizada |
| Invalidação da Sessão | Completa | Automatizada |
| Proteção das Rotas Administrativas | Completa | Automatizada |

---

# Resumo da Cobertura

| Categoria | Quantidade |
|-----------|-----------:|
| Casos Positivos | 2 |
| Casos Negativos | 0 |
| Casos Automatizados | 2 |
| Total de Casos Planejados | 2 |

---

# Bugs Relacionados

Durante a execução dos cenários de logout **não foram identificados defeitos funcionais ou vulnerabilidades de segurança** relacionados ao encerramento da sessão.

---

# Evidências Validadas

Os cenários automatizados confirmam que:

- o usuário autenticado consegue encerrar a sessão corretamente;
- o sistema redireciona para a tela de login após o logout;
- a sessão é invalidada imediatamente;
- tentativas de acesso direto às rotas administrativas após o logout são bloqueadas;
- usuários não autenticados permanecem impedidos de acessar áreas protegidas da aplicação.

---

# Conclusão

O módulo **Logout** apresenta cobertura completa das funcionalidades atualmente implementadas relacionadas ao encerramento da sessão do usuário.

Os testes automatizados validam:

- encerramento correto da sessão;
- redirecionamento para a tela de login;
- invalidação da autenticação;
- proteção das rotas administrativas após o logout.

Durante a execução dos casos **CT-035** e **CT-036**, não foram identificados defeitos funcionais ou vulnerabilidades de segurança relacionadas ao processo de logout.

Esta matriz mantém rastreabilidade entre os casos de teste automatizados e as funcionalidades avaliadas, refletindo o comportamento atual da aplicação.