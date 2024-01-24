import React from "react";
import {
  CodeIcon,
  ContainerMaxWidth,
  MobileIcon,
  SkillsBoard,
} from "components";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const skills = [
  {
    skill: "Frontend Development",
    icon: CodeIcon,
    color: "#286F6C",
    stack: [
      "Javascript",
      "NextJS",
      "ReactJS",
      "Typescript",
      "Git",
      "Firebase",
      "Svelte",
      "Supabase",
      "Css",
      "Styled Component",
      "InertiaJS",
      "Sass / Less / Scss",
    ],
  },
  {
    skill: "Backend Development",
    icon: CodeIcon,
    color: "#E6AB35",
    stack: ["NodeJS", "ExpressJS", "Laravel", "RestAPI", "GraphQL", "MySQL"],
  },
  {
    skill: "Mobile Development",
    icon: MobileIcon,
    color: "#E6AB35",
    stack: ["React Native"],
  },
];

const AboutSection = () => {
  return (
    <Box as="section" id="about">
      <ContainerMaxWidth>
        <Flex
          py="5%"
          gap="5"
          flexDir={["column-reverse", "column-reverse", "row"]}
        >
          <Box flex="1 1 0px" padding="10px">
            {skills.map((item, i) => {
              return <SkillsBoard key={i} {...item} />;
            })}
          </Box>
          <Box flex="1 1 0px" padding="0 10px">
            <Heading mb="20px" textAlign={["center", "center", "left"]}>
              About Me
            </Heading>
            <Text lineHeight="2" fontSize="1.2rem">
              I am a Frontend Developer based in West Sulawesi. I have been
              working as a frontend developer for over 4 years, using JavaScript
              to create web UIs. I am excited to experiment with new UI designs
              and learn new technologies. Building UIs with different
              technologies is challenging, but it helps me enhance my skills.
            </Text>
            <br />
            <Text lineHeight="2" fontSize="1.2rem">
              I love working with both teams and individuals, as I am passionate
              about contributing ideas to our projects and enjoy sharing new
              things with others.
            </Text>
          </Box>
        </Flex>
      </ContainerMaxWidth>
    </Box>
  );
};

export default AboutSection;
