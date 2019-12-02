import styled from "styled-components";

export const StyledAll = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #1B242F;

  @media (max-width: 500px) {
    padding: 5rem 1rem;
  }

  p {
      color: #8F9AA7;
      font-family: "Quicksand", sans-serif;
      font-size: .8rem;
    opacity: 0.6;
    margin-top: 3rem;

    span {
        color: #E31B6D;
    }
  }
`;

export const StyledDiv = styled.div`
    display: flex;
`

export const StyledA = styled.a`
    margin: 0 1rem;
    background: #262F38;
    padding: 1rem;
    text-decoration: none;
    text-align: center;
    align-items: center;

    @media (max-width: 500px) {
        padding: .5rem;
        margin: 0 .5rem;
  }

    &:hover {
        background: #04c2c9;
        padding: .8rem;
    }
`