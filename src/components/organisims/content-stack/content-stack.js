import React from "react";
import { Title, Text, Label } from "components";

const ContentStack = () => {
  const stack = ["Javascript", "Express", "Grapql"];
  return (
    <div>
      {" "}
      Skills:
      {stack.map((item, i) => {
        return (
          <Label key={i} className="ml-05">
            {item}
          </Label>
        );
      })}
    </div>
  );
};

export default ContentStack;
