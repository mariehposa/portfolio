import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledAll = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  text-align: center;
`;

export const StyledDiv = styled.div`
  line-height: 0.5rem;
  align-self: center;

  h2 {
    font-size: 2.5rem;
    font-family: "Changa", sans-serif;
    color: #444649;
  }

  div {
    width: 5rem;
    height: 0.2rem;
    margin-left: 3rem;
    background: #444649;
  }
`;

export const StyledNav = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: auto 0;
  color: #444649;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;

  &:hover {
    color: white;
    background: #e31b6d;
    transition: 0.1s ease-out;
  }

  &.active {
    color: #e31b6d;
  }
`;

export const StyledTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledP = styled.p`
  color: #e31b6d;
`;

export const StyledBackAll = styled.div`
display: flex;
flex-direction: column;

div {
  display: flex;
  justify-content: space-between;
}
`

export const StyledBack = styled.div`
  padding-top: 1rem;
  border: 1px solid #e31b6d;
  width: 40%;
  margin-top: 2rem;
  border-radius: .3rem;
  align-self: flex-end;

  &:hover {
    background: #e31b6d;
    color: white;
  }

  a {
    text-decoration: none;

    p {
      margin-left: 0.7rem;
      color: #000000;
      text-align: center;

      &:hover {
        color: #ffffff;
      }
    }

    img {
      margin-left: .8rem
    }
  }
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: #000000;

  &:hover {
    color: #04c2c9;
  }
`