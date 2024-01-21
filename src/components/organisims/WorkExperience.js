import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { ContainerMaxWidth } from "components/templates";
import React from "react";

const WorkExperience = () => {
  return (
    <Box bgColor="#f8f7f1">
      <ContainerMaxWidth>
        <Box>
          <Heading textAlign="center">Work Experience</Heading>
          <Grid
            className="grid_"
            pos="relative"
            gridTemplateColumns="repeat(3, auto)"
            gridTemplateAreas={[
              `"second third third" "second first first"`,
              `"second third third" "second first first"`,
              `"first second third"`,
            ]}
            gap="10px"
          >
            <Box bg="greenyellow" gridArea="first" pb="20px">
              <Heading>Zodiac Solution, PTE Ltd</Heading>
              <Text>Okt 2021 - Present</Text>
            </Box>
            <Box gridArea="second" pos="relative">
              <Box
                width="45px"
                height="45px"
                borderRadius="45px"
                bgColor="saddlebrown"
                padding="10px"
                border="5px solid #000"
                zIndex={1}
                pos="relative"
              />
              <Box
                pos="absolute"
                width="5px"
                height="100%"
                bgColor="red"
                top="0"
                left="50%"
                bottom="0"
                transform="translateX(-50%)"
              />
            </Box>
            <Box gridArea="third" bg="saddlebrown" pb="20px">
              <Heading>Frontend Developer</Heading>
              <Text>
                lorem1Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
          </Grid>
          <Grid
            className="grid_"
            pos="relative"
            gridTemplateColumns="repeat(3, auto)"
            gridTemplateAreas={[
              `"second third third" "second first first"`,
              `"second third third" "second first first"`,
              `"first second third"`,
            ]}
            gap="10px"
          >
            <Box bg="greenyellow" gridArea="first" pb="20px">
              <Heading>Zodiac Solution, PTE Ltd</Heading>
              <Text>Okt 2021 - Present</Text>
            </Box>
            <Box gridArea="second" pos="relative">
              <Box
                width="45px"
                height="45px"
                borderRadius="45px"
                bgColor="saddlebrown"
                padding="10px"
                border="5px solid #000"
                zIndex={1}
                pos="relative"
              />
              <Box
                pos="absolute"
                width="5px"
                height="100%"
                bgColor="red"
                top="0"
                left="50%"
                bottom="0"
                transform="translateX(-50%)"
              />
            </Box>
            <Box gridArea="third" bg="saddlebrown" pb="20px">
              <Heading>Frontend Developer</Heading>
              <Text>
                lorem1Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
          </Grid>
        </Box>
      </ContainerMaxWidth>
    </Box>
  );
};

export default WorkExperience;
