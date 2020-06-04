import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import Spinner from "../Layout/Spinner";
import { GENRE_COLLECTION, SEARCH_BY_GENRE } from "../../gql/Queries";
import Error from "../Layout/Error";
import Search from "./Search";
import CategoryMenu from "../Layout/CategoryMenu";
import { getGenre } from "../../gql/Hooks";

const Home = () => {
  const [state, setState] = useState("");

  const { loading, error, data } = useQuery(GENRE_COLLECTION);

  const handleSearch = (value) => {
    getGenre(value);
  };


  const renderHomePage = () => (
    <div className="home">
      <Grid columns={2}>
        <Grid.Column width={2}>
          <CategoryMenu genres={data.GenreCollection} />
        </Grid.Column>

        <Grid.Column width={14}>
          <Search handleSearch={handleSearch} />
        </Grid.Column>
      </Grid>
    </div>
  );

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <Error error={error} />;
  } else {
    return renderHomePage();
  }
};
export default Home;
