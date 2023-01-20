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
        <h1 className="font-bold text-gray-900 text-4xl lg:text-6xl">{item.name.official}</h1>
        <ul>
        <li>Capital: {item.capital[0]}</li>
        <li>Population: {item.population.toLocaleString()}</li>
        <li>Region: {item.region}</li>
        <li>Subregion: {item.subregion}</li>
      </ul>
      </div>
    </div>
  ));
  return <div className="p-8 md:py-0 max-w-7xl mx-auto">{country}</div>;
};

export default CountryDetails;
