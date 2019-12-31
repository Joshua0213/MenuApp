import React, { Component } from "react";
import { connect } from "react-redux";

import {
  setTreeHoverFocusFromPage,
  togglePageIsDragging,
  setElementType
} from "../../../../../actions/treefocusActions";

import fastfood from "../../../../../img/fastfood.png";

class Elementtodrag extends Component {
  constructor(props) {
    super(props);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
  }

  dragStart() {
    this.props.togglePageIsDragging(true);
    this.props.setElementType(this.props.name);
  }

  dragEnd() {
    this.props.togglePageIsDragging(false);
  }

  render() {
    let icon;
    switch (this.props.name) {
      case "Menu":
        icon = (
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundImage: `url('${fastfood}')`,
              backgroundPosition: "center",
              backgroundSize: "40px 40px"
            }}
          ></div>
        );
        break;

      default:
        break;
    }

    return (
      <div
        className="text-center py-2 rounded cursor-pointer border-2"
        style={{
          backgroundColor: "#e2e8f0",
          borderColor: "#a0aec0",
          minWidth: "5rem",
          margin: "2px 1px 2px 1px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        draggable
        onDragStart={this.dragStart}
        onDragEnd={this.dragEnd}
      >
        {this.props.name}
        {icon}
      </div>
    );
  }
}

export default connect(null, {
  setTreeHoverFocusFromPage,
  togglePageIsDragging,
  setElementType
})(Elementtodrag);
