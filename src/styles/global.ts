import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 2px solid ${(props) => props.theme.color.brand.primary};
  }

  *::selection {
    background: ${(props) => props.theme.color.brand.primary};
    color: ${(props) => props.theme.color.base.background};
  }

  body {
    background: ${(props) => props.theme.color.base.background};
  }

  body, input, button, textarea {
    ${(props) => props.theme.text.body.regularM};
    color: ${(props) => props.theme.color.base.text};
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: grayscale;
  }

  a {
    ${(props) => props.theme.text.component.link};
    color: ${(props) => props.theme.color.brand.primary};
    text-decoration: none;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`
