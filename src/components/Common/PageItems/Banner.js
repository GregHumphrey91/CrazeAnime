import React from "react";
import { Transition, Image } from "semantic-ui-react";

const Banner = ({ bannerImage, medium }) => {
  if (bannerImage) {
    return (
      <Transition transitionOnMount={true} animation="fade down" duration={500}>
        <Image className="banner" size="massive" src={bannerImage} />
      </Transition>
    );
  } else if (medium) {
    return (
      <Transition transitionOnMount={true} animation="fade down" duration={500}>
        <Image className="banner" size="medium" src={medium} />
      </Transition>
    );
  } else {
    return <></>;
  }
};

export default Banner;
