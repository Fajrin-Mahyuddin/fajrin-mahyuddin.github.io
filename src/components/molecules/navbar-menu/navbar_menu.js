import React from "react";
import { Link } from "react-scroll";

const NavbarMenu = () => {
  return (
    <div className="navbar-menu">
      <Link
        activeClass="active"
        className="link-btn p-1-2 mrl-1"
        to="main"
        smooth={true}
        spy={true}
        duration={700}
      >
        Main
      </Link>
      <Link
        activeClass="active"
        className="link-btn p-1-2 mrl-1"
        to="about"
        smooth={true}
        spy={true}
        duration={700}
      >
        About
      </Link>
      <Link
        activeClass="active"
        className="link-btn p-1-2 mrl-1"
        to="service"
        smooth={true}
        spy={true}
        duration={700}
      >
        Service
      </Link>
      <Link
        className="link-btn p-1-2 mrl-1"
        to="project"
        smooth={true}
        spy={true}
        duration={700}
      >
        Project
      </Link>
    </div>
  );
};
export default NavbarMenu;
