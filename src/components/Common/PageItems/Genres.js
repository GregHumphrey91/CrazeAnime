import React from "react";
import { Label, Transition, Rail, Segment } from "semantic-ui-react";

const Genres = ({ genres }) => {
  if (genres) {
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

    return (
      <Transition transitionOnMount={true} animation="fade up" duration={500}>
        <Rail internal position="right">
          <Segment raised>
            <h4>Genres </h4>
            {genres.map((genre, index) => (
              <Label key={index} color={colors[index]}>
                {genre}
              </Label>
            ))}
          </Segment>
        </Rail>
      </Transition>
    );
  } else {
    return <></>;
  }
};

export default Genres;
