import gql from "graphql-tag";

export const SEARCH_BY_NAME = gql`
  query($search: String) {
    Media(search: $search, type: ANIME) {
      id
      title {
        english
        native
        userPreferred
      }
      coverImage {
        medium
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
  query($search: String, $genre: String, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }

      media(search: $search, genre: $genre, type: ANIME) {
        id
        idMal

        title {
          english
          native
          userPreferred
        }

        coverImage {
          medium
        }

        startDate {
          day
          month
          year
        }

        endDate {
          day
          month
          year
        }

        season

        seasonYear

        seasonInt

        episodes

        averageScore
      }
    }
  }
`;

export const ANIME_DETAILS = gql`
  query($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        english
        userPreferred
      }
      coverImage {
        medium
      }

      studios(isMain: true) {
        nodes {
          name
        }
      }

      idMal

      type

      format

      status

      description(asHtml: false)

      startDate {
        day
        month
        year
      }

      endDate {
        day
        month
        year
      }

      season

      seasonYear

      seasonInt

      episodes

      duration

      chapters

      volumes

      countryOfOrigin

      isLicensed

      hashtag

      trailer {
        id
        site
        thumbnail
      }

      updatedAt

      coverImage {
        medium
        color
      }

      bannerImage

      genres

      synonyms

      averageScore

      meanScore

      popularity

      isLocked

      trending

      favourites

      isFavourite

      isAdult

      nextAiringEpisode {
        id
        airingAt
        timeUntilAiring
        episode
        media {
          title {
            english
          }
        }
      }

      externalLinks {
        id
        url
        site
      }
      streamingEpisodes {
        title
        thumbnail
        url
        site
      }

      rankings {
        id
        rank
        year
        allTime
        context
      }

      siteUrl

      autoCreateForumThread
      isRecommendationBlocked
      modNotes
    }
  }
`;

export const ANIME_CHARACTERS = gql`
  query($id: Int, $page: Int, $perPage: Int) {
    Media(id: $id, type: ANIME) {
      id

      characters(page: $page, perPage: $perPage) {
        pageInfo {
          currentPage
          lastPage
          perPage
          total
        }
        edges {
          node {
            id
            name {
              first
              last
              full
              native
            }
            image {
              large
            }
            description(asHtml: false)
            isFavourite
            siteUrl
          }

          role

          voiceActors(sort: LANGUAGE) {
            image {
              medium
            }

            name {
              first
              last
              full
              native
            }
          }
        }
      }
    }
  }
`;

export const ANIME_STAFF = gql`
  query($id: Int, $page: Int, $perPage: Int) {
    Media(id: $id, type: ANIME) {
      id

      staff(page: $page, perPage: $perPage) {
        pageInfo {
          currentPage
          lastPage
          perPage
          total
        }

        edges {
          id
          role

          node {
            favourites
            isFavourite
            description(asHtml: false)

            image {
              large
              medium
            }

            name {
              first
              last
              full
              native
              alternative
            }
          }
        }
      }
    }
  }
`;
