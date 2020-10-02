import React from "react";
import { Input } from "antd";

const InputLabel = ({ label, ...rest }) => {
  return (
    <>
      <label>{label}</label>
      <Input {...rest} />
    </>
  );
};

export default InputLabel;
