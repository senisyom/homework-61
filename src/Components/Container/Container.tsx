import "./Container.css";
import Countries from "../Countries/Countries";
import CountryInfo from "../CountryInfo/CountryInfo";
import { BASE_URL } from "../../constant";
import { useCallback, useEffect, useState } from "react";
import { APIcountries } from "../../types";
import axios from "axios";

const Container = () => {
  const [countrieNames, setCountrieNames] = useState<string[]>([]);
  const [countryData, setCountryData] = useState<null | APIcountries>(null);
  const [clickCountryId, setClickCountryId] = useState<null | number>(null);
  const [borders, setBorders] = useState<[]>([]);

  const fetchData = useCallback(async () => {
    const response = await axios.get<APIcountries[]>(BASE_URL);
    const countriesResponse = response.data;

    const names = countriesResponse.map((country) => country.name);
    setCountrieNames(names);
    console.log(response.status);
  }, []);

  const getBorderCountries = async (
    borderAlpha: string[]
  ): Promise<string[]> => {
    const promises = borderAlpha.map(async (alpha) => {
      const response = await axios.get(
        `https://restcountries.com/v2/alpha/${alpha}`
      );
      return response.data.name;
    });
    return Promise.all(promises);
  };

  const fetchCountryData = async (name: string) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${name}`
      );
      const country = response.data[0];
      setCountryData(country);

      const bordersData = country.borders;
      if (bordersData.length > 0) {
        const borderNames = await getBorderCountries(bordersData);
        setBorders(borderNames);
      } else {
        setBorders([]);
      }

      console.log("Границы:", bordersData);
    } catch (error) {
      console.log(error);
    }
  };

  const onCountryClick = (id: number) => {
    setClickCountryId(id);
    const countryName = countrieNames[id];
    fetchCountryData(countryName);
  };

  const addId = (id: number) => {
    setClickCountryId(id);
  };

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className="container d-flex m-5">
        <Countries
          countries={countrieNames}
          id={clickCountryId}
          onClick={onCountryClick}
        />
        <CountryInfo countryData={countryData} borders={borders} />
      </div>
    </div>
  );
};

export default Container;
