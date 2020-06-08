import { GENRE_COLLECTION } from "../../gql/Queries";
import { FakedGenreCategoryResponse } from "./FakedApiResponses";

export const mocks = [
  {
    request: {
      query: GENRE_COLLECTION,
    },
    result: {
      data: {
        FakedGenreCategoryResponse,
      },
    },
  },
  //   {
  //     request: {
  //       query: SOME_QUERY,
  //       variables: { first: 8 },
  //     },
  //     error: new Error("Something went wrong"),
  //   },
];
