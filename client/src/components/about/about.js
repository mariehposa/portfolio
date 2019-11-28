import React from "react";
import SkillBar from "react-skillbars";
import fast from "./img/001-fast.png";
import responsive from "./img/002-responsive.png";
import intuitive from "./img/004-lightbulb.png";
import dynamic from "./img/006-startup.png";
import owner from "./img/owner.jpg";
import { StyledAll, StyledDiv, StyledProps, AboutMe, StyledMe, StyledChart, StyledText } from "./styles";

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
          <StyledText>Fast</StyledText>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </div>
        <div>
          <img src={responsive} alt="responsive" />
          <StyledText>Responsive</StyledText>
          <p>My layouts will work on any device, big or small.</p>
        </div>
        <div>
          <img src={intuitive} alt="intuitive" />
          <StyledText>Intuitive</StyledText>
          <p>My layouts will work on any device, big or small.</p>
        </div>
        <div>
          <img src={dynamic} alt="dynamic" />
          <StyledText>Dynamic</StyledText>
          <p>
            Websites don't have to be static, I love making pages come to life.
          </p>
        </div>
      </StyledProps>

      <AboutMe>
        <StyledMe>
          <img src={owner} alt="mariam adedeji" />
          <StyledText>Who's this lady?</StyledText>
          <p>
            I'm a <span>full-stack Web developer</span> with excellent communication skills
            and vast experience. I like to create beautiful and engaging user
            interfaces with HTML5, CSS3, javascript, Front end frameworks like
            react, nodes and postgres for backend. <span>Let's make something
            special... Cheers!!!</span>
          </p>
        </StyledMe>
        <StyledChart>
          <SkillBar skills={skills} colors={colors} />
        </StyledChart>
      </AboutMe>
    </StyledAll>
  );
}
