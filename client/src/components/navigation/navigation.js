import React from "react";
import { StyledNav, StyledLink } from "./styles";
import "../../App.css";
import { DarkMode } from "../hooks/darkMode";
import { settings } from './logo/settings';

export default function Navigation() {
  const [darkMode, setDarkMode] = DarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  function navigate(elementId) {
    let offsetTop = document.getElementById(elementId).offsetTop;
    window.scrollTo({
      top: offsetTop - 100,
      behavior: "smooth"
    });
  }

  return (
    <StyledNav>
      <StyledLink onClick={() => navigate("header")} exact to="/">
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
      <div>
        <div>
          <img src={settings} alt="mode" />
        </div>
      </div>
    </StyledNav>
  );
}
