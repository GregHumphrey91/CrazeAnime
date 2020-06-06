import React from "react";
import { Card, Image, Icon, Rating } from "semantic-ui-react";
import moment from "moment";

const Anime = ({ result }) => {
  const {
    title: { english, userPreferred },
    coverImage: { medium },
    startDate,
    endDate,
    averageScore,
    episodes,
  } = result;

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

  const renderRunTime = () => {
    const formatedStartDate = formatDate(startDate);
    const formatedEndDate = formatDate(endDate);

    if (formatedStartDate !== formatedEndDate) {
      return `${formatedStartDate} - ${formatedEndDate}`;
    } else {
      return `${formatedStartDate}`;
    }
  };

  return (
    <div className="anime">
      <Card raised>
        <Image.Group size="small">
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
              {renderRunTime()}
            </span>
          </Card.Meta>
          <br />
          <Card.Description>
            {episodes > 1 ? `${episodes} Episodes` : `${episodes} Episode`}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          Rating:{" "}
          <a>
            <Rating
              icon="star"
              defaultRating={formatRating(averageScore)}
              maxRating={5}
            />
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Anime;
