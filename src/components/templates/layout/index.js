import React from "react";
import { Layout } from "antd";
import { Navbar } from "components";
const { Footer, Content } = Layout;

const Layouts = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <Content>{children}</Content>
      <Footer className="text-center">
        {new Date().getFullYear()} &copy; Fajrin Mahyuddin
      </Footer>
    </Layout>
  );
};

export default Layouts;
