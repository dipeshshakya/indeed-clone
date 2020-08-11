import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchFrom from "./SearchFrom";
function Header() {
  const { value, setValue } = useState("");
  const handleChange = (newValue) => setValue(newValue);
  console.log(value);

  return (
    <div className="header__wrapper">
      <Navbar />
      <SearchFrom updateValue={handleChange} />
    </div>
  );
}

export default Header;
