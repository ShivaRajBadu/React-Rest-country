import React, { useState } from "react";
import { Country } from "./Country";

export const ShowArea = ({ datas, handleChange, handleFilter, theme }) => {
  const [inputValue, setInputValue] = useState("");
  const [click, setClick] = useState(false);

  const handleClick = () => {
    click ? setClick(false) : setClick(true);
  };

  return (
    <div onClick={() => click && setClick(false)} className="showcase">
      <div className="input_area">
        <form
          action=""
          onSubmit={(e) => handleChange(e, inputValue, setInputValue)}>
          <button
            className={theme === "dark" ? "search_button" : "search_btn_light"}>
            <i className="fas fa-search"></i>
          </button>
          <input
            className={theme === "dark" ? "input" : "input_light"}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            name="text"
            id="text"
            placeholder="Search for a country..."
            value={inputValue}
          />
        </form>

        <div className="dropdown">
          <button
            style={{ cursor: "pointer" }}
            onClick={() => handleClick()}
            className={
              theme === "dark"
                ? "dropdown-btn"
                : " dropdown-btn dropdown_light "
            }>
            Filer by Regions{" "}
            <i style={{ padding: "0 .5rem" }} className="fas fa-angle-down"></i>
          </button>
          <div
            className={click ? "dropdown-content show" : "dropdown-content "}>
            <ul>
              <li onClick={() => handleFilter("Africa")}>Africa</li>
              <li onClick={() => handleFilter("America")}>America</li>
              <li onClick={() => handleFilter("Asia")}>Asia</li>
              <li onClick={() => handleFilter("europe")}>Europe</li>
              <li onClick={() => handleFilter("oceania")}>oceania</li>
            </ul>
          </div>
        </div>
      </div>
      <p className={theme === "dark" ? "total_country" : "total_country_light"}>
        Total Countries In Page: {datas.length}
      </p>
      <Country datas={datas} theme={theme} />
    </div>
  );
};
