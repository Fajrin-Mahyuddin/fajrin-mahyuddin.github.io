import { HStack, Text, Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import { MedalIcon } from "components";
import React from "react";

const SkillsBoard = ({ label, icon }) => {
  return (
    <Box mb="30px">
      <HStack
        bgColor="#fff"
        border="2px solid #f0f0f0"
        borderRadius=".6rem"
        p="10px"
        fontSize="1.15rem"
        fontWeight="bold"
      >
        {icon}
        <Text>{label}</Text>
      </HStack>
      <Grid templateColumns="repeat(3, 1fr)" gap="20px" mt="20px">
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <GridItem
              key={i}
              as={Flex}
              justifyContent="flex-start"
              alignItems="center"
              gap="10px"
            >
              <MedalIcon />
              <Text>Javascript</Text>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SkillsBoard;
