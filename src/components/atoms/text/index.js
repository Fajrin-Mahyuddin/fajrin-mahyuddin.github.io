import React from "react";

const Text = ({ children, ...res }) => {
  return <p {...res}>{children}</p>;
};

export default Text;
