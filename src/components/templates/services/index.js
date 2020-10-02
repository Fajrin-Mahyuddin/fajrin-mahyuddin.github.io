import React from "react";
import { Title, Text, Image } from "components";
import Service01 from "assets/images/service-01.svg";
import Service02 from "assets/images/service-02.svg";

const Services = () => {
  return (
    <div className="bg-white">
      <div className="container-content text-center p-4-0">
        <Title className="text-bold font-large-xx">Services</Title>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, quis!
          Excepturi accusamus blanditiis dolorem facilis?
        </Text>
        <div>
          <Image className="mr-2" src={Service01} alt="servces-01" />
          <Image src={Service02} alt="servces-02" />
        </div>
      </div>
    </div>
  );
};

export default Services;
