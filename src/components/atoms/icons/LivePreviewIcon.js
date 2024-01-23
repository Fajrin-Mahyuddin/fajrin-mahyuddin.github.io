import { Icon } from "@chakra-ui/react";
import React from "react";

const LivePreviewIcon = ({ bgIcon = "#0B2A3B", ...props }) => {
  return (
    <Icon
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.5625 3H3V44.125C3 47.3698 5.63033 50 8.875 50H44.125C47.3698 50 50 47.3698 50 44.125V29.4375"
        stroke={bgIcon}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6875 35.3125L50 3"
        stroke={bgIcon}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.3125 3H50V17.6875"
        stroke={bgIcon}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default LivePreviewIcon;
