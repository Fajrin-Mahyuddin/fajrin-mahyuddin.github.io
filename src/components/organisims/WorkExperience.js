import { Box, Flex, Heading } from "@chakra-ui/react";
import { WorkExperienceItem } from "components/molecules";
import { ContainerMaxWidth } from "components/templates";
import React from "react";

const experiences = [
  {
    company: "Zodiac Solution, PTE Ltd",
    period: "Okt 2021 - Preset",
    position: "Fulltime Remote Frontend Developer",
    color: "#286F6C",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
  },
  {
    company: "Pallaka Studio",
    period: "Sep 2019 - Okt 2021",
    position: "Fulltime Remote Frontend Developer",
    color: "#E6AB35",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
  },
  {
    company: "PT Cipta Sejati Revolution",
    period: "Jan 2016 - Aug 2016",
    position: "Fullstack Developer",
    color: "#F26440",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
  },
];

const WorkExperience = () => {
  return (
    <Box bgColor="#f8f7f1">
      <ContainerMaxWidth>
        <Flex py="3%" flexDir="column" gap={12}>
          <Heading textAlign="center">Work Experience</Heading>
          <Box>
            {experiences.map((item, i) => {
              return <WorkExperienceItem key={i} {...item} />;
            })}
          </Box>
        </Flex>
      </ContainerMaxWidth>
    </Box>
  );
};

export default WorkExperience;
