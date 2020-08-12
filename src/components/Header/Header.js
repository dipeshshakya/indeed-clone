import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchFrom from "./SearchFrom";
function Header() {
  const { hValue, setHvalue } = useState(null);
  // function handleChange(newValue) {
  //   // setValue(newValue);
  //   console.log("value from header", newValue);
  //   const newData = newValue;
  //   setValue(newData);
  // }
  const handleChange = (newValue) => setHvalue(newValue);

  return (
    <div className="header__wrapper">
      <Navbar />
      <SearchFrom
        updateValue={(value) => handleChange(value)}
        searchHistoryValue={hValue}
      />
    </div>
  );
}

export default Header;
