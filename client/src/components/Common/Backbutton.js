import React, { Component } from "react";

export default class Backbutton extends Component {
  render() {
    return (
      <div>
        <div className="bg-green-300 hover:bg-green-400 py-px text-green-600 hover:text-green-800 m-px rounded border-2 border-gray-400 hover:border-gray-500 cursor-pointer">
          <svg
            className="w-6 h-6 fill-current hover:text-green-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={() => this.props.toggle()}
          >
            <path d="M.685 10h2.372v-.205c.108-4.434 3.724-7.996 8.169-7.996 4.515 0 8.174 3.672 8.174 8.201s-3.659 8.199-8.174 8.199a8.13 8.13 0 0 1-5.033-1.738l1.406-1.504a6.099 6.099 0 0 0 3.627 1.193c3.386 0 6.131-2.754 6.131-6.15 0-3.396-2.745-6.15-6.131-6.15-3.317 0-6.018 2.643-6.125 5.945V10h2.672l-3.494 3.894L.685 10z" />
          </svg>
        </div>
      </div>
    );
  }
}
