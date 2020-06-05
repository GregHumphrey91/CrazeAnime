import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const Search = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const search = () => {};

  return (
    <div className="search">
      <Form onSubmit={search}>
        <Form.Field>
          <Form.Input
            id="search"
            name="search"
            placeholder="Anime"
            icon="search"
            onChange={onChange}
            value={value}
          />
        </Form.Field>
      </Form>
    </div>
  );
};

export default Search;
