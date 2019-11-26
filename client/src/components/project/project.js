import React from "react";
import { Slide } from "react-slideshow-image";
import ecommerce from "./img/ecommerce.jpg";
import construction from "./img/construction.jpg";
import restaurant from "./img/restaurant.jpg";
import savory from "./img/savory.jpg";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

export default function Project() {
  return (
    <div>
      <p> Upcoming Projects </p>
      <Slide {...properties} style={{width: "40rem", height: "28rem"}}>
        <div>
          <img src={ecommerce} alt="E-commerce" style={{ height: "28rem" }} />
          <h3>e-commerce</h3>
          <dt>2019</dt>
        </div>
        <div>
          <img src={savory} alt="savory" style={{ height: "28rem" }} />
          <h3>Savory</h3>
          <dt>2019</dt>
        </div>
        <div>
          <img
            src={construction}
            alt="construction"
            style={{ height: "28rem" }}
          />
          <h3>Construction</h3>
          <dt>2020</dt>
        </div>
        <div>
          <img src={restaurant} alt="restaurant" style={{ height: "28rem" }} />
          <h3>Chen Restaurant</h3>
          <dt>2020</dt>
        </div>
      </Slide>
    </div>
  );
}
