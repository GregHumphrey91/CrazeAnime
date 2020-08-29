import React from "react";
import { Transition, Label, Statistic } from "semantic-ui-react";

const ExternalLinks = ({ externalLinks }) => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "teal",
    "blue",
    "violet",
    "purple",
    "pink",
    "brown",
    "grey",
    "black",
  ];

  if (externalLinks.length === 0) {
    return <></>;
  }

  return (
    <div className="external-sites">
      <Transition transitionOnMount={true} animation="fade up" duration={500}>
        <>
          <br />
          <Statistic size="mini">
            <Statistic.Value>Available On</Statistic.Value>
          </Statistic>
          <br />
          {externalLinks.map((val, index) => {
            return (
              <Label
                size="large"
                color={colors[index]}
                key={index}
                as="a"
                href={val.url}
              >
                {val.site}
              </Label>
            );
          })}{" "}
          <br />
        </>
      </Transition>
    </div>
  );
};

export default ExternalLinks;
