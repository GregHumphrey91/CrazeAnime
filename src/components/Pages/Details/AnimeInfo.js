import React, { Fragment } from "react";
import {
  Grid,
  Segment,
  Image,
  Header,
  Divider,
  Icon,
  Container,
  Rail,
  Statistic,
  Transition,
  Label,
  Flag,
} from "semantic-ui-react";
import moment from "moment";
import { countries } from "../../Utils/Countries";

const AnimeInfo = ({ data }) => {
  const {
    Media: {
      averageScore,
      bannerImage,
      coverImage: { medium },
      countryOfOrigin,
      description,
      startDate,
      endDate,
      episodes,
      format,
      genres,
      popularity,
      studios: { nodes },
      title: { english, userPreferred },
    },
  } = data;
  const { name: studioName } = nodes[0] || {};

  const renderRating = () => {
    if (averageScore) {
      return (
        <Transition transitionOnMount={true} animation="fade up" duration={500}>
          <Rail>
            <Segment raised>
              <Statistic color={averageScore < 60 ? "red" : "green"} size="">
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
      return "";
    }
  };

  const renderGenres = () => {
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
                <Label color={colors[index]}>{genre}</Label>
              ))}
            </Segment>
          </Rail>
        </Transition>
      );
    } else {
      return "";
    }
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

  const renderRunTime = () => {
    const formatedStartDate = formatDate(startDate);
    const formatedEndDate = formatDate(endDate);

    if (formatedStartDate !== formatedEndDate) {
      return `${formatedStartDate} - ${formatedEndDate}`;
    } else {
      return `${formatedStartDate}`;
    }
  };

  const renderStatsLeft = () => {
    return (
      <Fragment>
        {format ? (
          <Statistic size="tiny">
            <Statistic.Label>Format</Statistic.Label>
            <Statistic.Value>
              {format === "TV" ? `${format} Show` : format}
            </Statistic.Value>
          </Statistic>
        ) : (
          ""
        )}
        <br />
        <br />
        {episodes ? (
          <Statistic>
            <Statistic.Label># of Episodes</Statistic.Label>
            <Statistic.Value>{episodes}</Statistic.Value>
          </Statistic>
        ) : (
          ""
        )}
        <br />
        <br />
        {startDate ? (
          <Statistic size="tiny">
            <Statistic.Label>Original Run</Statistic.Label>
            <Statistic.Value>{renderRunTime()}</Statistic.Value>
          </Statistic>
        ) : (
          ""
        )}
        <br />
        <br />
      </Fragment>
    );
  };
  const countryName = (countryCode) => {
    const matchingCountry = countries.filter(
      (country) => country.countryCode === countryCode
    );
    return matchingCountry[0].name;
  };

  const renderStatsRight = () => {
    return (
      <Fragment>
        {popularity ? (
          <Statistic color="blue">
            <Statistic.Label>Popularity</Statistic.Label>
            <Statistic.Value>{popularity}</Statistic.Value>
          </Statistic>
        ) : (
          ""
        )}
        <br />
        <br />
        {countryOfOrigin ? (
          <Statistic size="tiny">
            <Statistic.Label>
              Origin{" "}
              <Flag className="flag" name={countryOfOrigin.toLowerCase()} />
            </Statistic.Label>
            <Statistic.Value>
              {countryName(countryOfOrigin.toLowerCase())}
            </Statistic.Value>
          </Statistic>
        ) : (
          ""
        )}
        <br />
        <br />
        {studioName ? (
          <Statistic size="small">
            <Statistic.Label>Studio </Statistic.Label>
            <Statistic.Value>{studioName}</Statistic.Value>
          </Statistic>
        ) : (
          ""
        )}
      </Fragment>
    );
  };

  const renderBanner = () => {
    if (bannerImage) {
      return (
        <Transition
          transitionOnMount={true}
          animation="fade down"
          duration={500}
        >
          <Image className="banner" size="massive" src={bannerImage} />
        </Transition>
      );
    } else {
      return (
        <Transition
          transitionOnMount={true}
          animation="fade down"
          duration={500}
        >
          <Image className="banner" size="medium" src={medium} />
        </Transition>
      );
    }
  };

  const renderDescription = () => {
    if (description) {
      return (
        <Transition
          transitionOnMount={true}
          animation="fade down"
          duration={500}
        >
          <Container text>
            <br />
            {description.replace(/(<([^>]+)>)/gi, "")}
          </Container>
        </Transition>
      );
    } else {
      return "";
    }
  };

  return (
    <div className="anime-details">
      <Header as="h1">{english ? english : userPreferred}</Header>
      {renderBanner()}
      {renderDescription()}
      <Segment>
        <Grid columns={2} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              {renderRating()}
              {renderStatsLeft()}
            </Grid.Column>
            <Divider vertical />
            <Grid.Column>
              {renderGenres()}
              {renderStatsRight()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default AnimeInfo;
