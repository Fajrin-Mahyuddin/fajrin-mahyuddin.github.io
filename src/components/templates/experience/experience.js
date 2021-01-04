import React from "react";
import { Title, ExperienceList } from "components";

const Experience = () => {
  const stack = ["Javascript", "Express", "Grapql"];
  return (
    <div className="container-content text-center p-4-0">
      <Title className="text-bold font-large-xx ">Exprerience</Title>
      <div>
        <ExperienceList />
      </div>
    </div>
  );
};

export default Experience;
