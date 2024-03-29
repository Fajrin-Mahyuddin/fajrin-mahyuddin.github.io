import { Icon } from "@chakra-ui/react";
import React from "react";

const XIcon = ({ ...props }) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="25" cy="24.5067" rx="25" ry="24.5067" fill="#F26440" />
      <path
        d="M33.8392 12H38.2861L28.571 23.0133L40 38H31.0512L24.0421 28.9107L16.0222 38H11.5727L21.9639 26.22L11 12H20.176L26.5115 20.308L33.8392 12ZM32.2785 35.36H34.7425L18.8371 14.5013H16.1929L32.2785 35.36Z"
        fill="white"
      />
    </Icon>
  );
};

export default XIcon;
