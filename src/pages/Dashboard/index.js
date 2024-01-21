import React from "react";

import {
  Layouts,
  HeroSection,
  AboutSection,
  WorkExperience,
  ProjectSeciton,
  ContactSection,
} from "components";

const Dashboard = () => {
  return (
    <Layouts>
      <HeroSection />
      <AboutSection />
      <WorkExperience />
      <ProjectSeciton />
      <ContactSection />
    </Layouts>
  );
};

export default Dashboard;
