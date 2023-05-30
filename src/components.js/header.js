import React, { useState } from "react";

function Header({ countries, setFilteredCountries }) {
  // search
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    console.log(value);
    const searchCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(searchCountries);
  };
  // // filter
  // const handleFilter = (e) => {
  //   const region = e.target.value;
  //   setSelectedRegion(region);
  //   filteredCountries(searchValue, region);
  // };
  // const filteredCountries = (searchValue, region) => {
  //   const filterCountries = countries.filter((country) => {
  //     const name = country.name.common.toLowerCase();
  //     const regionFilter = region === "" || country.region === region;
  //     const searchFilter = name.includes(searchValue.toLowerCase());
  //     return regionFilter && searchFilter;
  //   });
  //   setFilteredCountries(filterCountries);
  // };

  return (
    <div className="header">
      <form className="form">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search for a country..."
          onChange={handleSearchChange}
        />
      </form>
      <div className="filter">
        <select
          name="select"
          id="select"
          className="select"
          // value={selectedRegion}
          // onChange={handleFilter}
        >
          <option value="All">All</option>
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
