import React, { useState } from "react";
import { ANIME_STAFF } from "../../../gql/Queries";
import { useQuery } from "@apollo/react-hooks";
import InfoController from "../../Common/Info.controller";
import Spinner from "../../Layout/Spinner";
import Error from "../../Layout/Error";

const Staff = ({ id, activeItem }) => {
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
  });
  const { page, perPage } = pagination;

  const { loading, error, data } = useQuery(ANIME_STAFF, {
    variables: { id, page, perPage },
  });

  let res = {};

  if (data) {
    const { edges, pageInfo } = data.Media.staff;
    res = { edges, pageInfo };
  }

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <InfoController
        activeItem={activeItem}
        edges={res.edges}
        pageInfo={res.pageInfo}
        setPagination={setPagination}
        pagination={pagination}
        loading={loading}
        error={error}
        data={data}
      />
    </>
  );
};

export default Staff;
