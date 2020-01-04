import React, { Component } from "react";
import { connect } from "react-redux";

import { setSidebarDisplay } from "../../../../../actions/pageActions";

class Sidebarnavigationtab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.setSidebarDisplay(this.props.name);
  }

  mouseEnter() {
    this.toggleHover("enter");
  }

  mouseExit() {
    this.toggleHover("exit");
  }

  toggleHover(dir) {
    if (dir === "enter") {
      this.setState(() => {
        return {
          hover: true
        };
      });
    } else {
      this.setState(() => {
        return {
          hover: false
        };
      });
    }
  }

  render() {
    let bgColor = "#ebf8ff";
    let borderColor = "#90cdf4";
    let cursor = "pointer";
    let { name, Page } = this.props;
    let { brightness, sidebarDisplay } = Page;
    if (brightness !== "light") {
      bgColor = "#2a4365";
      borderColor = "#1a202c";
    }
    if (this.state.hover || name === sidebarDisplay) {
      bgColor = "#90cdf4";
      if (brightness !== "light") {
        bgColor = "#2c5282";
      }
      if (name === sidebarDisplay) {
        cursor = "default";
      }
    }
    return (
      <div
        id="Sidebar_Navigation_Tab"
        style={{
          cursor: cursor,
          backgroundColor: bgColor,
          padding: "0px 10px 0px 10px",
          borderRadius: "5px",
          textAlign: "center",
          border: `2px solid ${borderColor}`
        }}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseExit}
        onClick={this.onClick}
      >
        {name}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { setSidebarDisplay })(
  Sidebarnavigationtab
);
