import React, { FunctionComponent } from "react";
import { CountryType } from "../types";

interface ICountryProps {
  country: CountryType;
}

const Country: FunctionComponent<ICountryProps> = (props) => {
  const { country } = props;
  return (
    <div>
      <p>
        {country.capital} - {country.continents} - {country.flag}
      </p>
    </div>
  );
};

export default Country;
