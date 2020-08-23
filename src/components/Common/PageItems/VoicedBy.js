import React from "react";
import { Transition, List, Image } from "semantic-ui-react";

const VoicedBy = ({ voiceActors }) => {
  if (voiceActors) {
    return (
      <Transition transitionOnMount={true} animation="fade up" duration={500}>
        <List horizontal size="medium">
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
    );
  } else {
    return <></>;
  }
};

export default VoicedBy;
