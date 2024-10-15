import "./CountryList.css"

interface CountriesProps {
  countries: string[];
}
const CountryList: React.FC<CountriesProps> = ({ countries }) => {
  return (
    <div className="scroll-list">
      <ul className="list-group list-group-flush">
        {countries.map((name, index) => (
          <li className="list-group-item list-group-item-action" key={index}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
