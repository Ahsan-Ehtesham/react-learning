import React, { Component } from "react";
import Search from "./Search";
import SearchList from "./SearchList";
import "./SearchList.css";

class SearchableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "",
      newSearchList: [],
      searchList: ["Apple", "Banana", "Cat", "Dog", "Egg", "Fish","Airplane","Air","Hello","World","Hen"],
    };
  }
  handleInputChange = (value) => {
    const { searchList } = this.state;
    const list = searchList.filter((item) => {
      return item.startsWith(value);
    });
    this.setState({ searchWord: value }, () => {
      this.setState({ newSearchList: list });
    });
  };
  render() {
    const { searchWord, newSearchList } = this.state;
    return (
      <div className="listWrapper">
        <Search searchKey={searchWord} onInputChange={this.handleInputChange}>
          Search:
        </Search>
        {this.state.searchWord ? (
          <SearchList list={newSearchList} />
        ) : null}
      </div>
    );
  }
}

export default SearchableList;
