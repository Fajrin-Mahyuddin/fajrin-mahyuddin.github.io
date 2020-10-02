import React from "react";
import AboutMe from "assets/images/about.svg";
import { ContentAbout, Image } from "components";

const About = () => {
  return (
    <div className="container-content p-4-0">
      <div className="content align-center">
        <Image className="mr-3 height-400" src={AboutMe} alt="About-Me" />
        <ContentAbout />
      </div>
    </div>
  );
};

export default About;
