import React, { useEffect, useState } from "react";
import { gunung, matahari, balon_udara, logo_navi } from "assets";
import { ContentSlider, Image } from "components";
import { Spring } from "react-spring/renderprops";

const Sliders = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("oke scroll", window.scrollY);
      window.scrollY > 50 ? setWidth(window.scrollY) : setWidth(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => console.log("closed"));
    };
  });
  return (
    <div className="slider-container" id="main">
      <div className="slide-bg">
        <Image src={balon_udara} className="balon-udara" alt="balon_udata" />
        <Image src={matahari} className="matahari" alt="matahari" />
        <Image src={gunung} className="gunung" alt="gunung" />
      </div>
      <ContentSlider />
    </div>
  );
};

export default Sliders;
