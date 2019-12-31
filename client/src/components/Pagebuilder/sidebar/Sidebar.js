import React, { Component } from "react";

import Sidebaricons from "./sidebarcomponents/Sidebaricons";
import Sidebarnavigation from "./sidebarcomponents/Sidebarnavigation";
import Sidebarcanvas from "./sidebarcomponents/Sidebarcanvas";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <Sidebaricons />
        <Sidebarnavigation />
        <Sidebarcanvas />
      </div>
    );
  }
}
