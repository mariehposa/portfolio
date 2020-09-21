import styled from "styled-components";

export const StyledAll = styled.div`
  padding: 4rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #1B242F;

  @media (max-width: 500px) {
    padding: 4rem 1rem;
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
    border-radius: 2px;

    @media (max-width: 500px) {
        padding: .5rem;
        margin: 0 .5rem;
  }

    &:hover {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
        box-shadow: inset 0 0 0 10px #04c2c9;
    }
`