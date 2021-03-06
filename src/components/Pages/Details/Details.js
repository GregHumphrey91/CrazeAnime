import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Menu, Icon } from "semantic-ui-react";
import { ANIME_DETAILS } from "../../../gql/Queries";
import AnimeInfo from "./AnimeInfo";
import Spinner from "../../Layout/Spinner";
import Error from "../../Layout/Error";
import Characters from "./Characters";
import Staff from "./Staff";

const Details = ({
  match: {
    params: { id },
  },
}) => {
  const [activeItem, setActiveItem] = useState("Info");

  // Apollo Hooks
  const { loading, error, data } = useQuery(ANIME_DETAILS, {
    variables: { id },
  });

  const handleMenuChange = (e, { name }) => setActiveItem(name);

  const renderAction =
    activeItem === "Info" ? (
      <AnimeInfo data={data} />
    ) : activeItem === "Characters" ? (
      <Characters id={id} activeItem={activeItem} />
    ) : activeItem === "Staff" ? (
      <Staff id={id} activeItem={activeItem} />
    ) : (
      <></>
    );

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <Error error={error} />;
  } else {
    return (
      <div className="Results">
        <Menu color="red" size="huge">
          <Menu.Item
            name="Info"
            active={activeItem === "Info"}
            onClick={handleMenuChange}
          >
            <Icon name="info" />
            Info
          </Menu.Item>

          <Menu.Item
            name="Characters"
            active={activeItem === "Characters"}
            onClick={handleMenuChange}
          >
            <Icon name="male" />
            <Icon name="female" />
            Characters
          </Menu.Item>

          <Menu.Item
            name="Staff"
            active={activeItem === "Staff"}
            onClick={handleMenuChange}
          >
            <Icon name="users" />
            Staff
          </Menu.Item>
        </Menu>
        {renderAction}
      </div>
    );
  }
};

export default Details;
