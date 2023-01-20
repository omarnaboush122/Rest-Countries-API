import { Link } from "react-router-dom";

const Country = ({ flags, name, population, region, subregion }) => {
  return (
    <Link to={`/${name.common}`}>
      <div className="bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg shadow overflow-hidden">
        <img
          className="w-full object-cover  md:h-72"
          src={flags.svg}
          alt={name.common}
        />
        <div className="p-4">
          <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
            {name.common}
          </h2>
          <ul className="flex flex-col gap-2 dark:text-gray-400">
            <li>Population: {population.toLocaleString()}</li>
            <li>Region: {region}</li>
            <li>Subregion: {subregion}</li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Country;
