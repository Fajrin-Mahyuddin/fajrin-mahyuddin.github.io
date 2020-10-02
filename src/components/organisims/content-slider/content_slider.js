import React from "react";
import human from "assets/images/human.svg";
import { CardSlider, Image } from "components";

const ContentSlider = () => {
  return (
    <div className="absolute-content container-content">
      <div className="content align-center">
        <CardSlider />
        <Image className="height-600" src={human} alt="human" />
      </div>
    </div>
  );
};

export default ContentSlider;
