import React, { Component } from "react";

export default class Gray extends Component {
  constructor(props) {
    super(props);
    this.toggler = this.toggler.bind(this);
  }

  toggler() {
    this.props.toggleCanvas();
  }
  render() {
    return (
      <div
        className="h-full w-full bg-gray-400 absolute z-20 opacity-75"
        onClick={this.toggler}
      ></div>
    );
  }
}
