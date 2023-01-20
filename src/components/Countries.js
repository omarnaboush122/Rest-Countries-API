import { useState, useEffect } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

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
      <form autoComplete="off" className="max-w-3xl md:flex-1">
      <input className="py-3 px-4 text-gray-600 placeholder-gray-600 w-full rounded shadow outline-none" type="text" name="search" placeholder="Search for a country by its name" required />
      </form>
      <form>
        <select name="filter-by-region" className="w-52">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
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
