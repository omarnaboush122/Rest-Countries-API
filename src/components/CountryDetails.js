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
        console.log(error);
      }
    };
    getCountry();
  }, [name]);

  return <div className="text-white">{name}</div>;
};

export default CountryDetails;
