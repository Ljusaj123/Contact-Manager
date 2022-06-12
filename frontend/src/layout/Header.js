import React from "react";
import { BiUserPlus } from "react-icons/bi";
import { useState } from "react";

function Header() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery("");
  };
  return (
    <header>
      <BiUserPlus className="create-user-icon" />
      <h1>Contact Manager</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
