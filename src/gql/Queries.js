import gql from "graphql-tag";

export const ANIME_LIST = gql`
  query($id: Int) {
    # Define which variables will be used in the query (id)
    Media(id: $id, type: ANIME) {
      # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
      id
      title {
        romaji
        english
        native
      }
    }
  }
`;

export const GENRE_COLLECTION = gql`
  query {
    GenreCollection
  }
`;

export const SEARCH_BY_GENRE = gql`
  query($genre_in: [String]) {
    Media(genre_in: $genre_in, type: ANIME) {
      id
      title {
        english
      }
    }
  }
`;
