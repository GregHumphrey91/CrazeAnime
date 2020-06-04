import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Menu size="massive">
        <Menu.Item>
          <NavLink exact to="/">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
