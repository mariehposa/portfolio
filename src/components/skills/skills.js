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
                <p>Html</p>
                <img src={} />
            </div>
            <div>
                <p>Css</p>
                <img src={} />
            </div>
            <div>
                <p>Javascript</p>
                <img src={} />
            </div>
            <div>
                <p>React</p>
                <img src={} />
            </div>
            <div>
                <p>Node</p>
                <img src={} />
            </div>
            <div>
                <p>Postgres</p>
                <img src={} />
            </div>
            <div>
                <p>Sqlite3</p>
                <img src={} />
            </div>
            <div>
                <p>Python</p>
                <img src={} />
            </div>
            <div>
                <p>Liquid</p>
                <img src={} />
            </div>
            <div>
                <p>Git</p>
                <img src={} />
            </div>
          </div>
        </StyledProps>
      </Zoom>
    </StyledAll>
  );
}
