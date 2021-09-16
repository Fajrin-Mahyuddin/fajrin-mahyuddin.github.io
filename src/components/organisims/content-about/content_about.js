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
        <Title className="text-bold text-center pt-55 font-large-xx">About Me</Title>
        <Text className="justify-text f-16">
          My name is Fajrin Mahyuddin, 27 years old and I have been working as
          front end web developher for two year. I have done several project web
          application, web news and landing page from some client like
          goverment, organization even personal. As front end developher,
          javascript become my favorite programming language and has been using
          a few library javascript like reactJS, React Native, jquery, even
          express in my project. I provide service web development with main
          concern is how to provide good solution according to your goals so it
          will saving your time and unwanted-future budget. <br />
          In case you need some request service and offers, I would glad to help
          you. so feel free to contact me through information below:
        </Text>
        <div className="profile-item">Phone : 085-395-547-094</div>
        <div className="profile-item">Mail : fajrin.mahyuddin@icloud.com</div>
        <div className="profile-item">
          Github :{" "}
          <a href="https://github.com/Fajrin-Mahyuddin" target="_blank">
            https://github.com/Fajrin-Mahyuddin
          </a>
        </div>
        <div className="profile-item">
          Linkedin :{" "}
          <a
            href="https://www.linkedin.com/in/fajrin-mahyuddin-a65111131"
            target="_blank"
          >
            https://www.linkedin.com/in/fajrin-mahyuddin-a65111131
          </a>
        </div>
        <ContentStack />
        <a
          href="https://drive.google.com/uc?export=download&id=1SZXRyxt3Huqff0qCkSAhO9F1PdXgj-iN"
          className="medium-btn danger-btn mt-2 p-1-2 about-btn"
        >
          Download CV
        </a>
      </div>
    </>
  );
};

export default ContentAbout;
