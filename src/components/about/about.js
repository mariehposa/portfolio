import React from "react";
import SkillBar from "react-skillbars";
import fast from "./img/001-fast.png";
import responsive from "./img/002-responsive.png";
import intuitive from "./img/004-lightbulb.png";
import dynamic from "./img/006-startup.png";
import owner from "./img/owner.jpg";
import "../../App.css";
import Zoom from 'react-reveal/Zoom';
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
  HexaBottom
} from "./styles";

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
  "bar": "#04C2C9",
  "title": {
    "text": "#ffffff",
    "background": "#04c2c9"
  }
};

export default function About() {
  return (
    <StyledAll id={"about"}>
      <StyledDiv>
        <h2>ABOUT</h2>
        <div></div>
      </StyledDiv>

      <Zoom top cascade>
      <StyledProps>
        <div>
          <div>
            <HexaTop />
            <HexaMid>
              <img src={fast} alt="fast" />
            </HexaMid>
            <HexaBottom />
            <StyledText>Fast</StyledText>
            <p>Fast load times and lag free interaction, my highest priority.</p>
          </div>
          <div>
          <HexaTop />
            <HexaMid>
            <img src={responsive} alt="responsive" />
            </HexaMid>
            <HexaBottom />
            <StyledText>Responsive</StyledText>
            <p>My layouts will work on any device, big or small.</p>
          </div>
        </div>
        <div>
          <div>
          <HexaTop />
            <HexaMid>
            <img src={intuitive} alt="intuitive" />
            </HexaMid>
            <HexaBottom />
            <StyledText>Intuitive</StyledText>
            <p>My layouts will work on any device, big or small.</p>
          </div>
          <div>
          <HexaTop />
            <HexaMid>
            <img src={dynamic} alt="dynamic" />
            </HexaMid>
            <HexaBottom />
            <StyledText>Dynamic</StyledText>
            <p>
              Websites don't have to be static, I love making pages come to life.
            </p>
          </div>
        </div>
      </StyledProps>
      </Zoom>

      <Zoom>
      <AboutMe>
        <StyledMe>
          <img src={owner} alt="mariam adedeji" />
          <StyledText>Who's this lady?</StyledText>
          <p>
            I'm a <span>full-stack Web developer</span> with excellent
            communication skills and vast experience. I like to create beautiful
            and engaging user interfaces with HTML5, CSS3, javascript, Front end
            frameworks like react, nodes and postgres for backend.{" "}
            <span>Let's make something special... Cheers!!!</span>
          </p>
        </StyledMe>
        <StyledChart>
          <SkillBar skills={skills} colors={colors} />
        </StyledChart>
      </AboutMe>
        </Zoom>
      
    </StyledAll>
  );
}
