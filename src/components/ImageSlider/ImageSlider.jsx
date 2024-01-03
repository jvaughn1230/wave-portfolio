import React, { useState } from "react";
import "./ImageSlider.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="image-slider">
      <img src={imageUrls[imageIndex]} alt="project" />
      <button className="slider-button slider-left">
        <FaArrowLeft size={70} />
      </button>
      <button className="slider-button slider-right">
        <FaArrowRight size={70} />
      </button>
    </div>
  );
};

export default ImageSlider;
