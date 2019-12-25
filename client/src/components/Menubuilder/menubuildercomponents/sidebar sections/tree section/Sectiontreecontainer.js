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
    //   console.log(
    //     this.props.dragPage +
    //       "" +
    //       this.props.pageLocation +
    //       "" +
    //       this.props.sectionLocation +
    //       this.props.containerLocation
    //   );
    let sections = [];
    let depth = 0;
    let { menuArr, pageFocus } = this.props.menuArr;
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
        cancelDrag={this.props.cancelDrag}
        isParent={true}
        pageLocation={pageFocus}
        sectionLocation={this.props.sectionLocation}
        containerLocation={this.props.containerLocation}
        name={"Container"}
        toggleOpen={this.toggleOpen}
        isOpen={this.state.isOpen}
      />
    );
    depth++;
    if (this.state.isOpen === true) {
      sections.push(
        <Sectiontreedragnode
          key={"todo=:fix this" + 1 + "nodedepth" + 0}
          depth={depth}
          dragId={pageFocus + "" + this.props.sectionLocation + [...tempArr, 0]}
          containerLocation={[...tempArr, 0]}
          sectionLocation={this.props.sectionLocation}
          pageLocation={this.props.pageLocation}
          dragPage={this.props.dragPage}
          dragSection={this.props.dragSection}
          dragContainer={this.props.dragContainer}
          dragIsParent={this.props.dragIsParent}
        />
      );
      sectionArr.forEach((element, index) => {
        sections.push(
          <Sectiontreefactory
            key={index + "container" + depth}
            depth={depth}
            dragItem={this.props.dragItem}
            changeDragItem={this.props.changeDragItem}
            cancelDrag={this.props.cancelDrag}
            containerLocation={[...tempArr, index]}
            sectionLocation={this.props.sectionLocation}
            pageLocation={this.props.pageLocation}
            dragPage={this.props.dragPage}
            dragSection={this.props.dragSection}
            dragContainer={this.props.dragContainer}
            dragIsParent={this.props.dragIsParent}
          />
        );
        sections.push(
          <Sectiontreedragnode
            key={index + 1 + "nodedepth" + 0}
            depth={depth}
            dragId={
              pageFocus +
              "" +
              this.props.sectionLocation +
              [...tempArr, index + 1]
            }
            containerLocation={[...tempArr, index + 1]}
            sectionLocation={this.props.sectionLocation}
            pageLocation={this.props.pageLocation}
            dragPage={this.props.dragPage}
            dragSection={this.props.dragSection}
            dragContainer={this.props.dragContainer}
            dragIsParent={this.props.dragIsParent}
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
