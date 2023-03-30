import React from 'react';

const SearchBar = ({ placeholder, changeHandler }) => {
  return (
  <div className="searchbar-container">
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={changeHandler}
    />
  </div>
);
};

export default SearchBar;