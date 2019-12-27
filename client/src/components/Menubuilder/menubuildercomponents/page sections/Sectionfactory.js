import React, { Component } from "react";
import { connect } from "react-redux";

import Headersection from "./Headersection";
import Spacersection from "./SpacerSection";
import Containersection from "./Containersection";

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
          dragBool={this.props.dragBool}
          changeDragItem={this.props.changeDragItem}
          cancelDrag={this.props.cancelDrag}
          dragPage={this.props.dragPage}
          dragSection={this.props.dragSection}
          dragContainer={this.props.dragContainer}
          dragIsParent={this.props.dragIsParent}
        />
      );
    } else if (sectionType === "spacer") {
      content = (
        <Spacersection
          pageLocation={this.props.pageLocation}
          sectionLocation={this.props.sectionLocation}
          containerLocation={containerLocation}
          dragBool={this.props.dragBool}
          changeDragItem={this.props.changeDragItem}
          cancelDrag={this.props.cancelDrag}
          dragPage={this.props.dragPage}
          dragSection={this.props.dragSection}
          dragContainer={this.props.dragContainer}
          dragIsParent={this.props.dragIsParent}
        />
      );
    } else if (sectionType === "container") {
      content = (
        <Containersection
          pageLocation={this.props.pageLocation}
          sectionLocation={this.props.sectionLocation}
          containerLocation={containerLocation}
          dragBool={this.props.dragBool}
          changeDragItem={this.props.changeDragItem}
          cancelDrag={this.props.cancelDrag}
          dragPage={this.props.dragPage}
          dragSection={this.props.dragSection}
          dragContainer={this.props.dragContainer}
          dragIsParent={this.props.dragIsParent}
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
