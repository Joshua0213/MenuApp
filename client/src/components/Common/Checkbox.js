import React, { Component } from "react";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {}

  render() {
    let content;

    if (!this.props.toggled) {
      content = (
        <div className="h-6 w-6 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer border-2 border-gray-600 hover:border-gray-900"></div>
      );
    } else {
      content = (
        <div className="h-6 w-6 rounded-full bg-gray-400 hover:bg-gray-300 cursor-pointer border-2 border-gray-600 hover:border-gray-900">
          <svg
            className="h-4 pt-1 pl-1 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </div>
      );
    }
    return <div onClick={this.props.toggleClick}>{content}</div>;
  }
}
