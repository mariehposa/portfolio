import React from "react";
import ecommerce from "./img/ecommerce.jpg";
import hackathon from "./img/hackathon.jpg";
import restaurant from "./img/restaurant.jpg";
import savory from "./img/savory.jpg";
import Fade from "react-reveal/Fade";
import { StyledAll, StyledDiv, StyledSlide, CustomSlide } from "./styles";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

export default function Project() {
  return (
    <StyledAll id={"project"}>
      <StyledDiv>
        <h2> UPCOMING PROJECTS </h2>
        <div></div>
      </StyledDiv>

      <Fade cascade>
        <div>
          <CustomSlide {...properties}>
            <StyledSlide>
              <img src={ecommerce} alt="E-commerce" />
              <h3>E-commerce Site</h3>
              <dt>2019</dt>
            </StyledSlide>
            <StyledSlide>
              <img src={savory} alt="savory" />
              <h3>Savory</h3>
              <dt>2019</dt>
            </StyledSlide>
            <StyledSlide>
              <img src={hackathon} alt="hackathon" />
              <h3>Hackathon Portal</h3>
              <dt>2020</dt>
            </StyledSlide>
            <StyledSlide>
              <img src={restaurant} alt="restaurant" />
              <h3>Chen Restaurant</h3>
              <dt>2020</dt>
            </StyledSlide>
          </CustomSlide>
        </div>
      </Fade>
    </StyledAll>
  );
}