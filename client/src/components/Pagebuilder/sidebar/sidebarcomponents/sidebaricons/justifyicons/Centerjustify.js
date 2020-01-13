import React, { Component } from "react";

export default class Centerjustify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  mouseEnter() {
    this.setState({ isHovered: true });
  }
  mouseLeave() {
    this.setState({ isHovered: false });
  }
  render() {
    let style = {
      height: "25px",
      width: "25px",
      fill: this.props.brightness === "light" ? "grey" : "grey",
      cursor: "pointer"
    };
    let onClick = this.props.changeSetting;

    if (this.props.alignSelf === "center" || this.state.isHovered) {
      style.fill = this.props.brightness === "light" ? "black" : "white";
      if (this.props.alignSelf === "center") {
        style.cursor = "default";
        onClick = null;
      }
    }

    return (
      <div>
        <svg
          style={style}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={onClick}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          <path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM4 5h12v2H4V5zm0 8h12v2H4v-2z" />
        </svg>
      </div>
    );
  }
}
