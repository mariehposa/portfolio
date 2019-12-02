import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledAll = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  text-align: center;

  @media (max-width: 800px) {
    padding: 5rem 1rem;
  }

  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }
`;

export const StyledDiv = styled.div`
  line-height: 0.5rem;
  align-self: center;

  h2 {
    font-size: 2.5rem;
    font-family: "Changa", sans-serif;
    color: #000000;
  }

  div {
    width: 5rem;
    height: 0.2rem;
    margin-left: 3rem;
    background: #04c2c9;

    @media (max-width: 800px) {
      margin-left: 4rem;
    }

    @media (max-width: 500px) {
      margin-left: 3rem;
    }
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

  @media (max-width: 500px) {
    padding: 1rem 0.5rem;
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
`;

export const StyledBack = styled.div`
  padding-top: 1rem;
  border: 1px solid #e31b6d;
  width: 40%;
  margin-top: 2rem;
  border-radius: 0.3rem;
  align-self: flex-end;

  &:hover {
    background: #e31b6d;
    color: white;
  }

  @media (max-width: 500px) {
    width: 41%;
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

      @media (max-width: 500px) {
        margin-left: 0;
      }
    }

    img {
      margin-left: 0.8rem;

      @media (max-width: 500px) {
        margin-left: 0;
      }
    }
  }
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: #000000;

  &:hover {
    color: #04c2c9;
  }
`;
