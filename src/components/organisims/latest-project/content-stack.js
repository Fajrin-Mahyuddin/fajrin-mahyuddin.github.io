import React from "react";
import { Title, Text, Label } from "components";

const LatesProject = () => {
  const stack = ["Javascript", "Express", "Grapql"];
  return (
    <div>
      <Title className="text-bold font-large-xx ">Latest Project</Title>
      <div>
        <Text>Galery</Text>
      </div>
    </div>
  );
};

export default LatesProject;
