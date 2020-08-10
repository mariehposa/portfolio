import React from "react";
import "../../App.css";
import Zoom from "react-reveal/Zoom";
import {
  StyledAll,
  StyledDiv,
  StyledProps
} from "./styles";

export default function About() {
  return (
    <StyledAll id={"skills"}>
      <StyledDiv>
        <h2>SKILLS</h2>
        <div></div>
      </StyledDiv>

      <Zoom top cascade>
        <StyledProps>
          <div>
            <div>
                <p>Html 5</p>
                <img src={} />
            </div>
          </div>
        </StyledProps>
      </Zoom>
    </StyledAll>
  );
}
