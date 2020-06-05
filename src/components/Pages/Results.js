import React from "react";
import { Segment } from "semantic-ui-react";
import Anime from "../Components/Anime";

const Results = ({ results }) => {
  const {
    Page: { media, pageInfo },
  } = results;
  console.log(media);
  return (
    <Segment className="search-results">
      {media &&
        media.map((result, index) => <Anime index={index} result={result} />)}
    </Segment>
  );
};

export default Results;
