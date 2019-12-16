import React, { Component } from "react";
import { connect } from "react-redux";

import Headersection from "../page sections/Headersection";
import Spacersection from "../page sections/SpacerSection";

class Sectionfactory extends Component {
  render() {
    let sectionType = this.props.menuArr.menuArr[this.props.pageLocation]
      .Content[this.props.sectionLocation].Type;
    let content = "";

    if (sectionType === "header") {
      content = (
        <Headersection
          pageLocation={this.props.pageLocation}
          sectionLocation={this.props.sectionLocation}
        />
      );
    } else if (sectionType === "spacer") {
      content = (
        <Spacersection
          pageLocation={this.props.pageLocation}
          sectionLocation={this.props.sectionLocation}
        />
      );
    }

    return <div className="w-full">{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Sectionfactory);
