import React, { Component } from "react";

export default class Exitbutton extends Component {
  render() {
    return (
      <div>
        <div className="bg-red-300 hover:bg-red-400 text-red-600 hover:text-red-800 py-px px-2 m-px rounded border-2 border-gray-400 hover:border-gray-500 cursor-pointer">
          <svg
            className="w-6 h-6 fill-current hover:text-red-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={() => this.props.toggle()}
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
          </svg>
        </div>
      </div>
    );
  }
}
