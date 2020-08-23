import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Menu, Icon } from "semantic-ui-react";
import { ANIME_DETAILS } from "../../../gql/Queries";
import AnimeInfo from "./AnimeInfo";
import InfoController from "../../Common/Info.controller";
import Spinner from "../../Layout/Spinner";
import Error from "../../Layout/Error";

const Details = ({
  match: {
    params: { id },
  },
}) => {
  const [activeItem, setActiveItem] = useState("Info");
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
  });
  // Apollo Hooks
  const { page, perPage } = pagination;
  const { loading, error, data } = useQuery(ANIME_DETAILS, {
    variables: { id, page, perPage },
    fetchPolicy: "no-cache",
  });

  const handleMenuChange = (e, { name }) => setActiveItem(name);
  const renderAction =
    activeItem === "Info" ? (
      <AnimeInfo data={data} />
    ) : (
      <InfoController
        activeItem={activeItem}
        data={data}
        pagination={pagination}
        setPagination={setPagination}
      />
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
