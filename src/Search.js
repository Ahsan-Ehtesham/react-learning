import React from "react";
import PropTypes from "prop-types";

const Search = ({ children, onInputChange, searchKey }) => {
  return (
    <>
      {children}
      <input
        type="text"
        placeholder="Search Here..."
        value={searchKey}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </>
  );
};

Search.PropTypes={
  children:PropTypes.node,
  onInputChange:PropTypes.func,
  searchKey:PropTypes.string
}

export default Search;
