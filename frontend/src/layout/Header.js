import React from "react";
import { BiUserPlus } from "react-icons/bi";

function Header() {
  return (
    <header>
      <div className="header-container">
        <BiUserPlus />
        <h1>Contact Manager</h1>
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
}

export default Header;
