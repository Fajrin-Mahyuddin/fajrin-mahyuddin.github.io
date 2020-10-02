import React from "react";
import Slide_bg from "assets/images/slide-bg.svg";

import { ContentSlider, Image } from "components";

const Sliders = () => {
  return (
    <div className="slider-container">
      <div className="slide-bg">
        <Image src={Slide_bg} alt="slider" />
      </div>
      <ContentSlider />
    </div>
  );
};

export default Sliders;
