import React from "react";
import {
  Layouts,
  Sliders,
  About,
  Services,
  StackTemp,
  LatestProject,
} from "components";

const Dashboard = () => {
  // console.log("width of scrolling", window.pageXOffset);

  return (
    <Layouts>
      <Sliders />
      <About />
      <Services />
      <LatestProject />
    </Layouts>
  );
};

export default Dashboard;
