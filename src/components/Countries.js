import { useState, useEffect } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Antarctic",
    },
  ];

  const searchCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchCountry();
  };

  const filterCountryByRegion = async (region) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    filterCountryByRegion();
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);

  const allCountries = countries.map((country) => (
    <Country key={country.name.common} {...country} />
  ));

  return (
    <>
      <div className="container mx-auto p-8">
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <form
            autoComplete="off"
            className="max-w-3xl md:flex-1"
            onSubmit={handleSearch}
          >
            <input
              className="py-3 px-4 text-gray-600 placeholder-gray-600 w-full rounded shadow outline-none dark:text-gray-400 dark:placeholder:text-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700 transition-all duration-200"
              type="text"
              name="search"
              placeholder="Search for a country by its name"
              required
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
          </form>
          <form onSubmit={handleFilterSubmit}>
            <select
              name="filterbyregion"
              className="w-52 py-3 px-4 outline-none shadow rounded text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700"
              onChange={(e) => filterCountryByRegion(e.target.value)}
              value={regions.name}
            >
              {regions.map((region,index) => (
                <option key={index} value={region.name}>{region.name}</option>
              ))}
            </select>
          </form>
        </div>
        {countries ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {allCountries}
          </div>
        ) : (
          <h1 className="text-gray-800 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">
            Loading...
          </h1>
        )}
      </div>
    </>
  );
};

export default Countries;
