# GitHub Blog

Projeto desenvolvido como parte do módulo **HTTP e performance** do curso Ignite (2023) da Rocketseat.

## 📋 Sobre o projeto

O desafio consistia em construir um blog pessoal fictício, a partir de um layout no Figma. É utilizado a API do GitHub para obter issues de um repositório, e usá-la como posts.

### Preview

![preview-01](/.github/preview-01.png)
![preview-02](/.github/preview-02.png)
![preview-03](/.github/preview-03.png)
![preview-04](/.github/preview-04.png)

## 🛠️ Tecnologias e conceitos aplicados

- **React.js** – biblioteca principal para construção da interface
- **Vite** – bundler moderno e rápido para desenvolvimento
- **TypeScript** – tipagem estática para maior segurança
- **Styled Components** – estilização com CSS-in-JS
- **Axios** – cliente HTTP para consumo de API
- **React Hook Form + Zod** – para formulários com validação eficiente
- **React Icons** – biblioteca de ícones.
- **Boas práticas de performance** – uso de `useMemo`, `useCallback`
- **Context API com useContextSelector** – acesso otimizado ao estado global
- **React Markdown** - conversão de markdown em HTML
- **React Syntax Highlighter** - destaque de blocos de código

## Como rodar a aplicação

Antes de tudo, crie um arquivo .env na raiz do projeto, e adicione as seguintes variáveis:

```bash
VITE_GITHUB_USERNAME="seu-nome-de-usuário-do-github"
VITE_GITHUB_REPO="seu-repositório-contendo-as-issues"
```

Por fim, rode a aplicação:

```bash
npm run dev
```
