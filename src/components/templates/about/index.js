import React from "react";
import { ContentAbout } from "components";
import { bg_about } from "assets";
import { Image } from "components";

const About = () => {
  return (
    <div className="p-5-0 bg-about" id="about">
      <div className="content align-center">
        <ContentAbout />
      </div>
      <Image
        className="mr-3"
        // className="batik"
        src={bg_about}
        alt="https://undraw.co"
      />
    </div>
  );
};

export default About;
