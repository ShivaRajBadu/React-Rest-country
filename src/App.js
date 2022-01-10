import { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import axios from "axios";
import { ShowArea } from "./components/ShowArea";
import { Route, Routes } from "react-router-dom";

import { Details } from "./components/Details";
import { NotFound } from "./components/NotFound";
import { useNavigate } from "react-router-dom";
import { Pagination } from "./components/Pagination";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(40);

  useEffect(async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const data = response.data;
    setDatas(data);
  }, []);
  const handleChange = async (e, value, setValue) => {
    e.preventDefault();
    const country = datas.filter((data) => data.name.common === value);
    setDatas(country);
    // const response = await axios.get(
    //   `https://restcountries.com/v3.1/name/${value}`
    // );
    // const data = response.data;
    // setDatas(data);
    // //clearing input field
    setTimeout(() => {
      setValue("");
    }, 1000);
  };

  const handleClick = async () => {
    navigate("/");
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const data = response.data;
    setDatas(data);
  };

  const handleFilter = async (region) => {
    const resp = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );
    setDatas(resp.data);
  };
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = datas.slice(indexOfFirstData, indexOfLastData);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className={
                theme === "dark" ? "container_dark" : "container_light"
              }>
              <NavBar
                handleClick={handleClick}
                theme={theme}
                themeToggle={themeToggle}
              />
              <ShowArea
                theme={theme}
                handleChange={handleChange}
                handleFilter={handleFilter}
                datas={currentData}
              />
              <Pagination
                paginate={paginate}
                dataPerPage={dataPerPage}
                totalData={datas.length}
              />
            </div>
          }
        />
        <Route
          path="/:name"
          element={
            <div
              className={
                theme === "dark" ? "container_dark" : "container_light"
              }>
              <NavBar
                handleClick={handleClick}
                theme={theme}
                themeToggle={themeToggle}
              />
              <Details theme={theme} datas={currentData} />
            </div>
          }
        />

        <Route to="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
