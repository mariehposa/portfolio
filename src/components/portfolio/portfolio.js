import React from "react";
import { Route } from "react-router-dom";
import split from "./images/splitTheBill.png";
import chef from "./images/chefPortfolio.png";
import hairCare from "./images/hairCare.png";
import rickMorty from "./images/rickAndMorty.png";
import cryptoCracker from "./images/cryptoCracker.png";
import flora from "./images/flora.png";
import robot from "./images/robot.png";
import essentialism from "./images/essentialism.png";
import Fade from 'react-reveal/Fade';
import hackton from "./images/hackton.png"
import {
  StyledAll,
  StyledNav,
  StyledDiv,
  StyledLink,
  StyledTotal
} from "./styles";

import CustomFlippy from "./ProjectFlippy";
import "../../App.css";

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
      <Fade bottom cascade>
        <StyledTotal>
          <Route exact path="/" component={All} />
          <Route exact path="/portfolio" component={All} />
          <Route path="/portfolio/html" component={Html} />
          <Route path="/portfolio/react" component={EReact} />
          <Route path="/portfolio/redux" component={Redux} />
          <Route path="/portfolio/node" component={Node} />
        </StyledTotal>
      </Fade>
    </StyledAll>
  );
}

function All() {
  return (
    <>
      <Redux /> <EReact /> <Node /> <Html />
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
        websiteLink="https://goofy-perlman-9a4318.netlify.com/"
      />
    </>
  );
}

export function EReact() {
  return (
    <>
      <CustomFlippy
        projectImage={flora}
        imageAlt="flora landing page"
        projectTitle="Flora landing page"
        projectStack="React and pure Javascript"
        gitHubLink="https://github.com/mariehposa/flora-landing-page"
        websiteLink="https://flora-landing-page.now.sh/"
      />
      <CustomFlippy
        projectImage={robot}
        imageAlt="Monster Robots"
        projectTitle="Monster Robots"
        projectStack="React and pure Javascript"
        gitHubLink="https://github.com/mariehposa/monsters-robot/tree/master"
        websiteLink="https://mariehposa.github.io/monsters-robot/"
      />
      <CustomFlippy
        projectImage={hairCare}
        imageAlt="Hair Care"
        projectTitle="Hair Care"
        projectStack="React and pure Javascript"
        gitHubLink="https://github.com/mariehposa/HairCare/tree/hosting"
        websiteLink="https://sleepy-thompson-659f81.netlify.com/"
      />
      <CustomFlippy
        projectImage={rickMorty}
        imageAlt="Rick and Morty"
        projectTitle="Rick and Morty"
        projectStack="React and pure Javascript"
        gitHubLink="https://github.com/mariehposa/Sprint-Challenge-Single-Page-Apps"
        websiteLink="https://react-redux-kktstb7je.now.sh/"
      />
      <CustomFlippy
        projectImage={cryptoCracker}
        imageAlt="CryptoCracker"
        projectTitle="Crypto Cracker"
        projectStack="React and pure Javascript"
        gitHubLink="https://github.com/mariehposa/dark-mode/tree/Mariam-Adedeji"
        websiteLink="https://dark-mode-six.vercel.app/"
      />
    </>
  );
}

export function Redux() {
  return (
    <>
      <CustomFlippy
        projectImage={hackton}
        imageAlt="Hackathon portal"
        projectTitle="Hackathon portal"
        projectStack="React Redux"
        gitHubLink="https://github.com/LABS-EU3/hackton-frontend"
        websiteLink="https://hackton.co/"
      />
      <CustomFlippy
        projectImage={split}
        imageAlt="Split the Bill"
        projectTitle="Split the Bill"
        projectStack="React Redux"
        gitHubLink="https://github.com/mariehposa/Split-the-bill"
        websiteLink="https://split-the-bill.mariehposa.now.sh/"
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
        gitHubLink="https://github.com/mariehposa/essentialism"
        websiteLink="https://documenter.getpostman.com/view/9533421/SW7Z4UGG?version=latest"
      />
    </>
  );
}
