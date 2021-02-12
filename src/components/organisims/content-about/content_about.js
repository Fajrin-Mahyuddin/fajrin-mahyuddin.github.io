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
        <ContentStack />
        <button className="primary-btn medium-btn p-1-2 mt-5 mr-1">
          See Details
        </button>
        <button className="danger-btn medium-btn p-1-2">Download CV</button>
      </div>
    </>
  );
};

export default ContentAbout;
