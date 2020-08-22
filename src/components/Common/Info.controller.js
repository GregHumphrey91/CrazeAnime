import React from "react";
import { Tab, Pagination } from "semantic-ui-react";
import Info from "./Info";

const InfoController = ({ activeItem, data, pagination, setPagination }) => {
  const {
    Media: { characters, staff },
  } = data;

  const { edges, pageInfo } =
    activeItem === "Staff"
      ? staff
      : activeItem === "Characters"
      ? characters
      : [];

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

    paneArry = edges.map((edge) => {
      const { first, fullName } = edge.node.name;

      const displayRegName = first ? first : fullName;
      const displaytruncName = `${
        first ? first : fullName
      } \n (${edge.role.slice(0, 18)})`;
      const displayName =
        activeItem === "Staff" ? displaytruncName : displayRegName;

      return {
        menuItem: displayName,
        render: () => (
          <Tab.Pane key={edge.id}>
            <Info key={edge.id} info={edge} />
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

export default InfoController;
