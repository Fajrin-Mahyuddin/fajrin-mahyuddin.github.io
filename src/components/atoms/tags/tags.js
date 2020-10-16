import React from "react";

const Tags = ({ children, ...rest }) => {
  return <span {...rest}>{children}</span>;
};

export default Tags;
