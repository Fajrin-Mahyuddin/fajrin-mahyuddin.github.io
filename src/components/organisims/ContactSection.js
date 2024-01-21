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
import { MailIcon, PhoneIcon, XIcon } from "components/atoms";
import { ContainerMaxWidth } from "components/templates";
import logo from "assets/images/new-logo.svg";
import { Menu } from "components/molecules";
import { NavLink } from "react-router-dom";

const ContactSection = () => {
  return (
    <Box bgColor="#f8f7f1">
      <ContainerMaxWidth>
        <Flex py="3%" flexDir="column" gap={12}>
          <Box>
            <Heading textAlign="center">Contact</Heading>
            <Text textAlign="center">Get in touch</Text>
          </Box>
          <HStack justifyContent="space-evenly">
            <HStack as={NavLink} to="/phone">
              <PhoneIcon boxSize="10" />
              <Text fontSize="1.5rem" fontWeight="bold">
                +6285-395547094
              </Text>
            </HStack>
            <HStack as={NavLink} to="/phone">
              <MailIcon boxSize="10" />
              <Text fontSize="1.5rem" fontWeight="bold">
                fajrin.mahyuddin01@gmail.com
              </Text>
            </HStack>
            <HStack as={NavLink} to="/twitter">
              <XIcon boxSize="10" />
              <Text fontSize="1.5rem" fontWeight="bold">
                @Fajrin_M
              </Text>
            </HStack>
          </HStack>
          <Box>
            <Divider
              opacity="1"
              my="10px"
              height="3px"
              backgroundColor="#0B2A3B"
            />
            <HStack gap={2} justifyContent="space-between">
              <HStack>
                <Image w="60px" src={logo} alt="footer image logo" />
                <Text fontWeight="bold" fontSize="1.2rem">
                  | &copy; {new Date().getFullYear()}
                </Text>
              </HStack>
              <Box>
                <Menu />
              </Box>
            </HStack>
          </Box>
        </Flex>
      </ContainerMaxWidth>
    </Box>
  );
};

export default ContactSection;