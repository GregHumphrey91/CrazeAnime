import React from "react";
import { Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Segment className="navbar" inverted>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/next">
        {" "}
        Next
      </NavLink>
      <NavLink to="about">About</NavLink>
    </Segment>
  );
};

export default Navbar;
