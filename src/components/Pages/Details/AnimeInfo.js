import React, { Fragment } from "react";
import { Grid, Segment, Header, Divider } from "semantic-ui-react";
import {
  Rating,
  Format,
  Genres,
  Description,
  Banner,
  RunTime,
  Episodes,
  CountryName,
  Popularity,
  Studio,
} from "../../Common/PageItems/index";

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

  return (
    <div className="anime-details">
      <Header as="h1">{english ? english : userPreferred}</Header>
      <Banner bannerImage={bannerImage} medium={medium} />
      <Description description={description} />
      <Segment>
        <Grid columns={2} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Rating averageScore={averageScore} />
              <Fragment>
                <Format format={format} />
                <br />
                <br />
                <Episodes episodes={episodes} />
                <br />
                <br />
                <RunTime startDate={startDate} endDate={endDate} />
                <br />
                <br />
              </Fragment>
            </Grid.Column>
            <Divider vertical />
            <Grid.Column>
              <Genres genres={genres} />
              <Popularity popularity={popularity} />
              <br />
              <br />
              <CountryName countryOfOrigin={countryOfOrigin} />
              <br />
              <br />
              <Studio studioName={studioName} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default AnimeInfo;
