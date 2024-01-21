import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ContainerMaxWidth } from "components/templates";
import project_one from "assets/images/project-1.png";
import project_two from "assets/images/project-2.png";

const ProjectSeciton = () => {
  return (
    <Box>
      <ContainerMaxWidth>
        <Flex py="3%" gap={12} flexDir="column">
          <Box textAlign="center">
            <Heading>Projects</Heading>
            <Text>Explore all projects</Text>
          </Box>
          <Box
            display="inline-block"
            whiteSpace="nowrap"
            width="100%"
            overflowX="auto"
            py="20px"
            sx={{
              "& div:not(:last-child)": {
                marginRight: "20px",
              },
            }}
          >
            {Array.from({ length: 2 }).map((_, i) => {
              return (
                <>
                  <Box
                    borderRadius="20px"
                    overflow="hidden"
                    display="inline-block"
                    // boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
                  >
                    <Image width="350px" src={project_one} alt="item scroll" />
                  </Box>
                  <Box
                    borderRadius="20px"
                    overflow="hidden"
                    display="inline-block"
                    // boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
                  >
                    <Image width="350px" src={project_two} alt="item scroll" />
                  </Box>
                </>
              );
            })}
          </Box>
        </Flex>
      </ContainerMaxWidth>
    </Box>
  );
};

export default ProjectSeciton;
