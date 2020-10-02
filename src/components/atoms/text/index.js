import React from "react";

const Text = ({ children, className, ...res }) => {
  return (
    <p className={`${className}`} {...res}>
      {children}
    </p>
  );
};

export default Text;
