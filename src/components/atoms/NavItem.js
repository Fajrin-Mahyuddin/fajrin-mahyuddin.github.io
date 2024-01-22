import React from "react";
import { Link as NavLink } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const NavItem = ({ label, path, setDrawerClose }) => {
  return (
    <NavLink
      fontWeight="medium"
      fontSize="1.2rem"
      userSelect="none"
      color="#0B2A3B"
      _hover={{ color: "#E6AB35" }}
      as={Link}
      to={path}
      offset={-81}
      onSetActive={() => setDrawerClose()}
      smooth={true}
      spy={true}
      duration={500}
      activeStyle={{
        color: "#e6ab35",
      }}
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
