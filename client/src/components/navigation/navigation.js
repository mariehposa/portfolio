import React from "react";
import { StyledNav, StyledLink } from './styles';

export default function Navigation() {
  function navigate(elementId) {
    let offsetTop = document.getElementById(elementId).offsetTop;
    window.scrollTo({
      top: offsetTop - 100,
      behavior: "smooth"
    });
  }

  return (
    <StyledNav>
      <StyledLink onClick={() => navigate("header")} to="/">
        HOME
      </StyledLink>
      <StyledLink onClick={() => navigate("about")} to="/about">
        ABOUT
      </StyledLink>
      <StyledLink onClick={() => navigate("portfolio")} to="/portfolio">
        PORTFOLIO
      </StyledLink>
      <StyledLink onClick={() => navigate("project")} to="/project">
        PROJECTS
      </StyledLink>
      <StyledLink onClick={() => navigate("contact")} to="/contact">
        CONTACT
      </StyledLink>
    </StyledNav>
  );
}
