import React from "react";
import Particles from "react-particles-js";
import '../../App.css';
import arrow from './img/arrow.png';
import { HeaderStyle, Styledtext, FancyDiv } from "./styles";
import Zoom from 'react-reveal/Zoom';

export default function Header() {
  return (
    <HeaderStyle id={"header"}>
      <Zoom>
        <Styledtext>
          <p>
            Hello, I'm
            <span> Mariam Adedeji.</span>
          </p>
          <p>I'm a full stack web developer.</p>
          <FancyDiv> 
            <span><p>View my work</p> 
            <img src={arrow} alt="arrow-down"/></span>
            </FancyDiv>
        </Styledtext>
      </Zoom>

      <Particles
        className="Particles"
        params={{
            "particles": {
                "number": {
                  "value": 100,
                  "density": {
                    "enable": false,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "star",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 4,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 30,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": false,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 7,
                  "direction": "bottom-right",
                  "random": false,
                  "straight": true,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 200,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
        }}
      />
    </HeaderStyle>
  );
}
