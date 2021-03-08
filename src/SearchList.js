import React from "react";
import "./SearchList.css";

const SearchList = ({ list }) => {
  return (
    <ul className="list">
      {list.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default SearchList;
