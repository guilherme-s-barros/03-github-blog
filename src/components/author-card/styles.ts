import styled from 'styled-components'

export const AuthorCardContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin-top: -5.5rem;
  background: ${(props) => props.theme.color.base.profile};
  border-radius: 0.75rem;
  padding: 2rem 2rem 2rem 2.5rem;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  img {
    width: 148px;
    height: 148px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      ${(props) => props.theme.text.heading.titleL};
      color: ${(props) => props.theme.color.base.title};
    }

    a {
      ${(props) => props.theme.text.component.link};
      color: ${(props) => props.theme.color.brand.primary};
      text-transform: uppercase;

      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  p {
    margin: 0.5rem 0 1.5rem;
  }
`

export const Info = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  > div {
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
