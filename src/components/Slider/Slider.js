import React from "react";
import "./Slider.css";

import ImageSlider from "../ImageSlider/ImageSlider";

import Img1 from "../../assets/dinobeach.png";
import Img2 from "../../assets/simplescanner.png";
import Img3 from "../../assets/riptide.png";
import Img4 from "../../assets/palmclothing.png";

const IMAGES = [Img1, Img2, Img3, Img4];

const Slider = () => {
  return (
    <div className="slider-container">
      <ImageSlider imageUrls={IMAGES} className="slider-image" />;
    </div>
  );
};

export default Slider;
