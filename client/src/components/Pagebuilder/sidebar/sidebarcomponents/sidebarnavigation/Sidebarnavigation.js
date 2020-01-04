import React, { Component } from "react";
import { connect } from "react-redux";

import Sidebarnavigationtab from "./Sidebarnavigationtab";

class Sidebarnavigation extends Component {
  render() {
    let { brightness } = this.props.Page;
    return (
      <div
        id="Sidebar_Navigation"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "4px 0px 4px 0px",
          borderBottom: `2px solid ${
            brightness === "light" ? "#90cdf4" : "#1a202c"
          }`
        }}
      >
        <Sidebarnavigationtab name={"Main"} brightness={brightness} />
        <Sidebarnavigationtab name={"Elements"} brightness={brightness} />
        <Sidebarnavigationtab name={"Settings"} brightness={brightness} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Sidebarnavigation);
