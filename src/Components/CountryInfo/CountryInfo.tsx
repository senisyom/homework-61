interface Props {
  countryData: any;
  borders: string[];
}

const CountryInfo: React.FC<Props> = ({ countryData, borders }) => {
  if (!countryData) {
    return (
      <div className="card card-body ms-3 me-3 d-flex">
        Выберите одну страну
      </div>
    );
  }
  return (
    <div className="card card-body ms-3 me-3 d-flex">
      <h3>{countryData.name}</h3>
      <hr />
      <p>Столица: {countryData.capital}</p>
      <hr />
      <p> Население: {countryData.population} человек </p>
      <hr />
      <p>
        Граничит с:
        <ul>
          {borders.map((border, index) => (
            <li key={index}>{border}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default CountryInfo;
