import { Icon } from "@chakra-ui/react";
import React from "react";

const MailIcon = ({ ...props }) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="25" cy="24.5067" rx="25" ry="24.5067" fill="#E6AB35" />
      <path
        d="M30.9444 24.5C30.9444 28.0591 28.0591 30.9444 24.5 30.9444C20.9408 30.9444 18.0556 28.0591 18.0556 24.5C18.0556 20.9408 20.9408 18.0556 24.5 18.0556C28.0591 18.0556 30.9444 20.9408 30.9444 24.5ZM30.9444 24.5V26.9167C30.9444 29.1411 32.7478 30.9444 34.9722 30.9444C37.1967 30.9444 39 29.1411 39 26.9167V24.5C39 16.4919 32.5082 10 24.5 10C16.4919 10 10 16.4919 10 24.5C10 32.5082 16.4919 39 24.5 39H30.9444"
        stroke="white"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
};

export default MailIcon;
