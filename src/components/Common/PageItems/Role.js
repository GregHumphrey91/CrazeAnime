import React from "react";
import { Transition, Statistic } from "semantic-ui-react";

const Role = ({ role }) => {
  if (role) {
    return (
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
    );
  } else {
    return <></>;
  }
};

export default Role;
