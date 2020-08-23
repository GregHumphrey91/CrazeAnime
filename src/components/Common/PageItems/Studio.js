import React from "react";
import { Statistic } from "semantic-ui-react";

const Studio = ({ studioName }) => {
  if (studioName) {
    return (
      <Statistic size="small">
        <Statistic.Label>Studio </Statistic.Label>
        <Statistic.Value>{studioName}</Statistic.Value>
      </Statistic>
    );
  } else {
    return <></>;
  }
};

export default Studio;
