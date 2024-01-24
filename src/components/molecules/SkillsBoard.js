import {
  HStack,
  Text,
  Grid,
  GridItem,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { MedalIcon } from "components";
import React from "react";

const SkillsBoard = ({ skill, icon, color, stack }) => {
  const Ico = icon;
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
        <Ico bgIcon={color} />
        <Heading fontSize="1.2rem">{skill}</Heading>
      </HStack>
      <Grid
        templateColumns={[
          "repeat(2,auto)",
          "repeat(2, auto)",
          "repeat(3, auto)",
        ]}
        gap="10px"
        mt="20px"
      >
        {stack.map((item, i) => {
          return (
            <GridItem
              key={i}
              as={Flex}
              justifyContent="flex-start"
              alignItems="center"
              gap="10px"
            >
              <MedalIcon />
              <Text>{item}</Text>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SkillsBoard;
