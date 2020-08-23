import React from "react";
import { Transition, Image } from "semantic-ui-react";

const Profile = ({ large, activeTransition }) => {
  if (large) {
    return (
      <Transition
        transitionOnMount={true}
        directional={activeTransition}
        animation="fade down"
        duration={500}
      >
        <Image circular src={large} wrapped ui={false} />
      </Transition>
    );
  } else {
    return <></>;
  }
};

export default Profile;
