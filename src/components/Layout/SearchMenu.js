import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import Search from "../Pages/Search/Search";

const SearchMenu = ({ genres, activeGenre, setActiveGenre, setSearch }) => {
  const handleItemClick = (e, { value }) => {
    setActiveGenre(value);
    setSearch(null);
  };

  const getGenres = () => {
    const filteredGenres = genres.filter(
      (genre) => genre !== "Hentai" && genre !== "Ecchi"
    );

    return filteredGenres.map((genre, index) => ({
      key: index,
      text: genre,
      value: genre,
    }));
  };

  return (
    <Menu fluid vertical>
      <Menu.Item>
        <Search setSearch={setSearch} setActiveGenre={setActiveGenre} />
      </Menu.Item>
      <Menu.Item>
        <h3>All Genres</h3>
        <Dropdown
          fluid
          labeled
          placeholder="Genre"
          selection
          options={getGenres()}
          onChange={handleItemClick}
          value={activeGenre}
        />
      </Menu.Item>
    </Menu>
  );
};
export default SearchMenu;
