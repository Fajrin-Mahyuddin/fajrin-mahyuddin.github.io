import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { NavbarMenu } from "components";
import { Image } from "components";
import { logo_navi, logo_white } from "assets";

const { Header } = Layout;

const Navbar = () => {
  const [bg, setBg] = useState("transparent");
  const [imgFile, setImgFile] = useState(logo_navi);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("oke scroll", window.scrollY);
      window.scrollY > 50 ? setBg("dark") : setBg("transparent");
      window.scrollY > 50 ? setImgFile(logo_white) : setImgFile(logo_navi);
    });
    return () => {
      window.removeEventListener("scroll", console.log("closed"));
    };
  });
  return (
    <Header className={`navbar ${bg}`}>
      <Image className="logo" src={imgFile} alt="my-logo" />
      <NavbarMenu />
    </Header>
  );
};

export default Navbar;
