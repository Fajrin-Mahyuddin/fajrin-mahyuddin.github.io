import React from "react";
import { Input } from "antd";
import { StarOutlined } from "@ant-design/icons";

const SearchInput = ({ label, ...rest }) => {
  return (
    <>
      <StarOutlined />
      <Input {...rest} />
    </>
  );
};

export default SearchInput;
