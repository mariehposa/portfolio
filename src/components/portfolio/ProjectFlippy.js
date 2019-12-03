import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import {
  StyledP,
  StyledBack,
  StyledBackAll,
  StyledFlippy,
  StyledFront
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
    <StyledFlippy
      flipOnHover={true}
      flipDirection="horizontal"
      style={{ width: "350px", height: "300px" }}
    >
      <StyledFront>
        <img
          src={projectImage}
          alt={imageAlt}
          style={{ width: "320px", height: "280px" }}
        />
      </StyledFront>
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
    </StyledFlippy>
  );
};
