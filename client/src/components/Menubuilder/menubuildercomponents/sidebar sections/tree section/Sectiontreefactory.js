import React, { Component } from "react";
import { connect } from "react-redux";

import Sectiontreeitem from "./Sectiontreeitem";
import Sectiontreecolumnitem from "./Sectiontreecolumnitem";
import Sectiontreecontainer from "./Sectiontreecontainer";

class Sectiontreefactory extends Component {
  render() {
    let { menuArr } = this.props.menuArr;
    let { sectionLocation, pageLocation, containerLocation } = this.props;
    let sectionContent = menuArr[pageLocation].Content[sectionLocation];
    let idTag = "";
    let content;
    if (containerLocation !== null) {
      containerLocation.forEach(element => {
        sectionContent = sectionContent.Value[element];
        idTag += element + "c";
      });
    }
    let { Type } = sectionContent;
    if (Type === "column") {
      content = (
        <Sectiontreecolumnitem
          depth={this.props.depth}
          id={pageLocation + "p" + sectionLocation + "s" + idTag}
          dragItem={this.props.dragItem}
          changeDragItem={this.props.changeDragItem}
          cancelDrag={this.props.cancelDrag}
          isParent={false}
          containerLocation={containerLocation}
          sectionLocation={sectionLocation}
          pageLocation={pageLocation}
          name={Type}
        />
      );
    } else if (Type !== "container") {
      content = (
        <Sectiontreeitem
          depth={this.props.depth}
          id={pageLocation + "p" + sectionLocation + "s" + idTag}
          dragItem={this.props.dragItem}
          changeDragItem={this.props.changeDragItem}
          cancelDrag={this.props.cancelDrag}
          isParent={false}
          containerLocation={containerLocation}
          sectionLocation={sectionLocation}
          pageLocation={pageLocation}
          name={Type}
        />
      );
    } else {
      content = (
        <Sectiontreecontainer
          dragItem={this.props.dragItem}
          depth={this.props.depth}
          changeDragItem={this.props.changeDragItem}
          cancelDrag={this.props.cancelDrag}
          containerLocation={containerLocation}
          sectionLocation={sectionLocation}
          pageLocation={pageLocation}
          dragPage={this.props.dragPage}
          dragSection={this.props.dragSection}
          dragContainer={this.props.dragContainer}
          dragIsParent={this.props.dragIsParent}
        />
      );
    }

    return <>{content}</>;
  }
}
const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Sectiontreefactory);
