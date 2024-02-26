import React, { useState } from "react";
import "./Slider.css";

import { useProject } from "../../context/ProjectContext";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const { selectedProject } = useProject();
  console.log(selectedProject);

  const imageUrls = selectedProject.gallery;

  const showNextImg = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImg = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="slider">
      <div className="slider-image-container">
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="slider-image"
            alt="project screenshot"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button className="slider-btn slider-btn-back" onClick={showPrevImg}>
        <MdOutlineArrowBackIos color="white" size={35} />
      </button>
      <button className="slider-btn slider-btn-next" onClick={showNextImg}>
        <MdOutlineArrowForwardIos color="white" size={40} />
      </button>
      <div className="slider-dot-btn-container">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className="slider-dot-btn"
            onClick={() => {
              setImageIndex(index);
            }}
          >
            {index === imageIndex ? <FaRegDotCircle /> : <FaRegCircle />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
