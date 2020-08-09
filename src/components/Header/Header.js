import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchFrom from "./SearchFrom";
function Header() {
  const { value, setValue } = useState("");
  const handleChange = (newValue) => console.log(newValue);

  return (
    <div className="header__wrapper">
      <Navbar />
      <SearchFrom updateValue={handleChange} />
      {value}
    </div>
  );
}

export default Header;
