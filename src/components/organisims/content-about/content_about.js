import React from "react";
import { Text, Title, Image, ContentStack } from "components";
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          nihil laborum minus vitae quibusdam deleniti ab voluptatum officiis
          obcaecati! Sed quos similique fugiat repellat accusantium consectetur
          praesentium at. Quaerat quia earum doloremque doloribus illum
          architecto consectetur nostrum commodi fuga. Molestiae.
        </Text>
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
        <button className="danger-btn medium-btn mt-5 p-1-2">
          Download CV
        </button>
      </div>
    </>
  );
};

export default ContentAbout;
