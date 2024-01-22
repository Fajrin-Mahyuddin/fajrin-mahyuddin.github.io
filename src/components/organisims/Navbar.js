import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu } from "components/molecules";
import logo from "assets/images/new-logo.svg";
import { ContainerMaxWidth } from "components/templates";
import { Box, Flex, Image, Link as NavLink } from "@chakra-ui/react";

const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let pos = window.scrollY;
        console.log("pos", pos);
        if (pos > 10) {
          navRef.current.style.backgroundColor = "#f8f7f1";
          navRef.current.style.boxShadow =
            "rgba(149, 157, 165, 0.2) 0px 8px 24px";
        } else {
          navRef.current.style.backgroundColor = "transparent";
          navRef.current.style.boxShadow = "none";
        }
      },
      { passive: true }
    );
  }, []);
  return (
    <Box
      ref={navRef}
      as="nav"
      position={["fixed", "fixed"]}
      zIndex={99}
      transition=".3s all"
      style={{
        backgroundColor: "transparent",
        width: "100%",
        top: 0,
      }}
    >
      <ContainerMaxWidth>
        <Flex
          justifyContent="space-between"
          py="20px"
          borderBottom={["2px solid #f0f0f0", "2px solid #f0f0f0", "none"]}
        >
          <NavLink as={Link} to="/">
            <Image src={logo} alt="new logo" />
          </NavLink>

          <Menu />
        </Flex>
      </ContainerMaxWidth>
    </Box>
  );
};
export default Navbar;
