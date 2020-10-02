import React from "react";

const Title = ({ children, className, ...rest }) => {
  return (
    <h1 className={`${className}`} {...rest}>
      {children}
    </h1>
  );
};

export default Title;
