import React from "react";

import {
  Layouts,
  HeroSection,
  AboutSection,
  WorkExperience,
  ProjectSeciton,
} from "components";

const Dashboard = () => {
  return (
    <Layouts>
      <HeroSection />
      <AboutSection />
      <WorkExperience />
      <ProjectSeciton />
    </Layouts>
  );
};

export default Dashboard;
