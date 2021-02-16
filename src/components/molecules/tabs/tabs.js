import React from "react";

export default function Tabs({ name, ...props }) {
  return <button {...props}>{name}</button>;
}
