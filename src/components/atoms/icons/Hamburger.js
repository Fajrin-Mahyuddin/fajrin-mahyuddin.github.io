import { Icon } from "@chakra-ui/react";
import React from "react";

const HamburgerIcon = ({ bgIcon = "#286F6C", ...props }) => {
  return (
    <Icon
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="20" cy="20" r="20" fill="white" />
      <path
        d="M11 26.3216C11 25.5917 11.5916 25 12.3214 25L26.8571 25.0004C27.587 25.0004 28.1786 25.592 28.1786 26.3218C28.1786 27.0517 27.587 27.6433 26.8571 27.6433L12.3214 27.643C11.5916 27.643 11 27.0513 11 26.3216Z"
        fill="#0B2A3B"
      />
      <path
        d="M11 14.3216C11 13.5917 11.5916 13 12.3214 13L26.8571 13.0004C27.587 13.0004 28.1786 13.592 28.1786 14.3218C28.1786 15.0517 27.587 15.6433 26.8571 15.6433L12.3214 15.643C11.5916 15.643 11 15.0513 11 14.3216Z"
        fill="#0B2A3B"
      />
      <path
        d="M8.32143 19C7.59163 19 7 19.5916 7 20.3214C7 21.0511 7.59163 21.6427 8.32143 21.6427H30.7857C31.5155 21.6427 32.1071 21.0511 32.1071 20.3214C32.1071 19.5916 31.5155 19 30.7857 19H8.32143Z"
        fill="#0B2A3B"
      />
    </Icon>
  );
};

export default HamburgerIcon;
