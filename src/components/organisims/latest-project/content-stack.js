import React from "react";
import { Title, Text, Label } from "components";

const LatesProject = () => {
  const stack = ["Javascript", "Express", "Grapql"];
  return (
    <div>
      <Title className="text-bold font-large-xx ">Latest Project</Title>
      <div>
        <Text>
          {" "}
          Stack:
          {stack.map((item, i) => {
            return (
              <Label key={i} className="ml-05">
                {item}
              </Label>
            );
          })}
        </Text>
      </div>
    </div>
  );
};

export default LatesProject;
