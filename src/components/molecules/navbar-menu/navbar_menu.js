import React from "react";
import { Links } from "components";

const NavbarMenu = () => {
  return (
    <div className="navbar-menu">
      <Links className="link-btn p-1-2 mrl-1">Home</Links>
      <Links className="link-btn p-1-2 mrl-1">Blog</Links>
      <Links className="link-btn p-1-2 mrl-1">About Me</Links>
      <Links className="link-btn p-1-2 mrl-1">Galery</Links>
    </div>
  );
};
export default NavbarMenu;
