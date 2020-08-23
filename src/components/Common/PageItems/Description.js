import React from "react";
import { Transition, Container } from "semantic-ui-react";
import Util from "../../Utils/Util";

const Description = ({ description }) => {
  if (description) {
    let desc = Util.truncate(description, 1400);

    return (
      <Transition transitionOnMount={true} animation="fade down" duration={500}>
        <Container text>
          <br />
          {desc}
        </Container>
      </Transition>
    );
  } else {
    return <>N/A</>;
  }
};

export default Description;
