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
import redux from "./img/redux.png"
import styled from "./img/styled.png"
import sass from "./img/sass.png"
import less from "./img/less.jpg"
import vue from "./img/vue.png"
import Zoom from "react-reveal/Zoom";
import {
  StyledAll,
  StyledDiv,
  StyledTotalSkills,
  StyledSkill
} from "./styles";

export default function About() {
  return (
    <StyledAll id={"skills"}>
      <StyledDiv>
        <h2>SKILLS</h2>
        <div></div>
      </StyledDiv>

      <Zoom>
        <StyledTotalSkills>
            <StyledSkill>
                <p>Html</p>
                <img src={html} alt="stack-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Css</p>
                <img src={css} alt="stack-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Javascript</p>
                <img src={javascript} alt="stack-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Styled components</p>
                <img src={styled} alt="stack-icon" className="s-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Less</p>
                <img src={less} alt="stack-icon" className="s-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Sass</p>
                <img src={sass} alt="stack-icon" className="s-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>React</p>
                <img src={react} alt="stack-icon" className="s-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Redux</p>
                <img src={redux} alt="stack-icon" className="s-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Vue</p>
                <img src={vue} alt="stack-icon" className="s-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Node</p>
                <img src={node} alt="stack-icon" className="s-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Postgres</p>
                <img src={postgres} alt="stack-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Sqlite3</p>
                <img src={sqlite} alt="stack-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Python</p>
                <img src={python} alt="stack-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Shopify</p>
                <img src={shopify} alt="stack-icon" />
            </StyledSkill>
            <StyledSkill>
                <p>Git</p>
                <img src={git} alt="stack-icon" />
            </StyledSkill>
        </StyledTotalSkills>
      </Zoom>
    </StyledAll>
  );
}
