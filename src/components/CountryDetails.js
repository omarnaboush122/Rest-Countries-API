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
        <h1>{item.name.official}</h1>
      </div>
    </div>
  ));
  return <div className="p-8 md:py-0 max-w-7xl mx-auto">{country}</div>;
};

export default CountryDetails;
