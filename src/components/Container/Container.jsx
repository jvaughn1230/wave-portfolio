import React from "react";
import "./container.css";

const Container = ({ children }) => {
  //   if (props.type !== "curve" || "waves") return Error("Invalid Type Prop");

  //   const styleName =
  // props.type === "curve" ? "curved-container" : "waves-container";

  return <div className="container">{children}</div>;
};

export default Container;
