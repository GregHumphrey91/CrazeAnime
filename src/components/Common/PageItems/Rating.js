import React from "react";
import { Transition, Rail, Segment, Statistic, Icon } from "semantic-ui-react";

const Rating = ({ averageScore }) => {
  if (averageScore) {
      
    return (
      <Transition transitionOnMount={true} animation="fade up" duration={500}>
        <Rail>
          <Segment raised>
            <Statistic color={averageScore < 60 ? "red" : "green"}>
              <Statistic.Label>Score</Statistic.Label>
              <Statistic.Value>
                {averageScore}{" "}
                <Icon name={averageScore < 60 ? "frown" : "smile"} />
              </Statistic.Value>
            </Statistic>
          </Segment>
        </Rail>
      </Transition>
    );
  } else {
    return <> </>;
  }
};

export default Rating;
