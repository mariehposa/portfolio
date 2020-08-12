import React from "react";
import "../../App.css";
import css from "./img/css.png"
import html from "./img/html.png"
import git from "./img/git.png"
import javascript from "./img/javascript.png"
import node from "./img/node.png"
import postgres from "./img/postgres.png"
import python from "./img/python.png"
import react from "./img/react.png"
import sqlite from "./img/sqlite.png"
import shopify from "./img/shopify.png"
import Zoom from "react-reveal/Zoom";
import {
  StyledAll,
  StyledDiv,
  StyledTotalSkills
} from "./styles";

export default function About() {
  return (
    <StyledAll id={"skills"}>
      <StyledDiv>
        <h2>SKILLS</h2>
        <div></div>
      </StyledDiv>

      <Zoom top cascade>
        <StyledTotalSkills>
            <div>
                <p>Html</p>
                <img src={html} />
            </div>
            <div>
                <p>Css</p>
                <img src={css} />
            </div>
            <div>
                <p>Javascript</p>
                <img src={javascript} />
            </div>
            <div>
                <p>React</p>
                <img src={react} />
            </div>
            <div>
                <p>Node</p>
                <img src={node} />
            </div>
            <div>
                <p>Postgres</p>
                <img src={postgres} />
            </div>
            <div>
                <p>Sqlite3</p>
                <img src={sqlite} />
            </div>
            <div>
                <p>Python</p>
                <img src={python} />
            </div>
            <div>
                <p>Shopify</p>
                <img src={shopify} />
            </div>
            <div>
                <p>Git</p>
                <img src={git} />
            </div>
        </StyledTotalSkills>
      </Zoom>
    </StyledAll>
  );
}
