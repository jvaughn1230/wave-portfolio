import React from "react";
import { useInView } from "react-intersection-observer";

import "./cover.css";

const Cover = () => {
  const { ref: viewRef, inView: coverVisible } = useInView({
    triggerOnce: true,
  });

  console.log(coverVisible);
  return (
    <div className="cover-container" ref={viewRef}>
      <div className={`${coverVisible ? "remove-cover" : ""} cover`}></div>
    </div>
  );
};

export default Cover;
