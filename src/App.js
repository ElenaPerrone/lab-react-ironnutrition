import React, { Component } from "react";
import foods from "./foods.json";
import Foodbox from "./Foodbox";
import SearchBar from './SearchBar'
import "./App.css";

class App extends Component {
  state = {
    foods: foods
  };

showFood = (data) => {
  if (data.length > 0) {
    let newFoodArray = foods.filter(food => food.name.includes(data)) //filters through the json file
    this.setState({
      foods: newFoodArray
    })
  } else if (data.length === 0) {
    this.setState({
      foods: foods
    })
  }
}

  render() {
    return (
      <div className="App">
      <SearchBar 
      childData = {this.showFood}/>

        {this.state.foods.map(oneFood => (
          <Foodbox 
          key={oneFood.name} 
          food={oneFood} />
        ))}
      </div>
    );
  }
}

export default App;
