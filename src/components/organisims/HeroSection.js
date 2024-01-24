import React from "react";
import {
  Box,
  Center,
  VStack,
  Heading,
  Image,
  Text,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import me from "assets/images/profile.png";

import { ContainerMaxWidth, GitIcon, LinkedinIcon } from "components";

const HeroSection = () => {
  return (
    <Center
      as="section"
      width="auto"
      minH="100dvh"
      id="main"
      backgroundColor="#F8F7F1"
    >
      <ContainerMaxWidth>
        <Center gap="10%" flexDir={["column", "column", "row"]}>
          <Box width={["65%", "65%", "400px"]}>
            <Image src={me} alt="profile" />
          </Box>
          <VStack gap="20px">
            <VStack>
              <Text fontWeight="bold" fontSize="1.1rem">
                Hi ! I am
              </Text>
              <Heading lineHeight="50px" fontSize="62px">
                Fajrin
              </Heading>
              <Text fontSize="36px" fontWeight="bold">
                Frontend Developer
              </Text>
            </VStack>
            <HStack>
              <Button
                as="a"
                href="./files/cv-fajrin-mahyuddin.pdf"
                target="_blank"
                fontSize="18px"
                fontWeight="400"
                bgColor="#F26440"
                color="#fff"
                _hover={{}}
                _active={{}}
              >
                Download CV
              </Button>
              <Button
                as="a"
                minW="150px"
                fontSize="18px"
                fontWeight="400"
                bgColor="#E6AB35"
                color="#fff"
                _hover={{}}
                _active={{}}
                href="mailto:fajrin.mahyuddin01@gmail.com"
              >
                Hire me
              </Button>
            </HStack>
            <HStack>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/fajrin-mahyuddin"
              >
                <LinkedinIcon />
              </Link>
              <Link target="_blank" href="https://github.com/Fajrin-Mahyuddin">
                <GitIcon colorIcon="#f8f7f1" />
              </Link>
            </HStack>
          </VStack>
        </Center>
      </ContainerMaxWidth>
    </Center>
  );
};

export default HeroSection;
