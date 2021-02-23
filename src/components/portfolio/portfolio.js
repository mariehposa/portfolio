import React from "react";
import { Route } from "react-router-dom";
import split from "./images/splitTheBill.png";
import theShoppies from "./images/theShoppies.png";
import cryptoCracker from "./images/cryptoCracker.png";
import essentialism from "./images/essentialism.png";
import Fade from "react-reveal/Fade";
import hackton from "./images/hackton.png";
import foxyPiah from "./images/foxyPiah.png";
import dianeKroe from "./images/dianeKroe.jpg";
import {
  StyledAll,
  StyledNav,
  StyledDiv,
  StyledLink,
  StyledTotal,
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
        <StyledLink to="/portfolio/react">REACT</StyledLink>
        <StyledLink to="/portfolio/shopify">SHOPIFY</StyledLink>
        <StyledLink to="/portfolio/node">NODE</StyledLink>
      </StyledNav>
      <Fade bottom cascade>
        <StyledTotal>
          <Route
            exact
            path={["/", "/about", "/skills", "/contact", "/portfolio"]}
            component={All}
          />
          <Route path="/portfolio/react" component={EReact} />
          <Route path="/portfolio/shopify" component={Shopify} />
          <Route path="/portfolio/node" component={Node} />
        </StyledTotal>
      </Fade>
    </StyledAll>
  );
}

function All() {
  return (
    <>
      <EReact /> <Shopify /> <Node />
    </>
  );
}

export function EReact() {
  return (
    <>
      <CustomFlippy
        projectImage={theShoppies}
        imageAlt="The Shoppies"
        projectTitle="The Shoppies"
        projectStack="React Redux"
        gitHubLink="https://github.com/mariehposa/shopify-challenge"
        websiteLink="https://mariam-adedeji-shopify-challenge.netlify.app"
      />
      <CustomFlippy
        projectImage={cryptoCracker}
        imageAlt="CryptoCracker"
        projectTitle="Crypto Cracker"
        projectStack="React and pure Javascript"
        gitHubLink="https://github.com/mariehposa/dark-mode/tree/Mariam-Adedeji"
        websiteLink="https://dark-mode-six.vercel.app/"
      />
      <CustomFlippy
        projectImage={split}
        imageAlt="Split the Bill"
        projectTitle="Split the Bill"
        projectStack="React Redux"
        gitHubLink="https://github.com/mariehposa/Split-the-bill"
        websiteLink="https://split-the-bill.mariehposa.now.sh/"
      />
      <CustomFlippy
        projectImage={hackton}
        imageAlt="Hackathon portal"
        projectTitle="Hackathon portal"
        projectStack="React Redux"
        gitHubLink="https://github.com/LABS-EU3/hackton-frontend"
        websiteLink="https://hackton.co/"
      />
    </>
  );
}

export function Shopify() {
  return (
    <>
      <CustomFlippy
        projectImage={foxyPiah}
        imageAlt="Foxy Piah"
        projectTitle="Foxy Piah"
        projectStack="Shopify"
        gitHubLink="https://github.com/mariehposa/"
        websiteLink="https://munaf-custom-theme.myshopify.com/"
      />
      <CustomFlippy
        projectImage={dianeKroe}
        imageAlt="Diane Kroe"
        projectTitle="Diane Kroe"
        projectStack="Shopify"
        gitHubLink="https://github.com/mariehposa/"
        websiteLink="https://dianekroe.com/"
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
