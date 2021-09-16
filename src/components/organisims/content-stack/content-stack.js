import React from "react";
import { Label } from "components";

const ContentStack = () => {
  const stack = ["ReactJS", "React Native", "Express", "Laravel", "Rest-API"];
  return (
    <div>
      {" "}
      Skills:
      {stack.map((item, i) => {
        return (
          <Label key={i} className="ml-05 mb-05">
            {item}
          </Label>
        );
      })}
    </div>
  );
};

export default ContentStack;
