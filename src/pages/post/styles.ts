import styled from 'styled-components'

export const PostHeader = styled.header`
  margin-top: -5.5rem;
  background: ${(props) => props.theme.color.base.profile};
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  h1 {
    ${(props) => props.theme.text.heading.titleL};
    color: ${(props) => props.theme.color.base.title};
    margin: 1.25rem 0 0.5rem;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    ${(props) => props.theme.text.component.link};
    color: ${(props) => props.theme.color.brand.primary};
    text-transform: uppercase;

    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.color.base.label};
    }

    span {
      color: ${(props) => props.theme.color.base.subtitle};
    }
  }
`

export const PostBody = styled.div`
  margin: 2.5rem 2rem;

  img {
    width: 100%;
    border-radius: 0.5rem;
  }

  h2 {
    ${(props) => props.theme.text.heading.titleM};
    color: ${(props) => props.theme.color.base.subtitle};
    margin: 2rem 0 1rem;
  }

  h3 {
    ${(props) => props.theme.text.heading.titleS};
    color: ${(props) => props.theme.color.base.subtitle};
    margin: 1rem 0;
  }

  p + p,
  pre + p,
  pre + pre,
  p + ul,
  p + ol,
  p + dl,
  ul + p,
  ol + p,
  dl + p {
    margin-top: 1rem;
  }

  img + em {
    ${(props) => props.theme.text.body.regularS};
    color: ${(props) => props.theme.color.base.span};
  }

  ul {
    margin-left: 1rem;
  }

  li + li {
    margin-top: 0.5rem;
  }

  a {
    color: ${(props) => props.theme.color.brand.primary};
  }

  /* Inline code */
  code[node] {
    background: ${(props) => props.theme.color.base.post};
    padding: 0 0.25rem;
    border-radius: 0.25rem;
  }

  /* Block code */
  pre > div {
    background: ${(props) => props.theme.color.base.post} !important;
  }
`
