import React, { Component } from "react";

import Sidebar from "./menubuildercomponents/Sidebar";
import Menubuildercanvas from "./menubuildercomponents/Menubuildercanvas";

class Menubuilder extends Component {
  render() {
    return (
      <div id="Menubuilder" className="min-h-90 flex flex-row">
        <Sidebar />
        <Menubuildercanvas className="flex" />
      </div>
    );
  }
}

export default Menubuilder;
