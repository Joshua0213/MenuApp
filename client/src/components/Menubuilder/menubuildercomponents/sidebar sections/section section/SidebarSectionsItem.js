import React, { Component } from "react";

export default class SidebarSectionsItem extends Component {
  constructor(props) {
    super(props);
    this.toggleFocus = this.toggleFocus.bind(this);
  }

  toggleFocus() {
    this.props.changeFocus(this.props.myLocation);
  }

  render() {
    let lower = this.props.Type;
    let upper = lower.charAt(0).toUpperCase() + lower.substring(1);
    let tag = "";
    let classes =
      " hover:bg-gray-300 hover:border-gray-500 cursor-pointer border-4 flex-grow flex mx-1 my-1 rounded justify-center flex flex-col items-center";
    if (this.props.Type === "spacer") {
      tag = "px";
    }
    if (this.props.sectionLocation === this.props.myLocation) {
      classes += "  bg-gray-300 border-gray-500";
    } else {
      classes += "  bg-gray-200";
    }
    return (
      <div className={classes} onClick={this.toggleFocus}>
        <div className="text-center">{upper + ": "}</div>
        <div className="text-center">{this.props.Value + tag}</div>
      </div>
    );
  }
}
