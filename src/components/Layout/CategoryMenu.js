import React from "react";
import { Menu } from "semantic-ui-react";

const CategoryMenu = ({ genres, activeGenre, setActiveGenre }) => {
  const handleItemClick = (e, { name }) => setActiveGenre(name);

  const menuItems = () =>
    genres.map((genre, index) => {
      // Don't laugh
      if (genre !== "Hentai" && genre !== "Ecchi")
        return (
          <Menu.Item
            key={index}
            name={genre}
            active={activeGenre === genre}
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
