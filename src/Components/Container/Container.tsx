import Countries from "../Countries/Countries";
import CountryInfo from "../CountryInfo/CountryInfo";
import "./Container.css"

const Container = () => {
  return (
    <div>
          <div className="container d-flex m-5">
              <Countries />
              <CountryInfo/>
      </div>
    </div>
  );
};

export default Container;
