import React from "react";
import { Layout } from "antd";
import { NavbarMenu } from "components";
import { Image } from "components";
import logo from "assets/logo/my_logo.svg";
const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="navbar">
      <Image className="logo" src={logo} alt="my-logo" />
      <NavbarMenu />
    </Header>
  );
};

export default Navbar;
