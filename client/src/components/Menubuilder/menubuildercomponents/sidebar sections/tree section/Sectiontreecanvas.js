import React, { Component } from "react";
import { connect } from "react-redux";

import Sectiontree from "./Sectiontree";
import Sectiontreeicons from "./Sectiontreeicons";

class Sectiontreecanvas extends Component {
  render() {
    let content = <Sectiontree />;
    if (this.props.treeFocus.settingsOpen) {
      content = <div>Settings!</div>;
    }
    return (
      <div className="w-full flex flex-col items-center">
        <Sectiontreeicons />
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  treeFocus: state.treefocus
});

export default connect(mapStateToProps, {})(Sectiontreecanvas);
