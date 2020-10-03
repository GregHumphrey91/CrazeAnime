import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Spinner from "../../Layout/Spinner";
import { GENRE_COLLECTION, SEARCH_BY_GENRE } from "../../../gql/Queries";
import Error from "../../Layout/Error";
import Results from "../../Layout/Results";
import SearchMenu from "../../Layout/SearchMenu";

const Home = (props) => {
  // State Hooks
  const [activeGenre, setActiveGenre] = useState("Action");
  const [search, setSearch] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
  });

  // Load Genres
  const { loading: genreLoading, error: genreError, data: genres } = useQuery(
    GENRE_COLLECTION
  );
  const [
    getGenreResults,
    { loading: searchLoading, error: searchError, data: results, fetchMore },
  ] = useLazyQuery(SEARCH_BY_GENRE);

  // Genre Pagination
  useEffect(() => {
    const { page, perPage } = pagination;

    if (activeGenre)
      getGenreResults({
        variables: { search, genre: activeGenre, page, perPage },
      });
  }, [activeGenre, getGenreResults, search, pagination]);

  if (genreLoading || searchLoading) {
    return <Spinner />;
  } else if (genreError || searchError) {
    return <Error error={genreError || searchError} />;
  } else {
    return (
      <div className="home">
        <br />
        <Grid stackable stretched columns={2}>
          <Grid.Column width={3}>
            <SearchMenu
              genres={genres.GenreCollection}
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
              setSearch={setSearch}
            />
          </Grid.Column>
          <Grid.Column width={13}>
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
  }
};
export default Home;
