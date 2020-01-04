import React, { Component } from "react";
import { connect } from "react-redux";

import Brightnessicon from "./Brightnessicon";
import Savebutton from "./Savebutton";
import Displayicons from "./Displayicons";

class Sidebaricons extends Component {
  render() {
    return (
      <div
        id="Sidebar_Icons"
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "7px",
          borderBottom: `2px solid ${
            this.props.Page.brightness === "light" ? "#90cdf4" : "#1a202c"
          }`
        }}
      >
        <Savebutton />
        <Displayicons />
        <Brightnessicon />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Sidebaricons);
