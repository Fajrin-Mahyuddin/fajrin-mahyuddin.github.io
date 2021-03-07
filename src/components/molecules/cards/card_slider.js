import React from "react";
import { Text, Title } from "components";

const CardSlider = () => {
  return (
    <div className="slider-text">
      <Title className="font-large-xxx text-bold">I'm Fajrin</Title>
      <Text className="font-large-xx">Front End Developher</Text>
      <a
        href="mailto:fajrin.mahyuddin01@gmail.com?subject=Website Proposal Project.&cc=fajrin.telkom12@gmail.com"
        className="medium-btn primary-btn mr-05"
      >
        Need a wesite
      </a>
      <a
        href="mailto:fajrin.mahyuddin01@gmail.com?subject=Hiring Proposal.&cc=fajrin.telkom12@gmail.com"
        className="medium-btn default-btn"
      >
        Hire Me
      </a>
    </div>
  );
};

export default CardSlider;
