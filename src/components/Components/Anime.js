import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const Anime = ({result}) => {
    console.log(result);
  const {
    title: { english },
    coverImage: { medium },
  } = result;

  return (
    <div className="anime">
      <Card>
        <Image src={medium} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{english}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Anime;
