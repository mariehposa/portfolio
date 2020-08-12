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
  StyledTotalSkills,
  StyledSkills
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
            <StyledSkill>
                <p>Html</p>
                <img src={html} />
            </StyledSkill>
            <StyledSkill>
                <p>Css</p>
                <img src={css} />
            </StyledSkill>
            <StyledSkill>
                <p>Javascript</p>
                <img src={javascript} />
            </StyledSkill>
            <StyledSkill>
                <p>React</p>
                <img src={react} />
            </StyledSkill>
            <StyledSkill>
                <p>Node</p>
                <img src={node} />
            </StyledSkill>
            <StyledSkill>
                <p>Postgres</p>
                <img src={postgres} />
            </StyledSkill>
            <StyledSkill>
                <p>Sqlite3</p>
                <img src={sqlite} />
            </StyledSkill>
            <StyledSkill>
                <p>Python</p>
                <img src={python} />
            </StyledSkill>
            <StyledSkill>
                <p>Shopify</p>
                <img src={shopify} />
            </StyledSkill>
            <StyledSkill>
                <p>Git</p>
                <img src={git} />
            </StyledSkill>
        </StyledTotalSkills>
      </Zoom>
    </StyledAll>
  );
}
