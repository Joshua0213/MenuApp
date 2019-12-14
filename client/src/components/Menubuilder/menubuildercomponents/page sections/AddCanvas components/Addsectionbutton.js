import React, { Component } from "react";

export default class Addsectionbutton extends Component {
  render() {
    return (
      <div
        className="cursor-pointer bg-blue-300 rounded-lg flex-grow mx-2 hover:bg-blue-500 text-base text-center py-2 px-6 z-50"
        onClick={() => this.props.openSectionToAdd(this.props.name)}
      >
        {this.props.name}
      </div>
    );
  }
}
