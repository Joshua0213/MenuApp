import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Sectiontreeitem from "./Sectiontreeitem";
import Sectiontreedragnode from "./Sectiontreedragnode";
import Sectiontreefactory from "./Sectiontreefactory";

class Sectiontreecontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(prev => {
      return {
        isOpen: !prev.isOpen
      };
    });
  }

  render() {
    let sections = [];
    let depth = 0;
    let { menuArr, pageFocus, sectionFocus } = this.props.menuArr;
    let tempArr = [];
    let sectionArr =
      menuArr[pageFocus].Content[this.props.sectionLocation].Value;
    if (this.props.containerLocation !== null) {
      this.props.containerLocation.forEach(element => {
        sectionArr = sectionArr[element].Value;
        depth++;
        tempArr = this.props.containerLocation.map(element => {
          return element;
        });
      });
    }
    sections.push(
      <Sectiontreeitem
        key={this.props.sectionLocation + "container" + depth}
        depth={depth}
        id={this.props.sectionLocation + "container" + depth}
        dragItem={this.props.dragItem}
        changeDragItem={this.props.changeDragItem}
        isParent={true}
        containerLocation={this.props.containerLocation}
        name={"Container"}
        toggleOpen={this.toggleOpen}
        isOpen={this.state.isOpen}
        sectionLocation={this.props.sectionLocation}
      />
    );
    depth++;
    if (this.state.isOpen === true) {
      sections.push(
        <Sectiontreedragnode
          key={"todo=:fix this" + 1 + "nodedepth" + 0}
          depth={depth}
        />
      );
      sectionArr.forEach((element, index) => {
        sections.push(
          <Sectiontreefactory
            key={index + "container" + depth}
            depth={depth}
            dragItem={this.props.dragItem}
            changeDragItem={this.props.changeDragItem}
            containerLocation={[...tempArr, index]}
            sectionLocation={this.props.sectionLocation}
            pageLocation={this.props.pageLocation}
          />
        );
        sections.push(
          <Sectiontreedragnode
            key={index + 1 + "nodedepth" + 0}
            depth={depth}
          />
        );
      });
    }
    return <div>{sections}</div>;
  }
}

Sectiontreecontainer.propTypes = {
  menuArr: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Sectiontreecontainer);
