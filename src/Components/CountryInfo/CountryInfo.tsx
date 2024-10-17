interface Props {
  countryData: any;
}

const CountryInfo: React.FC<Props> = ({ countryData }) => {

    if (!countryData) {
        return ('Выберите одну страну')
    }
    return (
      <div className="card card-body ms-3 me-3 d-flex">
            <h3>{countryData.name}</h3>
            <hr />
            <p>Столица: {countryData.capital}</p>
            <hr />
            <p> Население: {countryData.population}</p>
            <hr />
            <p>Граничит с: {countryData.borders}</p>
      </div>
    );
    
};

export default CountryInfo;
