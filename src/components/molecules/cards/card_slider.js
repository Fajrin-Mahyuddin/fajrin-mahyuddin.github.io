import React from "react";
import { Button } from "antd";
import { Text, Title } from "components";

const CardSlider = () => {
  return (
    <div>
      <Title className="font-large-xxx text-bold white">I'm Fajrin</Title>
      <Text className="font-large-xx white">
        Create your website and <br /> application here
      </Text>
      <Button className="button-transparent font-large p-2-4 mr-05">
        Need a wesite
      </Button>
      <Button className="button-white font-large p-2-4">Hire Me</Button>
    </div>
  );
};

export default CardSlider;
