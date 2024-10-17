import "./Container.css";
import Countries from "../Countries/Countries";
import CountryInfo from "../CountryInfo/CountryInfo";
import { BASE_URL } from "../../constant";
import { useCallback, useEffect, useState } from "react";
import { APIcountries } from "../../types";
import axios from "axios";

const Container = () => {
  const [countrieNames, setCountrieNames] = useState<string[]>([]);
  const [clickCountryId, setClickCountryId] = useState<null | number>(null)

  const fetchData = useCallback(async () => {
    const response = await axios.get<APIcountries[]>(BASE_URL);
    const countriesResponse = response.data;

    const names = countriesResponse.map((country) => country.name);
    setCountrieNames(names);
    console.log(names);
    console.log(response.status); 
  }, []);

  const addId = (id: number) => {
    setClickCountryId(id)
  }

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className="container d-flex m-5">
        <Countries countries={countrieNames} id={clickCountryId} onClick={addId} />
        <CountryInfo/>
      </div>
    </div>
  );
};

export default Container;
