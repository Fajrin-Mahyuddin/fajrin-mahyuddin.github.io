import React from "react";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

const WorkExperienceItem = ({
  company,
  period,
  position,
  description,
  color = "#286F6C",
}) => {
  return (
    <Grid
      pos="relative"
      gridTemplateColumns={["auto 1fr", "auto 1fr", "45% 5% auto"]}
      gridTemplateAreas={[
        `"second third third" "second first first"`,
        `"second third third" "second first first"`,
        `"first second third"`,
      ]}
      gap="20px"
    >
      <Box gridArea="first" pb="20px">
        <Heading fontSize="1.5rem">{company}</Heading>
        <Text fontSize="1rem">{period}</Text>
      </Box>
      <Flex justifyContent="center" gridArea="second" pos="relative">
        <Box
          width="45px"
          height="45px"
          borderRadius="45px"
          bgColor="#f8f7f1"
          padding="10px"
          border="5px solid #0B2A3B"
          zIndex={1}
          pos="relative"
          _after={{
            content: `""`,
            position: "absolute",
            height: "25px",
            width: "25px",
            backgroundColor: color,
            left: 0,
            top: 0,
            margin: "auto",
            bottom: 0,
            right: 0,
            borderRadius: "100%",
          }}
        />
        <Box
          pos="absolute"
          width="5px"
          height="100%"
          bgColor="#0B2A3B"
          top="0"
          left="50%"
          bottom="0"
          transform="translateX(-50%)"
        />
      </Flex>
      <Box gridArea="third" pb="20px">
        <Heading fontSize="1.5rem" mb="20px">
          {position}
        </Heading>
        <Text dangerouslySetInnerHTML={{ __html: description }} />
      </Box>
    </Grid>
  );
};

export default WorkExperienceItem;
