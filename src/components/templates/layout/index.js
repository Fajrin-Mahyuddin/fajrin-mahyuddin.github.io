import React from "react";
import { Box, Flex, Image, Link as NavLink } from "@chakra-ui/react";
import logo from "assets/images/new-logo.svg";
import { Link } from "react-router-dom";
import { ContainerMaxWidth, Menu } from "components";

const Layouts = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Box>{children}</Box>
    </main>
  );
};

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "transparent",
        position: "absolute",
        width: "100%",
      }}
    >
      <ContainerMaxWidth>
        <Flex justifyContent="space-between" py="20px">
          <NavLink as={Link} to="/">
            <Image src={logo} alt="new logo" />
          </NavLink>
          <Menu />
        </Flex>
      </ContainerMaxWidth>
    </nav>
  );
};

export default Layouts;
