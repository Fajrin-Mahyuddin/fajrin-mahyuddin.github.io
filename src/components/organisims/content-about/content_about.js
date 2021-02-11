import React from "react";
import { Text, Title, Image, ContentStack } from "components";
import { me } from "assets";

const ContentAbout = () => {
  return (
    <>
      <div className="me-profile">
        <Image className="mr-3" src={me} alt="https://undraw.co" />
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
        <button className="btn-primary-transparent p-1-2 mr-1">
          See Details
        </button>
        <button className="btn-primary p-1-2">Download CV</button>
      </div>
    </>
  );
};

export default ContentAbout;
