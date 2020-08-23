import React from "react";
import { Statistic } from "semantic-ui-react";

const Episodes = ({ episodes }) => {
  if (episodes) {
    return (
      <Statistic>
        <Statistic.Label># of Episodes</Statistic.Label>
        <Statistic.Value>{episodes}</Statistic.Value>
      </Statistic>
    );
  } else {
    return <></>;
  }
};

export default Episodes;
