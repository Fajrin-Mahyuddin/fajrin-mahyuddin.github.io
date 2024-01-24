import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "components";

const Layouts = ({ children }) => {
  return (
    <Box pos="relative">
      <Navbar />
      <Box id="child">{children}</Box>
    </Box>
  );
};

export default Layouts;
