import React from "react";

export const CountryDetails = ({ data, theme }) => {
  return (
    <div className="country_details">
      <img src={data.flags.png} alt="" />
      <div className={theme === "dark" ? "country_info" : "country_info_light"}>
        {" "}
        <h4 className="country_name">{data.name.common}</h4>
        <p className="country_population">
          {" "}
          population:<span>{data.population}</span>
        </p>
        <p className="region">
          Region: <span>{data.region}</span>{" "}
        </p>
        <p className="capital">
          capital: <span>{data.capital}</span>{" "}
        </p>
      </div>
    </div>
  );
};
