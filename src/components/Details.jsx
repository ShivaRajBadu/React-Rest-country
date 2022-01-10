import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Details = ({ datas, theme }) => {
  let navigate = useNavigate();
  let params = useParams();

  const handleBorderClick = (border) => {
    const data = datas.filter((data) => data.fifa === border);
    console.log(data);
  };
  const data = datas.filter((data) => data.name.common === params.name);

  const native = Object.keys(data[0].name.nativeName)[0];

  const currency = Object.keys(data[0].currencies)[0];

  return (
    <div className="details">
      <button
        onClick={() => navigate(-1)}
        className={theme === "dark" ? "back_btn" : " back_btn back_btn_light"}>
        <i className="fas fa-arrow-left"></i>back
      </button>
      <div className="details_show">
        <img src={data[0].flags.svg} alt="country flag" />
        <div className="country_detail">
          <div className="flex">
            <div className="country_detail_1">
              <h1>{params.name}</h1>
              <p>
                Native Name:{" "}
                <span>{data[0].name.nativeName[native].common}</span>
              </p>
              <p>
                population: <span>{data[0].population}</span>
              </p>
              <p>
                Region: <span>{data[0].region}</span>
              </p>
              <p>
                sub region: <span>{data[0].subregion}</span>
              </p>
              <p>
                capital: <span>{data[0].capital}</span>
              </p>
            </div>
            <div className="country_detail_2">
              <p>
                top level domain:{" "}
                {data[0].tld.map((d) => (
                  <span>{d}</span>
                ))}
              </p>
              <p>
                currencies: <span>{data[0].currencies[currency].name}</span>
              </p>
              <p>
                languages: <span>{data[0].languages.eng}</span>
              </p>
            </div>
          </div>
          <div
            className={
              theme === "dark"
                ? "border_Country"
                : " border_Country border_Country_light"
            }>
            <h3>Border countries:</h3>
            {data[0].borders &&
              data[0].borders.map((border) => (
                <p onClick={() => handleBorderClick(border)}>{border}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
