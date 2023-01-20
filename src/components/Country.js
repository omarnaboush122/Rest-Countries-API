

const Country = ({flags,name,population,region,subregion}) => {
  return (
    <div>
      <img src={flags.svg} alt={name.common} />
      <h2>{name.common}</h2>
      <ul>
        <li>Population: {population.toLocaleString()}</li>
        <li>Region: {region}</li>
        <li>Subregion: {subregion}</li>
      </ul>
    </div>
  );
}

export default Country;
