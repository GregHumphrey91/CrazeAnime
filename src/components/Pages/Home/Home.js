import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Spinner from "../../Layout/Spinner";
import { GENRE_COLLECTION, SEARCH_BY_GENRE } from "../../../gql/Queries";
import Error from "../../Layout/Error";
import Results from "../../Layout/Results";
import CategoryMenu from "../../Layout/CategoryMenu";
import Search from "../Search/Search";

const Home = (props) => {
  // State Hooks
  const [activeGenre, setActiveGenre] = useState("Action");
  const [search, setSearch] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
  });

  // Apollo Hooks
  const { loading: genreLoading, error: genreError, data: genres } = useQuery(
    GENRE_COLLECTION
  );
  const [
    getGenreResults,
    { loading: searchLoading, error: searchError, data: results, fetchMore },
  ] = useLazyQuery(SEARCH_BY_GENRE);

  // Effect Hooks
  useEffect(() => {
    const { page, perPage } = pagination;
    if (activeGenre)
      getGenreResults({
        variables: { search, genre: activeGenre, page, perPage },
      });
  }, [activeGenre, getGenreResults, search, pagination]);

  const renderHomePage = () => (
    <div className="home">
      <Search setSearch={setSearch} />
      <br />
      <Grid stretched columns={2}>
        <Grid.Column width={2}>
          <CategoryMenu
            genres={genres.GenreCollection}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
            setSearch={setSearch}
          />
        </Grid.Column>
        <Grid.Column width={14}>
          {results ? (
            <Results
              {...props}
              loading={searchLoading}
              fetchMore={fetchMore}
              pagination={pagination}
              setPagination={setPagination}
              results={results}
            />
          ) : (
            ""
          )}
        </Grid.Column>
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
