import React from "react";
import owner from "./img/owner.jpg";
import "../../App.css";
import Zoom from "react-reveal/Zoom";
import {
  StyledAll,
  StyledDiv,
  AboutMe,
  StyledMe,
} from "./styles";

export default function About() {
  return (
    <StyledAll id={"about"}>
      <StyledDiv>
        <h2>ABOUT ME</h2>
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
