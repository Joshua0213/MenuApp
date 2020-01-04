import React, { Component } from "react";
import { connect } from "react-redux";

import Sidebarmain from "./sidebarmain/Sidebarmain";
import Sidebarelements from "./sidebarelements/Sidebarelements";
import Sidebarsettings from "./sidebarsettings/Sidebarsettings";

class Sidebarcanvas extends Component {
  render() {
    let { sidebarDisplay } = this.props.Page;
    let content;
    switch (sidebarDisplay) {
      case "Main":
        content = <Sidebarmain />;
        break;
      case "Elements":
        content = <Sidebarelements />;
        break;
      case "Settings":
        content = <Sidebarsettings />;
        break;

      default:
        content = <Sidebarmain />;
        break;
    }
    return <div id="Sidebar_Canvas">{content}</div>;
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Sidebarcanvas);
