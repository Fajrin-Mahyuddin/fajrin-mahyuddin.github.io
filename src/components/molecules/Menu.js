import React, { useState } from "react";
import { Button, Flex, Link as FooterLink } from "@chakra-ui/react";
import { NavItem, HamburgerIcon, CloseIcon, CostumeDrawer } from "components";
import { Link } from "react-scroll";

const menus = [
  { label: "Main", path: "main" },
  { label: "About", path: "about" },
  { label: "Experience", path: "work-experience" },
  { label: "Project", path: "project" },
  // { label: "+6285-395547094", path: "contact" },
];

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!isOpen)}
        variant="unstyled"
        display={["block", "block", "none"]}
      >
        <HamburgerIcon boxSize="10" />
      </Button>
      <CostumeDrawer isOpen={isOpen}>
        <Button
          variant="unstyled"
          display={["block", "block", "none"]}
          onClick={() => setOpen(!isOpen)}
          pos="absolute"
          top="10px"
          right="10px"
        >
          <CloseIcon boxSize="10" />
        </Button>
        {menus.map((item, i) => {
          return (
            <NavItem
              key={i}
              setDrawerClose={() => setOpen(false)}
              path={item.path}
              label={item.label}
            />
          );
        })}
      </CostumeDrawer>
    </>
  );
};

export const FooterMenu = () => {
  return (
    <Flex gap={[4, 4, 10]}>
      {menus.map((item, i) => {
        return (
          <FooterLink
            key={i}
            as={Link}
            to={item.path}
            offset={-81}
            smooth={true}
            spy={true}
            duration={500}
            color="#0B2A3B"
            userSelect="none"
            _hover={{ color: "#E6AB35" }}
          >
            {item.label}
          </FooterLink>
        );
      })}
    </Flex>
  );
};

export default Menu;
