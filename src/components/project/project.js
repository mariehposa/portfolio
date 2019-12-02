import React from "react";
import { Slide } from "react-slideshow-image";
import ecommerce from "./img/ecommerce.jpg";
import construction from "./img/construction.jpg";
import restaurant from "./img/restaurant.jpg";
import savory from "./img/savory.jpg";
import Fade from 'react-reveal/Fade';
import { StyledAll, StyledDiv, StyledSlide } from './styles';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

export default function Project() {
  return (
    <StyledAll id={'project'}>
      <StyledDiv>
      <h2> UPCOMING PROJECTS </h2>
      <div></div>
      </StyledDiv>

      <Fade cascade>
      <Slide {...properties} 
      style={{width: "39rem", height: "28rem", margin: "4rem 0" }} >
      {/* style={{width: "20rem", height: "20rem", margin: "4rem 0" }}> */}
        <StyledSlide>
          <img src={ecommerce} alt="E-commerce"/>
          <h3>E-commerce Website</h3>
          <dt>2019</dt>
        </StyledSlide>
        <StyledSlide>
          <img src={savory} alt="savory"/>
          <h3>Savory</h3>
          <dt>2019</dt>
        </StyledSlide>
        <StyledSlide>
          <img
            src={construction}
            alt="construction"
          />
          <h3>Construction Website</h3>
          <dt>2020</dt>
        </StyledSlide>
        <StyledSlide>
          <img src={restaurant} alt="restaurant"/>
          <h3>Chen Restaurant</h3>
          <dt>2020</dt>
        </StyledSlide>
      </Slide>
      </Fade>
    </StyledAll>
  );
}
