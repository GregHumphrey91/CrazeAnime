import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const SearchBar = ({ setSearch }) => {
  const [state, setState] = useState("");

  const onChange = (e) => setState(e.target.value);

  const onSubmit = (e) => {
    setSearch(state.trim());
    setState("");
  };
  return (
    <>
      <Form className="searchbar" onSubmit={onSubmit}>
        <Form.Input
          icon="search"
          labelPosition="right"
          placeholder="Search"
          onChange={onChange}
          value={state}
          required
        />
      </Form>
    </>
  );
};

export default SearchBar;
