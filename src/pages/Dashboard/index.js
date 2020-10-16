import React from "react";
import { Layouts, Sliders, About, Services, StackTemp } from "components";

const Dashboard = () => {
  return (
    <Layouts>
      <Sliders />
      <About />
      <Services />
      <StackTemp />
    </Layouts>
  );
};

export default Dashboard;
