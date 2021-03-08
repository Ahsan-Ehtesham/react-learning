import React from "react";

const Search = ({ children, onInputChange,searchKey }) => {
  return (
    <>
      {children}
      <input
        type="text"
        placeholder="Search Here..."
        value={searchKey}
        onChange={e => onInputChange(e.target.value)}
      />
    </>
  );
};

export default Search;
