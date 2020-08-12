import React from "react";

function SearchHistory(props) {
  console.log(props);
  return (
    <div className="history__wrapper">
      <h3>Recent Searches component</h3>
      <ul className="">
        <li className="history__list">{props.searchHistoryValue}</li>
      </ul>
    </div>
  );
}

export default SearchHistory;
