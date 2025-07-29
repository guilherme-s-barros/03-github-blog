import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  input[type="search"] {
    background: ${(props) => props.theme.color.base.input};
    border: 1px solid ${(props) => props.theme.color.base.border};
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    width: 100%;
    height: 3.125rem;

    &::placeholder {
      color: ${(props) => props.theme.color.base.label};
    }
  }
`
