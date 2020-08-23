import React from "react";
import { Statistic } from "semantic-ui-react";
import moment from "moment";

const RunTime = ({ startDate, endDate }) => {
  const formatDate = (data) => {
    if (data.year && data.month && data.day) {
      // month arr is 0 index based
      const month = data.month - 1;
      const day = data.day;
      const year = data.year;

      return moment([year, month, day]).format("MMM D YYYY");
    } else {
      return "Ongoing";
    }
  };

  const renderRunTime = () => {
    const formatedStartDate = formatDate(startDate);
    const formatedEndDate = formatDate(endDate);

    if (formatedStartDate !== formatedEndDate) {
      return `${formatedStartDate} - ${formatedEndDate}`;
    } else {
      return `${formatedStartDate}`;
    }
  };

  if (startDate) {
    return (
      <Statistic size="tiny">
        <Statistic.Label>Original Run</Statistic.Label>
        <Statistic.Value>{renderRunTime()}</Statistic.Value>
      </Statistic>
    );
  } else {
    return <></>;
  }
};

export default RunTime;
