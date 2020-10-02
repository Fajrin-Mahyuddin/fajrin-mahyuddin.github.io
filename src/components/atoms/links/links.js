import React from "react";

const Links = ({ links, children, className, ...rest }) => {
  return (
    <a className={`${className}`} href={links} {...rest}>
      {children}
    </a>
  );
};

export default Links;
