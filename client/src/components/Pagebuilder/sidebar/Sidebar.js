import React, { Component } from "react";
import { connect } from "react-redux";

import Sidebaricons from "./sidebarcomponents/sidebaricons/Sidebaricons";
import Sidebarnavigation from "./sidebarcomponents/sidebarnavigation/Sidebarnavigation";
import Sidebarcanvas from "./sidebarcomponents/sidebarcanvas/Sidebarcanvas";

class Sidebar extends Component {
  render() {
    return (
      <div
        id="Sidebar"
        style={{
          backgroundColor:
            this.props.Page.brightness === "light" ? "#ebf8ff" : "#2a4365",
          height: "100%",
          color: this.props.Page.brightness === "light" ? "" : "white"
        }}
      >
        <Sidebaricons />
        <Sidebarnavigation />
        <Sidebarcanvas />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Sidebar);
