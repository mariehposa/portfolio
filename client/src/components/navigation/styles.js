import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.div`
  display: flex;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background: #1b242f;
  border-bottom: 3px solid #04c2c9;
  padding-left: 4rem;
  z-index: 99;
`;

export const  StyledLink = styled(Link)`
    text-decoration: none;
    margin: auto 0;
    margin-left: 1.6rem;
    color: white;
`
