import React from "react";
import { MockedProvider } from "@apollo/react-testing";

import gql from "graphql-tag";
import { render, act, findAllByText, cleanup } from "@testing-library/react";

import { GENRE_COLLECTION } from "../../gql/Queries";

import Home from "../../components/Pages/Home/Home";
import { mocks } from "../__mocks__/mockedQueries";

const { getByText, container, debug } = render(
  <MockedProvider mocks={mocks}>
    <Home />
  </MockedProvider>
);

describe(() => {
  beforeEach(() => {});
  test("Test Home Page", async (done) => {
    console.log(debug());
    expect().toNotBe(null);
    done();
  });
});
