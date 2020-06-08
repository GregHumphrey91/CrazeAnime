import React from "react";
import { Menu } from "semantic-ui-react";

const CategoryMenu = ({ genres, activeGenre, setActiveGenre, setSearch }) => {
  const handleItemClick = (e, { name }) => {
    setActiveGenre(name);
    setSearch(null);
  };

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
      <Menu.Item>
        <Menu.Header as="h1">All Genres</Menu.Header>
      </Menu.Item>
      {menuItems()}
    </Menu>
  );
};
export default CategoryMenu;
