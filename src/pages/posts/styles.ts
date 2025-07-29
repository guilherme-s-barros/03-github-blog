import styled from 'styled-components'

export const PostsContainer = styled.div`
  main {
    margin: 4.5rem 0;
  }
`

export const PostCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  h1 {
    ${(props) => props.theme.text.heading.titleS};
    color: ${(props) => props.theme.color.base.subtitle};
  }

  span {
    ${(props) => props.theme.text.body.regularS};
    color: ${(props) => props.theme.color.base.span};
  }
`

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  a {
    background: ${(props) => props.theme.color.base.post};
    border: 2px solid transparent;
    border-radius: 0.75rem;
    padding: 2rem;
    transition: border-color 0.2s;

    &:not(:focus):hover {
      border-color: ${(props) => props.theme.color.base.label};
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: first baseline;
      gap: 1rem;
      margin-bottom: 1.25rem;

      h2 {
        ${(props) => props.theme.text.heading.titleM};
        color: ${(props) => props.theme.color.base.title};
      }

      time {
        ${(props) => props.theme.text.body.regularS};
        color: ${(props) => props.theme.color.base.span};
        white-space: nowrap;
      }
    }

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
    }
  }
`
