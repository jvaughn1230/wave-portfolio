import React, { useState } from "react";
import "./ImageSlider.css";

import { useProject } from "../../context/ProjectContext";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const { selectedProject } = useProject();
  const imageUrls = selectedProject.gallery;

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPreviousImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="image-slider-container">
      <img
        src={imageUrls[imageIndex]}
        alt="project screenshot"
        className="image-slider-img"
      />
      <button className="image-slider-arrow left" onClick={showPreviousImage}>
        <MdOutlineArrowBackIos className="arrow" size={40} />
      </button>
      <button className="image-slider-arrow right" onClick={showNextImage}>
        <MdOutlineArrowForwardIos className="arrow" size={40} />
      </button>
    </div>
  );
};

export default ImageSlider;
