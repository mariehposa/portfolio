import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  background: #1b242f;
  border-bottom: 3px solid #04c2c9;
  padding: 0.5rem;
  padding-left: 4rem;

  @media only screen and (max-width: 500px)  {
    display:none;

    > div {
      flex-direction: column;
      display: flex;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: auto 0;
  margin-left: 1.6rem;
  color: white;

  &:hover {
    color: #e31b6d;
    transition: 0.3s ease-out;
  }

  &.active {
    color: #e31b6d;
  }
`;

