import React from "react";
import { Box, Flex, Image, Link as NavLink } from "@chakra-ui/react";
import logo from "assets/images/new-logo.svg";
import { Link } from "react-router-dom";
import { ContainerMaxWidth } from "components";

const Layouts = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Box bg="salmon">{children}</Box>
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
        <Flex justifyContent="space-between" p="20px">
          <NavLink as={Link} to="/">
            <Image src={logo} alt="new logo" />
          </NavLink>
          <Flex alignItems="center" gap={10}>
            <Box>
              <NavItem to="/about" label="About" />
            </Box>
            <Box>
              <NavItem to="/experience" label="Experience" />
            </Box>
            <Box>
              <NavItem to="/project" label="Project" />
            </Box>
            <Box>
              <NavItem to="/contact" label="Contact" />
            </Box>
          </Flex>
        </Flex>
      </ContainerMaxWidth>
    </nav>
  );
};

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

export default Layouts;
