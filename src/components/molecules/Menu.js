import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { NavItem } from "components";

const Menu = () => {
  return (
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
  );
};

export default Menu;
