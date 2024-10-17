import CountryList from "./CountryList/CountryList";

interface CountriesProps {
  countries: string[];
  id: number;
  onClick: React.MouseEventHandler;
}

const Countries: React.FC<CountriesProps> = ({ countries, onClick, id }) => {
  return (
    <div className="card" style={{ width: "25%" }}>
      <CountryList
        countries={countries}
        onClick={onClick}
        id={id}
      />
    </div>
  );
};

export default Countries;
