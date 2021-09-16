import React, { useState } from "react";
import { Title, Tabs } from "components";
import { layout, CSSGrid, makeResponsive, measureItems } from "react-stonecutter";
import {
  ams,
  bank_skripsi,
  default_img,
  evalap,
  pabalu,
  ppdb_passikola,
  sitinaja,
  spkt_barombong,
  telegraph,
  CoffeeApp
} from "assets";
import { Image } from "antd";

const LatestProject = () => {
  const stack = [
    {
      src: CoffeeApp,
      kat: "web-app",
    },
    {
      src: ams,
      kat: "web-app",
    },
    {
      src: pabalu,
      kat: "mobile-app",
    },
    {
      src: bank_skripsi,
      kat: "web-app",
    },
    {
      src: evalap,
      kat: "web-app",
    },
    {
      src: ppdb_passikola,
      kat: "web-app",
    },
    {
      src: sitinaja,
      kat: "web-app",
    },
    {
      src: telegraph,
      kat: "web-app",
    },
  ];
  const btn = [
    { name: "All", kat: "all" },
    { name: "Web App", kat: "web-app" },
    { name: "Mobile App", kat: "mobile-app" },
    { name: "Template", kat: "template" },
  ];
  const [imgs, setImgs] = useState(stack);
  const [activeBtn, setActiveBtn] = useState("all");
  const Grid = makeResponsive(CSSGrid, { maxWidth: 1200, minPadding: 15 })
  const changeList = (data) => {
    const newList = stack.filter((item) =>
      data === "all" ? stack : item.kat === data
    );
    setImgs(newList);
    setActiveBtn(data);
  };
  return (
    <div className="p-55-0 text-center" id="project">
      <Title className="text-bold font-large-xx ">Latest Project</Title>
      {btn.map((item, i) => {
        return (
          <Tabs
            key={i}
            name={item.name}
            onClick={() => changeList(item.kat)}
            className={
              activeBtn === item.kat ? "btn-tabs activeBtn" : "btn-tabs"
            }
          />
        );
      })}

      {/* <button onClick={() => setImgs(stack)}>All</button>
      <button onClick={() => setImgs(stack1)}>Web Aplication</button>
      <button onClick={() => setImgs(stack1)}>Template</button>
      <button onClick={() => setImgs(stack1)}>Mobile App</button> */}
      <div className="image-wrapper">
        <Grid
          component="div"
          columns={4}
          columnWidth={200}
          gutterWidth={7}
          gutterHeight={7}
          layout={layout.pinterest}
          duration={500}
          easing="ease-out"
        >
          {imgs.map((item, i) => {
            return (
              <div className="image-view" key={i} itemHeight={200}>
                <Image
                  width={200}
                  src={item.src}
                  alt={item.src}
                  fallback={default_img}
                />
              </div>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default LatestProject;
