import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledAll = styled.div`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledNav = styled.div`
  width: 100%;
  background: #1b242f;
  border-bottom: 3px solid #04c2c9;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: auto 0;
  color: white;

  &:hover {
    color: #e31b6d;
    transition: 0.3s ease-out;
  }

  &.active {
   color: #e31b6d;
  }
`;