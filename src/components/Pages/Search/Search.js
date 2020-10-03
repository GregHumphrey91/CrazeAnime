import React, { useState } from "react";
import { Input } from "semantic-ui-react";

const SearchBar = ({ setSearch, setActiveGenre }) => {
  const [state, setState] = useState("");

  const onChange = (e) => setState(e.target.value);

  const onSubmit = (e) => {
    if (e.charCode === 13) {
      setSearch(state.trim());
      setActiveGenre("Action");
      setState("");
    }
  };

  return (
    <Input
      icon="search"
      placeholder="Search"
      onChange={onChange}
      onKeyPress={onSubmit}
      value={state}
    />
  );
};

export default SearchBar;
