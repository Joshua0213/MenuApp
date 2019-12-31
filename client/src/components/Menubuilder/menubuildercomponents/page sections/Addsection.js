import React, { Component } from "react";
import { connect } from "react-redux";

import {
  moveTreeSection,
  createNewContainer,
  createNewHeader
} from "../../../../actions/menubuilderActions";

import {
  togglePageIsDragging,
  setTreeDragFocus
} from "../../../../actions/treefocusActions";

class Addsection extends Component {
  constructor(props) {
    super(props);
    this.mouseExit = this.mouseExit.bind(this);
    this.mouseEntered = this.mouseEntered.bind(this);
    this.state = {
      mouseOver: false
    };

    this.moveTreeSection = this.moveTreeSection.bind(this);
    this.dragDrop = this.dragDrop.bind(this);
  }

  moveTreeSection() {
    this.props.moveTreeSection(
      this.props.menuArr.menuArr,
      this.props.pageLocation,
      this.props.sectionLocation,
      this.props.containerLocation,
      this.props.treeFocus.treeDragPage,
      this.props.treeFocus.treeDragSection,
      this.props.treeFocus.treeDragContainer
    );
  }

  dragDrop() {
    this.props.togglePageIsDragging(false);
    if (this.props.treeFocus.treeDragPage !== null) {
      this.moveTreeSection();
    } else {
      switch (this.props.treeFocus.newElementType) {
        case "Columns":
          this.props.createNewContainer(
            this.props.menuArr.menuArr,
            this.props.pageLocation,
            this.props.sectionLocation
          );
          break;

        case "Header":
          this.props.createNewHeader(
            this.props.menuArr.menuArr,
            "New Header",
            this.props.pageLocation,
            this.props.sectionLocation
          );
          break;

        default:
          break;
      }
    }
    this.setState({ mouseOver: false });
    this.props.setTreeDragFocus(null, null, null);
  }

  mouseExit() {
    this.setState({ mouseOver: false });
  }

  mouseEntered() {
    this.setState({ mouseOver: true });
  }

  render() {
    let toggleClick = this.toggler;
    let classes = "text-center text-sm relative z-50 w-11/12 rounded";
    let outline = "none";
    let opacity = 1;
    let validMove = true;
    let heightVar = "0px";
    if (this.props.containerLocation !== null) {
      validMove = false;
    }
    if (this.props.treeFocus.pageIsDragging && validMove) {
      classes += " h-2 -mt-1 -mb-1";

      outline = "1px dotted Black";
      heightVar = "50px";
      if (!this.state.mouseOver) {
        opacity = 0.2;
      }
    }
    let styles = {
      backgroundColor: "#66ff00",
      outline: `${outline}`,
      opacity: `${opacity}`,
      borderRadius: "5px"
    };

    return (
      <div
        className={classes}
        style={styles}
        onClick={toggleClick}
        onDragLeave={this.mouseExit}
        onDragEnter={e => {
          e.preventDefault();
          this.mouseEntered();
        }}
        onDragOver={e => {
          e.preventDefault();
          this.mouseEntered();
        }}
        onDrop={this.dragDrop}
      >
        <div
          style={{
            height: heightVar,
            width: "100%",
            position: "absolute",
            marginTop: "-20px"
          }}
        ></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr,
  treeFocus: state.treefocus
});

export default connect(mapStateToProps, {
  moveTreeSection,
  createNewContainer,
  createNewHeader,
  togglePageIsDragging,
  setTreeDragFocus
})(Addsection);
