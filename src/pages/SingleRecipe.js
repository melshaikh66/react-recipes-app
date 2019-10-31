import React, { Component } from "react";
import { recipeData } from "../data/tempDetails";
import { Link } from "react-router-dom";

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return <h4>Hello from single recipe page</h4>;
  }
}
