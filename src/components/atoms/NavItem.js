import React from "react";
import { Link as NavLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavItem = ({ label, path }) => {
  return (
    <NavLink
      fontWeight="medium"
      fontSize="1.2rem"
      color="#0B2A3B"
      _hover={{ color: "#E6AB35" }}
      as={Link}
      to={path}
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
