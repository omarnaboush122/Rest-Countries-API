

const Country = ({flags,name,population,region,subregion}) => {
  return (
    <div>
      <img className="w-full object-cover md:h-72" src={flags.svg} alt={name.common} />
      <h2 className="font-bold text-lg text-gray-900 mb-2">{name.common}</h2>
      <ul className="flex flex-col gap-2">
        <li>Population: {population.toLocaleString()}</li>
        <li>Region: {region}</li>
        <li>Subregion: {subregion}</li>
      </ul>
    </div>
  );
}

export default Country;
