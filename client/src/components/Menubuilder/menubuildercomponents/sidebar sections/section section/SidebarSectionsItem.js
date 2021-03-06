import React, { Component } from "react";
import { connect } from "react-redux";

class SidebarSectionsItem extends Component {
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
    let { Value } = this.props;
    let { pageFocus, menuArr } = this.props.menuArr;
    if (upper === "Container") {
      upper = "Columns";
      let numberOfSections =
        menuArr[pageFocus].Content[this.props.myLocation].Value.length;
      Value = `${numberOfSections} Sections`;
    }
    let tag = "";
    let classes =
      " hover:bg-gray-300 hover:border-gray-500 cursor-pointer border-4 flex-grow flex mx-1 my-1 rounded justify-center flex flex-col items-center";
    if (this.props.Type === "spacer") {
      tag = "px";
    }
    if (this.props.sectionLocation === this.props.myLocation) {
      classes += " bg-gray-300 border-gray-500";
    } else {
      classes += " bg-gray-200";
    }
    return (
      <div className={classes} onClick={this.toggleFocus}>
        <div className="text-center">{upper + ": "}</div>
        <div className="text-center">{Value + tag}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(SidebarSectionsItem);
