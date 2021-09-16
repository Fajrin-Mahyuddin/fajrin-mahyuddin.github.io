import React from "react";
import {
  Layouts,
  Sliders,
  About,
  Services,
  StackTemp,
  LatestProject,
} from "components";
import LinkProjects from "components/organisims/latest-project/link-projects";

const Dashboard = () => {
  // console.log("width of scrolling", window.pageXOffset);

  return (
    <Layouts>
      <Sliders />
      <About />
      <Services />
      <LatestProject />
      <LinkProjects />
    </Layouts>
  );
};

export default Dashboard;
