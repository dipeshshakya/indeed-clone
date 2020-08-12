import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchFrom from "./SearchFrom";
import SearchHistory from "../SearchHistory";

function Header() {
  const { hValue, setHvalue } = useState(null);

  const handleChange = (newValue) => {
    if (newValue) {
      console.log("value from header", newValue);
      setHvalue(newValue);
    }
  };

  return (
    <div className="header__wrapper">
      <Navbar />
      <SearchFrom updateValue={handleChange} />
      <SearchHistory searchHistoryValue={hValue} />

      {/* <SearchHistory searchHistoryValue={hValue} /> */}
    </div>
  );
}

export default Header;
