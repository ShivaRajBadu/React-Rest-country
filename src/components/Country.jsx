import React from "react";
import { useNavigate } from "react-router-dom";
import { CountryDetails } from "./CountryDetails";
import { Spinner } from "./Spinner";

export const Country = ({ datas, theme }) => {
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate(`/${data.name.common}`);
  };
  return (
    <div style={{ cursor: "pointer" }} className="country">
      {datas.length === 0 ? (
        <Spinner />
      ) : (
        datas.map((data) => (
          <div to="/Nepal" onClick={() => handleClick(data)}>
            <CountryDetails theme={theme} data={data} />
          </div>
        ))
      )}
    </div>
  );
};
