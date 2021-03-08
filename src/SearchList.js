import React from "react";
import PropTypes from 'prop-types'
import "./SearchList.css";
import Search from "./Search";

const SearchList = ({ list }) => {
  return (
    <ul className="list">
      {list.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

SearchList.PropTypes={
  list:PropTypes.array
}

export default SearchList;
