import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledAll = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
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
