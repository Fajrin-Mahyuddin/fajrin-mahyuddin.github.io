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
import linkedin from "assets/images/icons/linkedin.svg";
import git from "assets/images/icons/git.svg";

import { ContainerMaxWidth } from "components";

const HeroSection = () => {
  return (
    <Box as="section" backgroundColor="#F8F7F1" width="100%">
      <ContainerMaxWidth>
        <Center height="100vh" gap="10%">
          <Box width="400px">
            <Image src={me} alt="profile" />
          </Box>
          <VStack gap="20px">
            <VStack color="#0B2A3B">
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
                fontSize="18px"
                fontWeight="400"
                bgColor="#F26440"
                color="#fff"
                _hover={{}}
              >
                Download CV
              </Button>
              <Button
                minW="150px"
                fontSize="18px"
                fontWeight="400"
                bgColor="#E6AB35"
                color="#fff"
                _hover={{}}
              >
                Hire me
              </Button>
            </HStack>
            <HStack>
              <Link href="/linkedin">
                <Image src={linkedin} alt="linkedin url" />
              </Link>
              <Link href="/git">
                <Image src={git} alt="git url" />
              </Link>
            </HStack>
          </VStack>
        </Center>
      </ContainerMaxWidth>
    </Box>
  );
};

export default HeroSection;
