import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const [countryData, setCountryData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountry();
  }, [name]);

  const country = countryData.map((item) => (
    <div
      key={item.flags.svg}
      className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen"
    >
      <img src={item.flags.svg} alt={item.name.common} />
      <div>
        <h1 className="mb-8 font-bold text-gray-900 text-4xl lg:text-6xl dark:text-white">
          {item.name.official}
        </h1>
        <ul className="flex flex-col mt-4 gap-2 text-slate-700 dark:text-gray-400">
          <li>Capital: {item.capital[0]}</li>
          <li>Population: {item.population.toLocaleString()}</li>
          <li>Region: {item.region}</li>
          <li>Subregion: {item.subregion}</li>
        </ul>
        {item.borders && <h3 className="text-gray-900 font-bold text-lg mb-2 dark:text-white">Borders:</h3>}
        <ul className="flex flex-wrap gap-2">
          {item.borders &&
            item.borders.map((border, index) => <li key={index} className="bg-white text-gray-700 p-2 rounded text-xs tracking-wide shadow dark:bg-gray-800 dark:text-gray-400">{border}</li>)}
        </ul>
      </div>
    </div>
  ));
  return <div className="p-8 md:py-0 max-w-7xl mx-auto">{country}</div>;
};

export default CountryDetails;
