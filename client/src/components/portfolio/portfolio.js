import React from "react";
import { Route } from "react-router-dom";
import split from "./images/splitTheBill.png";
import chef from "./images/chefPortfolio.png";
import hairCare from "./images/hairCare.png";
import rickMorty from "./images/rickAndMorty.png";
import starwars from "./images/starwars.png";
import essentialism from "./images/essentialism.png";
import {
  StyledAll,
  StyledNav,
  StyledDiv,
  StyledLink,
  StyledTotal
} from "./styles";

import CustomFlippy from "./projectFlippy";

export default function Portfolio() {
  return (
    <StyledAll id={"portfolio"}>
      <StyledDiv>
        <h2> PORTFOLIO </h2>
        <div></div>
      </StyledDiv>
      <StyledNav>
        <StyledLink to="/">ALL</StyledLink>
        <StyledLink to="/portfolio/html">HTML</StyledLink>
        <StyledLink to="/portfolio/react">REACT</StyledLink>
        <StyledLink to="/portfolio/redux">REDUX</StyledLink>
        <StyledLink to="/portfolio/node">NODE</StyledLink>
      </StyledNav>
      <StyledTotal>
        <Route exact path="/" component={All} />
        <Route path="/portfolio/html" component={Html} />
        <Route path="/portfolio/react" component={EReact} />
        <Route path="/portfolio/redux" component={Redux} />
        <Route path="/portfolio/node" component={Node} />
      </StyledTotal>
    </StyledAll>
  );
}

function All() {
  return (
    <>
      <Html /> <EReact /> <Redux /> <Node />
    </>
  );
}

export function Html() {
  return (
    <>
      <CustomFlippy
        projectImage={chef}
        imageAlt="Chef-Portfolio"
        projectTitle="Chef Portfolio"
        projectStack="HTML and CSS"
        gitHubLink="https://github.com/mariehposa/chef-portfolio"
      />
    </>
  );
}

export function EReact() {
  return (
    <>
      <CustomFlippy
        projectImage={starwars}
        imageAlt="StarWars"
        projectTitle="StarWars"
        projectStack="React and pure Javascript"
        gitHubLink="https://github.com/mariehposa/Sprint-Challenge-React-Wars"
      />
      <CustomFlippy
        projectImage={rickMorty}
        imageAlt="Rick and Morty"
        projectTitle="Rick and Morty"
        projectStack="React and pure Javascript"
        gitHubLink="https://github.com/mariehposa/Sprint-Challenge-Single-Page-Apps"
      />
      <CustomFlippy
        projectImage={hairCare}
        imageAlt="Hair Care"
        projectTitle="Hair Care"
        projectStack="React and pure Javascript"
        gitHubLink="https://github.com/mariehposa/HairCare/tree/hosting"
      />
    </>
  );
}

export function Redux() {
  return (
    <>
      <CustomFlippy
        projectImage={split}
        imageAlt="Split the Bill"
        projectTitle="Split the Bill"
        projectStack="React Redux"
        gitHubLink="https://github.com/mariehposa/Split-the-bill"
      />
    </>
  );
}

export function Node() {
  return (
    <>
      <CustomFlippy
        projectImage={essentialism}
        imageAlt="Essentialism"
        projectTitle="Essentialism"
        projectStack="Node.js and PostgreSQL"
        gitHubLink="https://github.com/essentialism-11-2019/mariam-server"
      />
    </>
  );
}
