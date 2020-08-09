import React from "react";
import Navbar from "./Navbar";
import SearchFrom from "./SearchFrom";
function Header() {
  return (
    <div className="header__wrapper">
      <Navbar />
      <SearchFrom />
    </div>
  );
}

export default Header;
