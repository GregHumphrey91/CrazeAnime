import React from "react";
import { Statistic, Flag } from "semantic-ui-react";
import { countries } from "../../Utils/Countries";

const CountryName = ({ countryOfOrigin }) => {
  const countryName = (countryCode) => {
    const matchingCountry = countries.filter(
      (country) => country.countryCode === countryCode
    );
    return matchingCountry[0].name;
  };

  if (countryOfOrigin) {
    return (
      <Statistic size="tiny">
        <Statistic.Label>
          Origin <Flag className="flag" name={countryOfOrigin.toLowerCase()} />
        </Statistic.Label>
        <Statistic.Value>
          {countryName(countryOfOrigin.toLowerCase())}
        </Statistic.Value>
      </Statistic>
    );
  } else {
    return <></>;
  }
};

export default CountryName;
