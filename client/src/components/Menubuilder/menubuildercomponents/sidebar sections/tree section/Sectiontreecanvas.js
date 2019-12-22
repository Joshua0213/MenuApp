import React, { Component } from "react";

import Sectiontree from "./Sectiontree";
import Sectiontreeicons from "./Sectiontreeicons";

export default class Sectiontreecanvas extends Component {
  render() {
    return (
      <div className="w-full flex flex-col items-center">
        <Sectiontreeicons />
        <Sectiontree />
      </div>
    );
  }
}
