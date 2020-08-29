import React from "react";
import { Tab, Pagination } from "semantic-ui-react";
import Info from "./Info";

const InfoController = ({
  activeItem,
  edges,
  pageInfo,
  pagination,
  setPagination,
}) => {
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
    <div className="info-controller container">
      <Tab
        menu={{ fluid: true, vertical: true, tabular: "right" }}
        panes={panes()}
      />
      <br />
      <Pagination
        className="pagination"
        onPageChange={changePage}
        activePage={currentPage}
        totalPages={lastPage}
      />
    </div>
  );
};

export default InfoController;
