import React from "react";
import { Statistic } from "semantic-ui-react";

const Popularity = ({ popularity }) => {
  if (popularity) {
    return (
      <Statistic color="blue">
        <Statistic.Label>Popularity</Statistic.Label>
        <Statistic.Value>{popularity}</Statistic.Value>
      </Statistic>
    );
  } else {
    return <></>;
  }
};

export default Popularity;
