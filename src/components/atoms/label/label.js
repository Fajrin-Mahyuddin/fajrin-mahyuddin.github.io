import React from "react";

const Label = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={`labels ${className}`}>
      {children}
    </div>
  );
};

export default Label;
