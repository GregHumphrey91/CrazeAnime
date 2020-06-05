import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Spinner from "../Layout/Spinner";
import { GENRE_COLLECTION, SEARCH_BY_GENRE } from "../../gql/Queries";
import Error from "../Layout/Error";
import Search from "./Search";
import Results from "./Results";
import CategoryMenu from "../Layout/CategoryMenu";

const Home = () => {
  const [activeGenre, setActiveGenre] = useState("");

  const { loading: genreLoading, error: genreError, data: genres } = useQuery(
    GENRE_COLLECTION
  );
  const [
    getGenreResults,
    { loading: searchLoading, error: searchError, data: results },
  ] = useLazyQuery(SEARCH_BY_GENRE);

  useEffect(() => {
    if (activeGenre)
      getGenreResults({
        variables: { genre: activeGenre, page: 1, perPage: 3 },
      });
  }, [activeGenre, getGenreResults]);

  const renderHomePage = () => (
    <div className="home">
      <Grid columns={2}>
        <Grid.Column width={2}>
          <CategoryMenu
            genres={genres.GenreCollection}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
        </Grid.Column>
        <Search />
        {results ? <Results results={results} /> : ""}
        <Grid.Column width={14}></Grid.Column>
      </Grid>
    </div>
  );

  if (genreLoading || searchLoading) {
    return <Spinner />;
  } else if (genreError || searchError) {
    return <Error error={genreError || searchError} />;
  } else {
    return renderHomePage();
  }
};
export default Home;
