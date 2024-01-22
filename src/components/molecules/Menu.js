import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { NavItem } from "components";

const Menu = () => {
  return (
    <Flex alignItems="center" gap={10}>
      <Box>
        <NavItem path="about" label="About" />
      </Box>
      <Box>
        <NavItem path="work" label="Experience" />
      </Box>
      <Box>
        <NavItem path="project" label="Project" />
      </Box>
      <Box>
        <NavItem path="contact" label="Contact" />
      </Box>
    </Flex>
  );
};

export default Menu;
