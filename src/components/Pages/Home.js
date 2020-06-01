import React, { useState } from "react";
import { Divider, Form, Segment, Button } from "semantic-ui-react";

const Home = () => {
  const [state, setState] = useState("");

  const onChange = (e) => setState(e.target.value);

  const search = (e) => {
    console.log(state);
    setState("");
  };

  return (
    <div className="home">
      <Divider />
      <Segment>
        <Form onSubmit={search}>
          <Form.Field>
            <Form.Input
              id="search"
              name="search"
              placeholder="Restaurants, Shops, etc."
              icon="search"
              onChange={onChange}
              value={state}
            />
          </Form.Field>
        </Form>
      </Segment>
    </div>
  );
};

export default Home;
