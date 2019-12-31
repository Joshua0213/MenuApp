import React, { Component } from "react";
import { connect } from "react-redux";

import {
  togglePageIsDragging,
  setTreeDragFocus,
  setElementType
} from "../../../../actions/treefocusActions";
import {
  createNewContainer,
  createNewHeader,
  moveTreeSection
} from "../../../../actions/menubuilderActions";

class Columnsection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
    this.moveTreeSection = this.moveTreeSection.bind(this);
    this.dragDrop = this.dragDrop.bind(this);
  }

  moveTreeSection() {
    console.log(this.props.treeFocus.treeDragContainer);
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
    if (this.props.treeFocus.treeDragPage !== null) {
      console.log(this.props.treeFocus.treeDragContainer);
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
    this.props.togglePageIsDragging(false);
    this.props.setTreeDragFocus(null, null, null);
  }

  mouseEnter() {
    this.setState(() => {
      return {
        hovered: true
      };
    });
  }

  mouseExit(e) {
    this.setState(() => {
      return {
        hovered: false
      };
    });
  }

  render() {
    let { pageIsDragging } = this.props.treeFocus;
    let bgColor = "rgb(240,240,240)";
    if (pageIsDragging) {
      if (this.state.hovered === false) {
        bgColor = "rgb(212,240,212)";
      } else {
        bgColor = "#66ff00";
      }
    }

    return (
      <div className="p-4">
        <div
          style={{
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: bgColor,
            borderRadius: "30px"
          }}
          onDragLeave={this.mouseExit}
          onDragEnter={e => {
            e.preventDefault();
            this.mouseEnter();
          }}
          onDragOver={e => {
            e.preventDefault();
            this.mouseEnter();
          }}
          onDrop={this.dragDrop}
        >
          {" "}
          <span
            style={{
              fontSize: "12px",
              color: "gray"
            }}
          >
            Drag <br /> Element <br /> Here
          </span>
          <svg
            className="m-1 w-12 h-12 inline text-green-600 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
          </svg>
          <span
            style={{
              fontSize: "12px",
              color: "gray"
            }}
          >
            Drag <br /> Element <br /> Here
          </span>
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr,
  treeFocus: state.treefocus
});

export default connect(mapStateToProps, {
  togglePageIsDragging,
  createNewContainer,
  createNewHeader,
  moveTreeSection,
  setTreeDragFocus
})(Columnsection);
