import React from "react";

export const NavBar = ({ handleClick, themeToggle, theme }) => {
  return (
    <div className={theme === "dark" ? "navbar" : "navbar navbar_light"}>
      <h1 style={{ cursor: "pointer" }} onClick={handleClick}>
        where in the World?
      </h1>
      <div onClick={themeToggle} className="mode-toggle">
        <i className="fas fa-moon"></i>
        {/* <i className="far fa-sun"></i> */}
        <span>Dark Mode</span>
      </div>
    </div>
  );
};
