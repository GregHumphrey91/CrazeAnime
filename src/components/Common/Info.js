import React from "react";
import {
  Segment,
  Statistic,
  Image,
  Rating,
  Rail,
  Grid,
  Transition,
  List,
} from "semantic-ui-react";

const Info = ({ info, activeTransition }) => {
  const { node, role, voiceActors } = info;
  const {
    description,
    image: { large },
    isFavourite,
    name: { first, full, native },
  } = node;

  const renderProfileImage = () => {
    return large ? (
      <Transition
        transitionOnMount={true}
        directional={activeTransition}
        animation="fade down"
        duration={500}
      >
        <Image circular src={large} wrapped ui={false} />
      </Transition>
    ) : (
      ""
    );
  };

  const renderCharacterName = () => {
    return first || full ? (
      <>
        <h1>{full ? full : first}</h1>
        <h2>{native}</h2>
      </>
    ) : (
      <>
        <h2>{native}</h2>
      </>
    );
  };

  const renderDescription = () => {
    return description ? (
      <Transition transitionOnMount={true} animation="fade up" duration={500}>
        <Segment>
          <h2>Bio</h2>
          <br />
          {description && description.replace(/(<([^>]+)>)/gi,"") }
        </Segment>
      </Transition>
    ) : (
      <Transition transitionOnMount={true} animation="fade up" duration={500}>
        <Segment>
          <h2>Bio</h2>
          <br />
          N/A
        </Segment>
      </Transition>
    );
  };

  const renderFanFavorite = () => {
    return isFavourite ? (
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
    ) : (
      <Transition transitionOnMount={true} animation="fade up" duration={500}>
        <Rail>
          <Segment raised>
            Fan Favorite
            <br />
            <Rating icon="heart" defaultRating={0} maxRating={1} />
          </Segment>
        </Rail>
      </Transition>
    );
  };

  const renderCharacterRole = () => {
    return role ? (
      <Transition transitionOnMount={true} animation="fade up" duration={500}>
        <Statistic
          color={
            role === "MAIN" ? "red" : role === "SUPPORTING" ? "blue" : "grey"
          }
        >
          <Statistic.Label>Role</Statistic.Label>
          <Statistic.Value>{role}</Statistic.Value>
        </Statistic>
      </Transition>
    ) : (
      ""
    );
  };

  const renderVoicedBy = () => {
    return voiceActors ? (
      <Transition transitionOnMount={true} animation="fade up" duration={500}>
        <List horizontal size="massive">
          Voiced By
          <br />
          <br />
          {voiceActors.map((actor, index) => {
            const {
              image: { medium },
              name: { first, last, full },
            } = actor;
            return (
              <List.Item key={index}>
                <Image avatar src={medium} />
                <List.Content>
                  <List.Header>{full ? full : `${first} ${last}`}</List.Header>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </Transition>
    ) : (
      ""
    );
  };

  return (
    <Grid className="character" columns={2}>
      <Grid.Row>
        <Grid.Column>
          {renderProfileImage()}
          {renderCharacterName()}
        </Grid.Column>

        <Grid.Column>{renderDescription()}</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>{renderFanFavorite()}</Grid.Column>

        <Grid.Column>{renderCharacterRole()}</Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <br />
          {renderVoicedBy()}
        </Grid.Column>

        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Info;
