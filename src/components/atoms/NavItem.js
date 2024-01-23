import React from "react";
import { Link as NavLink } from "@chakra-ui/react";
import { Link } from "react-scroll";
// import PhoneIcon from "./icons/PhoneIcon";

const NavItem = ({ label, path, setDrawerClose }) => {
  // if (path === "contact") {
  //   return (
  //     <Button
  //       bgColor="#286F6C"
  //       color="#fff"
  //       fontSize="1rem"
  //       _active={{}}
  //       _hover={{}}
  //       fontWeight="normal"
  //       rightIcon={<PhoneIcon boxSize={6} />}
  //     >
  //       {label}
  //     </Button>
  //   );
  // }
  return (
    <NavLink
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      fontWeight="medium"
      fontSize="1.1rem"
      userSelect="none"
      color="#0B2A3B"
      _hover={{ color: "#E6AB35" }}
      as={Link}
      to={path}
      offset={-80}
      onSetActive={(to) => {
        console.log(to);
        setDrawerClose();
      }}
      smooth={true}
      spy={true}
      duration={500}
      activeStyle={{
        color: "#e6ab35",
      }}
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
