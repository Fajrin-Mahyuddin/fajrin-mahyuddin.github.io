import React from "react";
import { Text, Title } from "components";

const CardSlider = () => {
  return (
    <div className="slider-text">
      <Title className="font-large-xxx text-bold">I'm Fajrin</Title>
      <Text className="font-large-xx">
        Create your website and <br /> application here
      </Text>
      <a
        href="mailto:fajrin.mahyuddin01@gmail.com?subject=Website Proposal Project.&cc=fajrin.telkom12@gmail.com"
        className="medium-btn primary-btn"
      >
        Need a wesite
      </a>
    </div>
  );
};

export default CardSlider;
