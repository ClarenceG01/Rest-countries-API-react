import React from "react";

function Header() {
  return (
    <div className="header">
      <form className="form">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search for a country..."
        />
      </form>
      <div className="filter">
        <select name="select" id="select" className="select">
        <option value=""></option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
