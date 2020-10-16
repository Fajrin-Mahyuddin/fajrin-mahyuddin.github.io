import React from "react";
import { HumanSvg } from "assets";
import { CardSlider, Image } from "components";

const ContentSlider = () => {
  return (
    <div className="absolute-content container-content">
      <div className="content align-center">
        <CardSlider />
        <Image className="height-600" src={HumanSvg} alt="https://undraw.co" />
      </div>
    </div>
  );
};

export default ContentSlider;
