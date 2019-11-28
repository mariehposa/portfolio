import React from "react";
import SkillBar from "react-skillbars";
import fast from "./img/001-fast.png";
import responsive from "./img/002-responsive.png";
import intuitive from "./img/004-lightbulb.png";
import dynamic from "./img/006-startup.png";
import owner from "./img/owner.jpg";
import { StyledAll, StyledDiv, StyledProps } from "./styles";

const skills = [
  {
    type: "HTML",
    level: 90
  },
  {
    type: "CSS",
    level: 80
  },
  {
    type: "Javascript",
    level: 70
  },
  {
    type: "React",
    level: 75
  },
  {
    type: "Redux",
    level: 70
  },
  {
    type: "Node",
    level: 65
  },
  {
    type: "Sqlite3",
    level: 60
  },
  {
    type: "Postgres",
    level: 50
  }
];

const colors = {
  bar: {
    hue: 32,
    saturation: 50,
    level: {
      minimum: 30,
      maximum: 70
    }
  },
  title: {
    text: {
      hue: 45,
      saturation: {
        minimum: 30,
        maximum: 70
      },
      level: 50
    },
    background: {
      hue: 30,
      saturation: {
        minimum: 30,
        maximum: 70
      },
      level: {
        minimum: 0,
        maximum: 50
      }
    }
  }
};

export default function About() {
  return (
    <StyledAll id={"about"}>
      <StyledDiv>
        <h2>ABOUT</h2>
        <div></div>
      </StyledDiv>
      <StyledProps>
        <div>
          <img src={fast} alt="fast" />
          <h3>Fast</h3>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </div>
        <div>
          <img src={responsive} alt="responsive" />
          <h3>Responsive</h3>
          <p>My layouts will work on any device, big or small.</p>
        </div>
        <div>
          <img src={intuitive} alt="intuitive" />
          <h3>Intuitive</h3>
          <p>My layouts will work on any device, big or small.</p>
        </div>
        <div>
          <img src={dynamic} alt="dynamic" />
          <h3>Dynamic</h3>
          <p>
            Websites don't have to be static, I love making pages come to life.
          </p>
        </div>
      </StyledProps>

      <div>
        <div>
          <img src={owner} alt="mariam adedeji" />
          <h3>Who's this lady?</h3>
          <p>
            I'm a full-stack Web developer with excellent communication skills
            and vast experience. I like to create beautiful and engaging user
            interfaces with HTML5, CSS3, javascript, Front end frameworks like
            react, nodes and postgres for backend. Let's make something
            special... Cheers!!!
          </p>
        </div>
        <div>
          <SkillBar skills={skills} colors={colors} />
        </div>
      </div>
    </StyledAll>
  );
}
