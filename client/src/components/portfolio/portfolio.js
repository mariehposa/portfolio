import React from "react";
import { Route } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import split from "./images/splitTheBill.png";
import chef from "./images/chefPortfolio.png";
import hairCare from "./images/hairCare.png";
import rickMorty from "./images/rickAndMorty.png";
import starwars from "./images/starwars.png";
import essentialism from "./images/essentialism.png";
import github from "./images/github.png";
import {
  StyledAll,
  StyledNav,
  StyledDiv,
  StyledLink,
  StyledTotal,
  StyledP,
  StyledBack,
  StyledA
} from "./styles";

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
      <Flippy
        flipOnHover={true}
        flipDirection="horizontal"
        style={{ width: "350px", height: "300px" }}
      >
        <FrontSide>
          <img
            src={chef}
            alt="chef-portfolio"
            style={{ width: "320px", height: "280px" }}
          />
        </FrontSide>
        <BackSide>
          <h3>Chef Portfolio</h3>
          <StyledP>Html and Css</StyledP>
          <StyledA href="/a">View site</StyledA>
          <StyledBack>
            <a href="https://github.com/mariehposa" title="github profile">
              <img src={github} alt="github logo" />
              <p>View on github</p>
            </a>
          </StyledBack>
        </BackSide>
      </Flippy>
    </>
  );
}

export function EReact() {
  return (
    <>
      <Flippy
        flipOnHover={true}
        flipDirection="horizontal"
        style={{ width: "350px", height: "300px" }}
      >
        <FrontSide>
          <img
            src={starwars}
            alt="starwars"
            style={{ width: "320px", height: "280px" }}
          />
        </FrontSide>
        <BackSide>
          <h3>Starwars</h3>
          <StyledP>React and pure Javascript</StyledP>
          <StyledA href="/a">View site</StyledA>
          <StyledBack>
            <a href="https://github.com/mariehposa" title="github profile">
              <img src={github} alt="github logo" />
              <p>View on github</p>
            </a>
          </StyledBack>
        </BackSide>
      </Flippy>

      <Flippy
        flipOnHover={true}
        flipDirection="horizontal"
        style={{ width: "350px", height: "300px" }}
      >
        <FrontSide>
          <img
            src={rickMorty}
            alt="Rick and Morty"
            style={{ width: "320px", height: "280px" }}
          />
        </FrontSide>
        <BackSide>
          <h3>Rick & Morty</h3>
          <StyledP>React and pure Javascript</StyledP>
          <StyledA href="/a">View site</StyledA>
          <StyledBack>
            <a href="https://github.com/mariehposa" title="github profile">
              <img src={github} alt="github logo" />
              <p>View on github</p>
            </a>
          </StyledBack>
        </BackSide>
      </Flippy>

      <Flippy
        flipOnHover={true}
        flipDirection="horizontal"
        style={{ width: "350px", height: "300px" }}
      >
        <FrontSide>
          <img
            src={hairCare}
            alt="Hair Care"
            style={{ width: "320px", height: "280px" }}
          />
        </FrontSide>
        <BackSide>
          <h3>Hair Care</h3>
          <StyledP>React and pure Javascript</StyledP>
          <StyledA href="/a">View site</StyledA>
          <StyledBack>
            <a href="https://github.com/mariehposa" title="github profile">
              <img src={github} alt="github logo" />
              <p>View on github</p>
            </a>
          </StyledBack>
        </BackSide>
      </Flippy>
    </>
  );
}

export function Redux() {
  return (
    <>
      <Flippy
        flipOnHover={true}
        flipDirection="horizontal"
        style={{ width: "350px", height: "300px" }}
      >
        <FrontSide>
          <img
            src={split}
            alt="Split the Bill"
            style={{ width: "320px", height: "280px" }}
          />
        </FrontSide>
        <BackSide>
          <h3>Split the Bill</h3>
          <StyledP>React Redux</StyledP>
          <StyledA href="/a">View site</StyledA>
          <StyledBack>
            <a href="https://github.com/mariehposa" title="github profile">
              <img src={github} alt="github logo" />
              <p>View on github</p>
            </a>
          </StyledBack>
        </BackSide>
      </Flippy>
    </>
  );
}

export function Node() {
  return (
    <>
      <Flippy
        flipOnHover={true}
        flipDirection="horizontal"
        style={{ width: "350px", height: "300px" }}
      >
        <FrontSide>
          <img
            src={essentialism}
            alt="Essentialism"
            style={{ width: "320px", height: "280px" }}
          />
        </FrontSide>
        <BackSide>
          <h3>Essentialism</h3>
          <StyledP>Node.js and Postgres</StyledP>
          <StyledA href="/a">View site</StyledA>
          <StyledBack>
            <a href="https://github.com/mariehposa" title="github profile">
              <img src={github} alt="github logo" />
              <p>View on github</p>
            </a>
          </StyledBack>
        </BackSide>
      </Flippy>
    </>
  );
}
