import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src="/path/to/image-0.png" />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AutoplaySlider>
);

export default function () {
    return (
        <div>
            
        </div>
    );
}