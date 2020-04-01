import React, { Component } from "react";

class SearchBar extends Component {


inputHandler = (event) => {
    let inputValue = event.target.value 
    this.props.childData(inputValue)
}

  render() {
    return (
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          value= {this.inputValue}
          onChange={event => this.inputHandler(event)}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
