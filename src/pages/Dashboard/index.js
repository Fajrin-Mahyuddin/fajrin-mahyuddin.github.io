import React from "react";
import { Layouts, Sliders, About, Services } from "components";

const Dashboard = () => {
  return (
    <Layouts>
      <Sliders />
      <About />
      <Services />
    </Layouts>
  );
};

export default Dashboard;
