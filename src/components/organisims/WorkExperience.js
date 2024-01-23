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
      "Full-time remote Frontend Developer at a private company in Singapore, responsible for creating the UI for various projects. I use NextJS and Typescript as the main frameworks to ensure the successful completion of our projects",
  },
  {
    company: "Pallaka Studio",
    period: "Sep 2019 - Okt 2021",
    position: "Fulltime Remote Frontend Developer",
    color: "#E6AB35",
    description:
      "Working as a frontend developer, I handle all UI projects. Leveraging Docker, ReactJS, and Javascript as our core technologies, we ensure the successful completion of every project",
  },
  {
    company: "PT Cipta Sejati Revolution",
    period: "Jan 2016 - Aug 2016",
    position: "Fullstack Developer",
    color: "#F26440",
    description:
      "As the full-stack position at this company, my responsibilities span both the backend and frontend even server, along with providing IT support. I utilize PHP and jQuery to successfully complete our projects, taking charge of various tasks across the entire development spectrum.",
  },
];

const WorkExperience = () => {
  return (
    <Box id="work-experience" bgColor="#f8f7f1">
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
