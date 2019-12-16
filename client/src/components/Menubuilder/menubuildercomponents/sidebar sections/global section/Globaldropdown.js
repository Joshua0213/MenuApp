import React, { Component } from "react";

class Globaldropdown extends Component {
  constructor(props) {
    super(props);
    this.setFocus = this.setFocus.bind(this);
  }

  setFocus(v) {
    this.props.setFocus(v);
  }

  render() {
    let content;
    let icon;
    if (!this.props.open) {
      icon = (
        <svg
          className=" ml-2 w-4 h-4 self-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-8V5h4v5h3l-5 5-5-5h3z" />
        </svg>
      );
      content = (
        <div className="flex flex-row justify-center">
          <div className="pb-1">{this.props.focus}</div> {icon}
        </div>
      );
    } else {
      icon = (
        <svg
          className="ml-2 w-4 h-4 self-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm2 8v5H8v-5H5l5-5 5 5h-3z" />
        </svg>
      );
      content = (
        <div>
          <div className="flex flex-row justify-center">
            <div className="pb-1">{this.props.focus}</div>
            {icon}
          </div>
          <div className="absolute w-full p-px border-2 border-gray-500 mt-2 cursor-pointer bg-gray-100">
            <div
              className="bg-gray-200 hover:bg-gray-400 py-2 border-b-2 border-gray-500 hover:border-gray-600"
              onClick={() => this.props.setFocus("Menu")}
            >
              Menu
            </div>
            <div
              className="bg-white hover:bg-gray-200  py-2 border-b-2 border-gray-500 hover:border-gray-600"
              onClick={() => this.setFocus("Headers")}
            >
              Headers
            </div>
            <div
              className="bg-gray-200 hover:bg-gray-400  py-2 border-b-2 border-gray-500 hover:border-gray-600"
              onClick={() => this.setFocus("Paragraphs")}
            >
              Paragraphs
            </div>
            <div
              className="bg-white hover:bg-gray-200  py-2 border-b-2 border-gray-500 hover:border-gray-600"
              onClick={() => this.setFocus("Something")}
            >
              Navigation
            </div>
            <div
              className="bg-gray-200 hover:bg-gray-400  py-2 border-gray-500 hover:border-gray-600"
              onClick={() => this.setFocus("Paragraphs")}
            >
              Checkout
            </div>
          </div>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default Globaldropdown;
