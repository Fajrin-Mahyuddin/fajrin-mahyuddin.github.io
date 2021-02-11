import React from "react";
import { Title, Text, Image } from "components";
import Service01 from "assets/images/service-01.svg";
import Service02 from "assets/images/service-02.svg";
import { Col, Row } from "antd";

const Services = () => {
  return (
    <div className="bg-white" id="service">
      <div className="container-content text-center p-55-0">
        <Title className="text-bold font-large-xx">Services</Title>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, quis!
          Excepturi accusamus blanditiis dolorem facilis?
        </Text>

        <Row>
          <Col flex="2">
            <Image
              width="99%"
              className="ml-05"
              src={Service01}
              alt="servces-01"
            />
          </Col>
          <Col flex="2">
            <Image
              className="ml-05"
              width="99%"
              src={Service02}
              alt="servces-02"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Services;
