import React from "react";

const Image = ({ className, src, alt, ...res }) => {
  return <img className={`${className}`} {...res} src={src} alt={alt} />;
};

export default Image;
