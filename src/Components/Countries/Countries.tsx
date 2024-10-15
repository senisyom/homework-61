import CountryList from "./CountryList/CountryList";
interface CountriesProps {
  countries: string[];
}

const Countries: React.FC<CountriesProps> = ({ countries }) => {
  return (
    <div className="card" style={{ width: "25%" }}>
      <CountryList countries={countries} />
    </div>
  );
};

export default Countries;
