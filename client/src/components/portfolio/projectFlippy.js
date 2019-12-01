import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import {
  StyledP,
  StyledBack,
  StyledBackAll
} from "./styles";
import github from "./images/github.png";
import domain from "./images/domain.png";

export default ({
  projectImage,
  imageAlt,
  projectTitle,
  projectStack,
  gitHubLink,
  websiteLink
}) => {
  return (
    <Flippy
      flipOnHover={true}
      flipDirection="horizontal"
      style={{ width: "350px", height: "300px" }}
      // style={{ width: "300px", height: "300px" }}
    >
      <FrontSide>
        <img
          src={projectImage}
          alt={imageAlt}
          style={{ width: "320px", height: "280px" }}
          // style={{ width: "270px", height: "280px" }}
        />
      </FrontSide>
      <BackSide>
        <StyledBackAll>
          <h3>{projectTitle}</h3>
          <StyledP>{projectStack}</StyledP>
          <div>
            <StyledBack>
              <a href={websiteLink} target="_blank" rel="noopener noreferrer" title="View Site">
                <img src={domain} alt="domain logo" />
                <p>View Live Site</p>
              </a>
            </StyledBack>
            <StyledBack>
              <a href={gitHubLink} target="_blank" rel="noopener noreferrer" title="github profile">
                <img src={github} alt="github logo" />
                <p>View on github</p>
              </a>
            </StyledBack>
          </div>
        </StyledBackAll>
      </BackSide>
    </Flippy>
  );
};
