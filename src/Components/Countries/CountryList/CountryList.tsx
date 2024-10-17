import "./CountryList.css";
import { useEffect } from "react";

interface CountriesProps {
  countries: string[];
  onClick: React.MouseEventHandler;
  id: number;
}
const CountryList: React.FC<CountriesProps> = ({ countries, onClick, id }) => {
  useEffect(() => {
    console.log("Display post id = ", id);
  }, [id]);

  return (
    <div className="scroll-list">
      <ul className="list-group list-group-flush">
        {countries.map((name, index) => (
          <li
            className="list-group-item list-group-item-action"
            key={index}
            onClick={() => onClick(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
