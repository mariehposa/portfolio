import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import {
  StyledP,
  StyledBack,
  StyledBackAll,
  StyledFlippy,
  StyledFront,
  StyledBackTotal
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
      style={{ width: "350px", height: "300px", margin: "5px", }}
    >
      <StyledFront>
        <img
          src={projectImage}
          alt={imageAlt}
          style={{ width: "320px", height: "280px" }}
        />
      </StyledFront>
      <StyledBackTotal>
        <StyledBackAll>
          <h3 style={{ color: "#000", }}>{projectTitle}</h3>
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
      </StyledBackTotal>
    </StyledFlippy>

    // <div class="flip-card">
    //   <div class="flip-card-inner">
    //     <div class="flip-card-front">
    //       <img src={projectImage} alt={imageAlt} style={{ width: "320px", height: "280px" }} />
    //     </div>
    //     <div class="flip-card-back">
    //       <StyledBackAll>
    //         <h3 style={{ color: "#000", }}>{projectTitle}</h3>
    //         <StyledP>{projectStack}</StyledP>
    //         <div>
    //           <StyledBack>
    //             <a href={websiteLink} target="_blank" rel="noopener noreferrer" title="View Site">
    //               <img src={domain} alt="domain logo" />
    //               <p>View Live Site</p>
    //             </a>
    //           </StyledBack>
    //           <StyledBack>
    //             <a href={gitHubLink} target="_blank" rel="noopener noreferrer" title="github profile">
    //               <img src={github} alt="github logo" />
    //               <p>View on github</p>
    //             </a>
    //           </StyledBack>
    //         </div>
    //       </StyledBackAll>
    //     </div>
    //   </div>
    // </div>
  );
}; 