import React, { Component } from "react";
import { connect } from "react-redux";

import Sectiontreefactory from "./Sectiontreefactory";
import Sectiontreedragnode from "./Sectiontreedragnode";

class Sectiontree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragBool: false,
      dragPage: null,
      dragSection: null,
      dragContainer: null,
      dragIsParent: null
    };
    this.changeDragItem = this.changeDragItem.bind(this);
    this.cancelDrag = this.cancelDrag.bind(this);
  }

  changeDragItem(pageLocation, sectionLocation, containerLocation, parentage) {
    this.setState(() => {
      return {
        dragBool: true,
        dragPage: pageLocation,
        dragSection: sectionLocation,
        dragContainer: containerLocation,
        dragIsParent: parentage
      };
    });
  }

  cancelDrag() {
    this.setState(() => {
      return {
        dragBool: false,
        dragPage: null,
        dragSection: null,
        dragContainer: null,
        dragIsParent: null
      };
    });
  }

  render() {
    let sections = [];
    let { menuArr, pageFocus } = this.props.menuArr;
    menuArr[pageFocus].Content.forEach((element, index) => {
      sections.push(
        <Sectiontreefactory
          key={index + "item" + 0}
          depth={0}
          dragBool={this.state.dragBool}
          changeDragItem={this.changeDragItem}
          cancelDrag={this.cancelDrag}
          containerLocation={null}
          sectionLocation={index}
          pageLocation={pageFocus}
          dragPage={this.state.dragPage}
          dragSection={this.state.dragSection}
          dragContainer={this.state.dragContainer}
          dragIsParent={this.state.dragIsParent}
        />
      );
      sections.push(
        <Sectiontreedragnode
          key={index + 1 + "nodedepth" + 0}
          depth={0}
          dragId={pageFocus + "" + (index + 1)}
          containerLocation={null}
          sectionLocation={index + 1}
          pageLocation={pageFocus}
          dragPage={this.state.dragPage}
          dragSection={this.state.dragSection}
          dragContainer={this.state.dragContainer}
          dragIsParent={this.state.dragIsParent}
        />
      );
    });

    return (
      <div className="w-11/12 m-h-20 mt-1 rounded-lg m-px border-2 border-gray-500 bg-gray-100">
        The Tree
        <Sectiontreedragnode
          depth={0}
          dragId={0 + "" + 0}
          containerLocation={null}
          sectionLocation={0}
          pageLocation={pageFocus}
          dragPage={this.state.dragPage}
          dragSection={this.state.dragSection}
          dragContainer={this.state.dragContainer}
          dragIsParent={this.state.dragIsParent}
        />
        {sections}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Sectiontree);
