import React from "react";
import {
  CodeIcon,
  ContainerMaxWidth,
  MobileIcon,
  SkillsBoard,
} from "components";
import { Box, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box as="section">
      <ContainerMaxWidth>
        <Flex my="5%" gap="5">
          <Box flex="1 1 0px" padding="10px">
            <SkillsBoard icon={<CodeIcon />} label="Frontedn Developer" />
            <SkillsBoard
              icon={<CodeIcon bgIcon="#e6ab35" />}
              label="Backend Developer"
            />
            <SkillsBoard
              icon={<MobileIcon bgIcon="#e6ab35" />}
              label="Backend Developer"
            />
          </Box>
          <Box flex="1 1 0px" padding="0 10px">
            <Heading mb="20px">About Me</Heading>
            <Text lineHeight="2">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </Text>
            <br />
            <Text lineHeight="2">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </Text>
          </Box>
        </Flex>
      </ContainerMaxWidth>
    </Box>
  );
};

export default AboutSection;
