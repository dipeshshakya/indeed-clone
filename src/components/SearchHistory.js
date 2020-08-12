import React from "react";

function SearchHistory({ searchHistoryValue }) {
  return (
    <div className="history__wrapper">
      <h3>Recent Searches</h3>
      <ul className="">
        <li className="history__list">{searchHistoryValue}</li>
      </ul>
    </div>
  );
}

export default SearchHistory;
