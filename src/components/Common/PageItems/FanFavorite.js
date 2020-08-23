import React from "react";
import { Rail, Rating, Segment, Transition } from "semantic-ui-react";

const FanFavorite = ({ isFavourite }) => {
  return (
    <Transition transitionOnMount={true} animation="fade up" duration={500}>
      <Rail>
        <Segment raised>
          Fan Favorite <br />
          <Rating
            icon="heart"
            defaultRating={isFavourite ? 1 : 0}
            maxRating={1}
          />
        </Segment>
      </Rail>
    </Transition>
  );
};

export default FanFavorite;
