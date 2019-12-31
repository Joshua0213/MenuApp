import React, { Component } from "react";

import Elementtodrag from "./Elementtodrag";

export default class Elements extends Component {
  render() {
    return (
      <div className="w-11/12 p-2 flex flex-wrap mt-1 rounded-lg m-px border-2 border-gray-500 bg-gray-100">
        <Elementtodrag name="Header" />
        <Elementtodrag name="Columns" />
        <Elementtodrag name="Menu" />
      </div>
    );
  }
}
