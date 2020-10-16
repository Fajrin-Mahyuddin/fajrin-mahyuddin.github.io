import React from "react";
import { Button } from "antd";
import { Text, Title, Image } from "components";
import { AboutSvg } from "assets";

const ContentAbout = () => {
  return (
    <>
      <Image
        className="mr-3 height-400"
        src={AboutSvg}
        alt="https://undraw.co"
      />
      <div style={{ marginTop: "-100px" }}>
        <Title className="text-bold font-large-xx">About Me</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          nihil laborum minus vitae quibusdam deleniti ab voluptatum officiis
          obcaecati! Sed quos similique fugiat repellat accusantium consectetur
          praesentium at. Quaerat quia earum doloremque doloribus illum
          architecto consectetur nostrum commodi fuga. Molestiae.
        </Text>
        <Button className="btn-primary-transparent p-1-2 mr-1">
          See Details
        </Button>
        <Button className="btn-primary p-1-2">Download CV</Button>
      </div>
    </>
  );
};

export default ContentAbout;
