import React from "react";
import { StyledNav, StyledLink } from './styles';
import "../../App.css";

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
      <StyledLink activeClassName='selected' className='fancyLink'  onClick={() => navigate("header")} exact to="/">
        HOME
      </StyledLink>
      <StyledLink  activeClassName='selected' className='fancyLink' onClick={() => navigate("about")} to="/about">
        ABOUT
      </StyledLink>
      <StyledLink activeClassName='selected'  onClick={() => navigate("portfolio")} to="/portfolio">
        PORTFOLIO
      </StyledLink>
      <StyledLink activeClassName='selected'  onClick={() => navigate("project")} to="/project">
        PROJECTS
      </StyledLink>
      <StyledLink activeClassName='selected'  onClick={() => navigate("contact")} to="/contact">
        CONTACT
      </StyledLink>
    </StyledNav>
  );
}
