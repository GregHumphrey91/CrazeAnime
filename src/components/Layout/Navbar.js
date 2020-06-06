import React from "react";
import { Menu, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import Search from "../Pages/Search";

const Navbar = () => {
  return (
    <div className="navbar">
      <Menu size="massive" secondary inverted>
        <Menu.Item>
          <NavLink exact to="/">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
        <Menu.Item position="right">
          <Menu.Header as="h1">Craze Anime</Menu.Header>
        </Menu.Item>
        <Menu.Item position="right">
          <Search />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
