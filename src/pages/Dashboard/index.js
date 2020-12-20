import React from "react";
import {
  Layouts,
  Sliders,
  About,
  Services,
  StackTemp,
  LatestProject,
  Experience,
} from "components";

const Dashboard = () => {
  return (
    <Layouts>
      <Sliders />
      <About />
      <Services />
      <LatestProject />
      <Experience />
      <StackTemp />
    </Layouts>
  );
};

export default Dashboard;
