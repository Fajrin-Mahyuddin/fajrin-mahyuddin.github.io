import React from "react";
import { Text, Title, Links, ContentStack } from "components";
import { idea } from "assets";

const ContentAbout = () => {
  return (
    <>
      <div className="me-profile">
        {/* <Image className="mr-3" src={idea} alt="https://undraw.co" /> */}
      </div>
      <div>
        <Title className="text-bold font-large-xx">About Me</Title>
        <Text>
          I'm from Majene City and was born in there, now I'm 27 years old. I
          have passion in programming languages espesially web programming and
          has 2 years experience work on web application project. Today I work
          as javascript front end developer at Pallaka studio for a years. But
          sometimes I provide Back End code using PHP and nodeJS. For more
          information could be found below :
        </Text>
        <div className="profile-item">Phone : 085-395-547-094</div>
        <div className="profile-item">
          Github :{" "}
          <a href="https://github.com/Fajrin-Mahyuddin">
            https://github.com/Fajrin-Mahyuddin
          </a>
        </div>
        <div className="profile-item">
          Linkedin :{" "}
          <a href="https://www.linkedin.com/in/fajrin-mahyuddin-a65111131/">
            https://www.linkedin.com/in/fajrin-mahyuddin-a65111131/
          </a>
        </div>
        <ContentStack />
        <a
          href="https://drive.google.com/uc?export=download&id=1sJBA6Jb_gjX5VrATXe0mS9PkqSB22NhD"
          className="medium-btn danger-btn mt-2 p-1-2 about-btn"
        >
          Download CV
        </a>
      </div>
    </>
  );
};

export default ContentAbout;
