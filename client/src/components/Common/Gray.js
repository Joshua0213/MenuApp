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
        className="block flex-grow  h-auto bg-black absolute z-20 opacity-10"
        onClick={this.toggler}
      >
        ...
      </div>
    );
  }
}
