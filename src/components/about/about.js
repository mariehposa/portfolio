import React from "react";
import fast from "./img/001-fast.png";
import responsive from "./img/002-responsive.png";
import intuitive from "./img/004-lightbulb.png";
import dynamic from "./img/006-startup.png";
import owner from "./img/owner.jpg";
import "../../App.css";
import Zoom from "react-reveal/Zoom";
import {
  StyledAll,
  StyledDiv,
  StyledProps,
  AboutMe,
  StyledMe,
  StyledChart,
  StyledText,
  HexaTop,
  HexaMid,
  HexaBottom,
} from "./styles";

export default function About() {
  return (
    <StyledAll id={"about"}>
      <StyledDiv>
        <h2>ABOUT</h2>
        <div></div>
      </StyledDiv>

      <Zoom>
        <AboutMe>
          <StyledMe>
            <img src={owner} alt="mariam adedeji" />
          </StyledMe>
          <StyledMe>
            <p>
              Hi, my name is <span>Mariam Adedeji</span>. I'm a full-stack web
              developer with excellent communication skills, systematic and
              high-quality product spirit. I have two years of experience in
              building, designing, testing, and delivering front-end and
              back-end web applications using different programming languages
              and technologies.{" "}
              <span>Let's make something special... Cheers!!!</span>
            </p>
          </StyledMe>
        </AboutMe>
      </Zoom>
    </StyledAll>
  );
}
