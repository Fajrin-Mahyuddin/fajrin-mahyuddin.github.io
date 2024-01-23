import React from "react";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  MailIcon,
  PhoneIcon,
  XIcon,
  ContainerMaxWidth,
  FooterMenu,
} from "components";
import logo from "assets/images/new-logo.svg";
import { NavLink } from "react-router-dom";

const ContactSection = () => {
  return (
    <Box as="section" bgColor="#f8f7f1" id="contact">
      <ContainerMaxWidth>
        <Flex
          minH="30vh"
          py="3%"
          flexDir="column"
          gap={12}
          justifyContent="space-between"
        >
          <Box>
            <Heading textAlign="center">Contact</Heading>
            <Text textAlign="center">Get in touch</Text>
          </Box>
          <Flex
            flexDir={["column", "column", "row"]}
            justifyContent="space-evenly"
            alignItems="center"
            gap={5}
          >
            <HStack
              as={NavLink}
              to="# "
              _hover={{
                color: "#E6AB35",
              }}
            >
              <PhoneIcon boxSize="8" />
              <Text fontSize={["1.1rem", "1.1rem", "1.3rem"]} fontWeight="bold">
                +6285-395547094
              </Text>
            </HStack>
            <HStack
              as={NavLink}
              to="mailto:fajrin.mahyuddin01@gmail.com"
              _hover={{
                color: "#E6AB35",
              }}
            >
              <MailIcon boxSize="8" />
              <Text fontSize={["1.1rem", "1.1rem", "1.3rem"]} fontWeight="bold">
                fajrin.mahyuddin01@gmail.com
              </Text>
            </HStack>
            <HStack
              as={NavLink}
              target="_blank"
              to="https://twitter.com/Fajrin__M"
              _hover={{
                color: "#E6AB35",
              }}
            >
              <XIcon boxSize="8" />
              <Text fontSize={["1.1rem", "1.1rem", "1.3rem"]} fontWeight="bold">
                @Fajrin__M
              </Text>
            </HStack>
          </Flex>
          <Box>
            <Divider
              opacity="1"
              my="20px"
              height="3px"
              backgroundColor="#0B2A3B"
            />
            <Flex
              flexDir={["column", "column", "row"]}
              gap={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <HStack>
                <Image w="60px" src={logo} alt="footer image logo" />
                <Text fontWeight="bold" fontSize="1.2rem">
                  &copy; {new Date().getFullYear()}
                </Text>
              </HStack>
              <FooterMenu />
            </Flex>
          </Box>
        </Flex>
      </ContainerMaxWidth>
    </Box>
  );
};

export default ContactSection;
