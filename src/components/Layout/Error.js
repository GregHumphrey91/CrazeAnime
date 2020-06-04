import React from "react";
import { Icon, Header } from "semantic-ui-react";

const Error = ({ error: { message } }) => {
  console.log(message);
  return (
    <div className="error">
      <Header as="h1">
        {" "}
        <Icon size="huge" name="warning sign" />
        Error
      </Header>
      <span>{message}</span>
    </div>
  );
};

export default Error;
