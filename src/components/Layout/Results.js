import React from "react";
import { Segment, Card, Pagination } from "semantic-ui-react";
import Anime from "../Layout/Anime";

const Results = (props) => {
  const { results, pagination, setPagination, loading } = props;
  const {
    Page: { media, pageInfo },
  } = results;
  const { currentPage, lastPage } = pageInfo;

  const changePage = (e, data) => {
    const { activePage } = data;
    setPagination({
      ...pagination,
      page: activePage,
    });
  };

  return (
    <>
      <Segment className="search-results">
        <Card.Group stackable itemsPerRow={6}>
          {media.length !== 0 ? (
            media.map((result, index) => (
              <Anime {...props} key={index} result={result} loading={loading} />
            ))
          ) : (
            <div className="no-results" padded>
              <h1>No Results Found</h1>
            </div>
          )}
        </Card.Group>
      </Segment>
      {media.length !== 0 ? (
        <Pagination
          onPageChange={changePage}
          activePage={currentPage}
          totalPages={lastPage}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Results;
