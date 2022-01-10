import React from "react";
import spinner from "../spinner.gif";

export const Spinner = () => {
  return (
    <div className="spinner">
      <img className="spinner_img" src={spinner} alt="Loading..." />
    </div>
  );
};
