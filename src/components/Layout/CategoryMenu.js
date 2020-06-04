import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const CategoryMenu = ({ genres }) => {
  const [activeItem, setActive] = useState("");

  const handleItemClick = (e, { name }) => setActive(name);

  const menuItems = () =>
    genres.map((genre, index) => {
      // Don't laugh
      if (genre !== "Hentai")
        return (
          <Menu.Item
            key={index}
            name={genre}
            active={activeItem === genre}
            onClick={handleItemClick}
          >
            {genre}
          </Menu.Item>
        );
    });

  return (
    <Menu className="navbar" size="small" vertical>
      {menuItems()}
    </Menu>
  );
};
export default CategoryMenu;
