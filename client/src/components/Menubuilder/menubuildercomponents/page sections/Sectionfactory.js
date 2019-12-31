import React, { Component } from "react";
import { connect } from "react-redux";

import Headersection from "./Headersection";
import Spacersection from "./SpacerSection";
import Containersection from "./Containersection";
import Columnsection from "./Columnsection";

class Sectionfactory extends Component {
  render() {
    let { containerLocation } = this.props;
    let sectionContent = this.props.menuArr.menuArr[this.props.pageLocation]
      .Content[this.props.sectionLocation];

    if (containerLocation !== null) {
      containerLocation.forEach(element => {
        sectionContent = sectionContent.Value[element];
      });
    }

    let sectionType = sectionContent.Type;
    let content = "";
    if (sectionType === "header") {
      content = (
        <Headersection
          pageLocation={this.props.pageLocation}
          sectionLocation={this.props.sectionLocation}
          containerLocation={containerLocation}
        />
      );
    } else if (sectionType === "spacer") {
      content = (
        <Spacersection
          pageLocation={this.props.pageLocation}
          sectionLocation={this.props.sectionLocation}
          containerLocation={containerLocation}
        />
      );
    } else if (sectionType === "container") {
      content = (
        <Containersection
          pageLocation={this.props.pageLocation}
          sectionLocation={this.props.sectionLocation}
          containerLocation={containerLocation}
        />
      );
    } else if (sectionType === "column") {
      content = (
        <Columnsection
          pageLocation={this.props.pageLocation}
          sectionLocation={this.props.sectionLocation}
          containerLocation={containerLocation}
        />
      );
    } else {
      console.log(sectionType);
    }

    return <div className="w-full">{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Sectionfactory);
