import React from "react";

export const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li className="page-item">
            <button onClick={() => paginate(number)} className="page_link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
