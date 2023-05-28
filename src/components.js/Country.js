import React, { useEffect, useState } from "react";
const baseUrl = "https://restcountries.com/v3.1/all";

function Country() {
  const [countries, setCountries] = useState([]);
  async function fetchCountries() {
    const response = await fetch(baseUrl);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  }
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div className="country">
      <div className="all_countries">
        {countries.map((country) => {
          const { name, population, region, capital, flags } = country;
          return (
            <div className="single_country">
              <img src={flags["svg"]} alt={name} />
              <div className="single_country_details">
                <h4>{name["official"]}</h4>
                <h5>
                  Population:<span>{population}</span>
                </h5>
                <h5>
                  Region:<span>{region}</span>
                </h5>
                <h5>
                  Capital:<span>{capital}</span>
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Country;
