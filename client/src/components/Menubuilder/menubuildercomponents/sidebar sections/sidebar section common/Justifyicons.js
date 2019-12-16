import React, { Component } from "react";

export default class Justifyicons extends Component {
  constructor(props) {
    super(props);
    this.justifyStart = this.justifyStart.bind(this);
    this.justifyEnd = this.justifyEnd.bind(this);
    this.justifyCenter = this.justifyCenter.bind(this);
  }

  justifyStart() {}

  justifyEnd() {}

  justifyCenter() {}

  render() {
    let startClasses = "w-6 h-6 stroke-current hover:text-black";
    let endClasses = "w-6 h-6 stroke-current hover:text-black";
    let centerClasses = "w-6 h-6 stroke-current hover:text-black";
    switch (this.props.justify) {
      case "start":
        startClasses += " text-black";
        endClasses += " text-gray-400 cursor-pointer";
        centerClasses += " text-gray-400 cursor-pointer";
        break;
      case "end":
        endClasses += " text-black";
        startClasses += " text-gray-400 cursor-pointer";
        centerClasses += " text-gray-400 cursor-pointer";
        break;
      case "center":
        centerClasses += " text-black";
        endClasses += " text-gray-400 cursor-pointer";
        startClasses += " text-gray-400 cursor-pointer";
        break;

      default:
        break;
    }

    return (
      <div className="flex justify-center">
        <div className="w-11/12 mb-1 flex justify-around flex-rows px-2 align-items">
          <svg
            className={startClasses}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM1 5h12v2H1V5zm0 8h12v2H1v-2z" />
          </svg>

          <svg
            className={centerClasses}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM4 5h12v2H4V5zm0 8h12v2H4v-2z" />
          </svg>
          <svg
            className={endClasses}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2z" />
          </svg>
        </div>
      </div>
    );
  }
}
