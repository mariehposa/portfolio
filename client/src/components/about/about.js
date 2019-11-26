import React from "react";
import SkillBar from 'react-skillbars';
import fast from "./img/001-fast.png";
import responsive from "./img/002-responsive.png";
import intuitive from "./img/004-lightbulb.png";
import dynamic from "./img/006-startup.png";
import owner from "./img/owner.jpg";

const skills = [
  {
    "type": "Java",
    "level": 100
  },
  {
    "type": "React",
    "level": 85
  },
  {
    "type": "Javascript",
    "level": 75
  },
  {
    "type": "Spring",
    "level": 50
  },
  {
    "type": "Docker",
    "level": 25
  },
  {
    "type": "HTML",
    "level": 20
  },
  {
    "type": "NoSQL",
    "level": 0
  }
]

const colors = {
  "bar": {
    "hue": 32,
    "saturation": 50,
    "level": {
      "minimum": 30,
      "maximum": 70
    }
  },
  "title": {
    "text": {
      "hue": 45,
      "saturation": {
        "minimum": 30,
        "maximum": 70
      },
      "level": 50
    },
    "background": {
      "hue": 30,
      "saturation": {
        "minimum": 30,
        "maximum": 70
      },
      "level": {
        "minimum": 0,
        "maximum": 50
      }
    }
  }
}

export default function About() {
  return (
    <div>
      <h2>ABOUT</h2>
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

      <div>
        <div>
          <img src={owner} alt="mariam adedeji" />
          <h3>Who's this lady?</h3>
          <p>
            I'm a full-stack Web developer
            with excellent communication skills and vast experience. I like to
            create beautiful and engaging user interfaces with HTML5, CSS3,
            javascript, Front end frameworks like react, nodes and postgres for backend. Let's make something special... Cheers!!!
          </p>
        </div>
        <div>
          <SkillBar skills={skills} colors={colors} />
        </div>
      </div>
    </div>
  );
}
