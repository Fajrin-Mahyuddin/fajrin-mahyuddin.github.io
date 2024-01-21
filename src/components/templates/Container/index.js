import { Box } from "@chakra-ui/react";
import React from "react";

const ContainerMaxWidth = ({ children }) => {
  return (
    <Box width="100%" maxW="1460px" marginInline="auto" px="20px">
      {children}
    </Box>
  );
};

export default ContainerMaxWidth;
