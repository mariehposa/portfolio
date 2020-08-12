import React from "react";
import "../../App.css";
import css from "./img/css.png"
import html from "./img/html.png"
import git from "./img/git.png"
import javascript from "./img/javascript.png"
import liquid from "./img/liquid.png"
import postgres from "./img/postgres.png"
import python from "./img/python.png"
import react from "./img/react.png"
import sqlite from "react-reveal/sqlite";
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
