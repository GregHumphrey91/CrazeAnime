import React from "react";
import { Pagination, Tab } from "semantic-ui-react";
import Character from "./Character";

const CharacterInfo = ({ data, pagination, setPagination }) => {
  const {
    Media: { characters },
  } = data;

  const { edges: characterArray, pageInfo } = characters;
  const { currentPage, lastPage } = pageInfo;

  const changePage = (e, data) => {
    const { activePage } = data;
    setPagination({
      ...pagination,
      page: activePage,
    });
  };

  const panes = () => {
    let paneArry = [];
    paneArry = characterArray.map((char, index) => {
      const { first, fullName } = char.node.name;
      return {
        menuItem: first ? first : fullName,
        render: () => (
          <Tab.Pane>
            <Character key={index} character={char} />
          </Tab.Pane>
        ),
      };
    });
    return paneArry;
  };

  return (
    <div>
      <Tab
        menu={{ fluid: true, vertical: true, tabular: "right" }}
        panes={panes()}
      />
      <br />
      <Pagination
        onPageChange={changePage}
        activePage={currentPage}
        totalPages={lastPage}
      />
    </div>
  );
};

export default CharacterInfo;
