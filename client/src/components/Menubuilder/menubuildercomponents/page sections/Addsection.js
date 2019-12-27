import React, { Component } from "react";
import { connect } from "react-redux";

import { moveTreeSection } from "../../../../actions/menubuilderActions";

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
      this.props.dragPage,
      this.props.dragSection,
      this.props.dragContainer
    );
  }

  dragDrop() {
    this.moveTreeSection();
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
    if (this.props.containerLocation !== null) {
      validMove = false;
    }
    if (this.props.treeFocus.pageIsDragging && validMove) {
      classes += "  h-2 -mt-1 -mb-1";

      outline = "1px dotted Black";

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
      ></div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr,
  treeFocus: state.treefocus
});

export default connect(mapStateToProps, { moveTreeSection })(Addsection);
