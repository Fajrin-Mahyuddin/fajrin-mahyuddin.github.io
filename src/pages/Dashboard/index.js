import React from "react";

import { Layouts, HeroSection, AboutSection, WorkExperience } from "components";

const Dashboard = () => {
  return (
    <Layouts>
      <HeroSection />
      <AboutSection />
      <WorkExperience />
    </Layouts>
  );
};

export default Dashboard;
