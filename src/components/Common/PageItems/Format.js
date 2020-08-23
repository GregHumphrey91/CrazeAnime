import React from "react";
import { Statistic } from "semantic-ui-react";

const Format = ({ format }) => {
  if (format) {
    return (
      <Statistic size="tiny">
        <Statistic.Label>Format</Statistic.Label>
        <Statistic.Value>
          {format === "TV" ? `${format} Show` : format}
        </Statistic.Value>
      </Statistic>
    );
  } else {
    return <></>;
  }
};

export default Format;
