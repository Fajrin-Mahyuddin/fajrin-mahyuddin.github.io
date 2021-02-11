import React from "react";
import { Text, Title } from "components";

const CardSlider = () => {
  return (
    <div className="slider-text">
      <Title className="font-large-xxx text-bold">I'm Fajrin</Title>
      <Text className="font-large-xx">
        Create your website and <br /> application here
      </Text>
      <button className="medium-btn default-btn mr-05">Need a wesite</button>
      <button className="medium-btn primary-btn ">Hire Me</button>
    </div>
  );
};

export default CardSlider;
