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
        console.log(error);
      }
    };
    getCountries();
  }, []);

  const allCountries = countries.map((country) => (
    <Country key={country.name.common} {...country} />
  ));

  return (
    <>
      {countries ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">{allCountries}</div>
      ) : (
        <h1 className="text-gray-800 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">
          Loading...
        </h1>
      )}
    </>
  );
};

export default Countries;
