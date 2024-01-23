import { Flex } from "@chakra-ui/react";
import React from "react";

const CostumeDrawer = ({ isOpen, children }) => {
  return (
    <Flex
      overflow="hidden"
      pos={["absolute", "absolute", "static"]}
      flexDir={["column", "column", "row"]}
      alignItems="center"
      justifyContent="center"
      bgColor={["#f8f7f1", "#f8f7f1", "transparent"]}
      gap={[5, 5, 10]}
      top={0}
      left={0}
      transform={[
        isOpen ? "translateX(0)" : "translateX(-100vw)",
        isOpen ? "translateX(0)" : "translateX(-100vw)",
        "translateX(0)",
      ]}
      bottom={0}
      transition=".3s all"
      height={["100dvh", "100dvh", "auto"]}
      width={["100%", "100%", "auto"]}
    >
      {children}
    </Flex>
  );
};

export default CostumeDrawer;
