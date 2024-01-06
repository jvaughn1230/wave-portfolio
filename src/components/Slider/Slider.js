import React, { useState } from "react";
import "./Slider";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import Image1 from "../../assets/dinobeach.png";
import Image2 from "../../assets/simplescanner.png";
import Image3 from "../../assets/riptide.png";
import Image4 from "../../assets/palmclothing.png";

// TODO: Add IMage Prop
const Slider = () => {
  //   const length = images.length;
  const [current, setCurrent] = useState(0);

  const imageUrls = [Image1, Image2, Image3, Image4];

  const length = imageUrls.length;

  console.log(length);

  return (
    <div className="slider">
      <button className="slider-btn slider-btn-back">
        <MdOutlineArrowBackIos />
      </button>
      <button className="slider-btn slider-btn-next">
        <MdOutlineArrowForwardIos />
      </button>

      <img src={imageUrls[current]} alt="project" className="slider-image" />
    </div>
  );
};

export default Slider;
