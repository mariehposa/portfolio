import React from "react";
import { Slide } from "react-slideshow-image";
import ecommerce from "./img/ecommerce.png";
import construction from "./img/construction.jpg";
import restaurant from "./img/restaurant.jpg";
import savory from "./img/savory.jpg";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false
};

export default function Project() {
  return (
    <div>
      <Slide {...properties}>
        <div>
          <img src={ecommerce} alt="E-commerce" />
        </div>
        <div>
          <img src={construction} alt="construction" />
        </div>
        <div>
          <img src={restaurant} alt="restaurant" />
        </div>
        <div>
          <img src={savory} alt="savory" />
        </div>
      </Slide>
    </div>
  );
}
