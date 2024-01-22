import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { NavItem, HamburgerIcon, CloseIcon, CostumeDrawer } from "components";

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
        <NavItem
          setDrawerClose={() => setOpen(false)}
          path="about"
          label="About"
        />
        <NavItem
          setDrawerClose={() => setOpen(false)}
          path="work"
          label="Experience"
        />
        <NavItem
          setDrawerClose={() => setOpen(false)}
          path="project"
          label="Project"
        />
        <NavItem
          setDrawerClose={() => setOpen(false)}
          path="contact"
          label="Contact"
        />
      </CostumeDrawer>
    </>
  );
};

export default Menu;
