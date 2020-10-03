import React from "react";
import { Card, Image, Rating, Transition } from "semantic-ui-react";
import moment from "moment";

const Anime = (props) => {
  const { result } = props;
  const {
    id,
    title: { english, userPreferred },
    coverImage: { medium },
    startDate,
    endDate,
    averageScore,
    episodes,
  } = result;

  const showDetails = () => {
    props.history.push({
      pathname: `/details/${id}`,
    });
  };

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

  const formatRating = (score) => {
    return Math.round(score / 20);
  };

  const formatedStartDate = formatDate(startDate);
  const formatedEndDate = formatDate(endDate);

  return (
    <div className="anime">
      <Transition transitionOnMount={true} animation="fade" duration={500}>
        <Card raised onClick={showDetails}>
          <Image.Group size="tiny">
            <Image className="thumbnail" src={medium} wrapped ui={false} />
          </Image.Group>
          <Card.Content>
            <Card.Header className="title">
              {english ? english : userPreferred}
            </Card.Header>
            <br />
            <Card.Meta>
              <span className="date">
                <h4>Original Runtime</h4>
                {formatedStartDate !== formatedEndDate
                  ? `${formatedStartDate} - ${formatedEndDate}`
                  : `${formatedStartDate}`}
              </span>
            </Card.Meta>
            <br />
            <Card.Description>
              {episodes > 1
                ? `${episodes} Episodes`
                : !episodes
                ? ""
                : `${episodes} Episode`}
            </Card.Description>
          </Card.Content>
          {averageScore ? (
            <Card.Content extra>
              Rating:{" "}
              <Rating
                icon="star"
                defaultRating={formatRating(averageScore)}
                maxRating={5}
              />
            </Card.Content>
          ) : (
            <Card.Content>Not yet rated</Card.Content>
          )}
        </Card>
      </Transition>
    </div>
  );
};

export default Anime;
