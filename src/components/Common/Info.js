import React from "react";
import { Grid } from "semantic-ui-react";
import { Description, VoicedBy, Role, FanFavorite, Profile } from "./PageItems";

const Info = ({ info, activeTransition }) => {
  const { node, role, voiceActors } = info;
  const {
    description,
    image: { large },
    isFavourite,
    name: { first, full, native },
  } = node;

  const renderCharacterName =
    first || full ? (
      <>
        <h1>{full ? full : first}</h1>
        <h2>{native}</h2>
      </>
    ) : (
      <>
        <h2>{native}</h2>
      </>
    );

  return (
    <Grid stackable className="character" columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Profile large={large} activeTransition={activeTransition} />
          {renderCharacterName}
        </Grid.Column>

        <Grid.Column>
          <h2>Bio</h2>
          <Description description={description} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <FanFavorite isFavourite={isFavourite} />
        </Grid.Column>

        <Grid.Column>
          <Role role={role} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <br />
          <VoicedBy voiceActors={voiceActors} />
        </Grid.Column>

        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Info;
