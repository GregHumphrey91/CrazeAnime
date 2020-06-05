import gql from "graphql-tag";

export const ANIME_LIST = gql`
  query($id: Int) {
    Media(id: $id, type: ANIME) {
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
  query($genre: String, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }

      media(genre: $genre, type: ANIME) {
        id
        title {
          english
        }
        coverImage {
          medium
        }
      }
    }
  }
`;
