import React from "react";
import { Segment, Card, Image } from "semantic-ui-react";
import Anime from "../Components/Anime";

const Results = ({ results }) => {
  const {
    Page: { media, pageInfo },
  } = results;
 
  return (
    <Segment className="search-results"  >
      <Card.Group stackable  itemsPerRow={6}>
      
        {media &&
          media.map((result, index) => <Anime key={index} result={result} />)}
      </Card.Group>
    </Segment>
  );
};

export default Results;
