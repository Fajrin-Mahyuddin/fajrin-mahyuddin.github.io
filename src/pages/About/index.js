import React from "react";
import { Layout } from "antd";
import { Navbar } from "components";

const About = () => {
  return (
    <Layout>
      <Navbar />
      <div style={{ marginTop: "100px" }}>About Me</div>
    </Layout>
  );
};

export default About;
