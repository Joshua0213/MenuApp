import React, { Component } from "react";

export default class Sidebarnavbartab extends Component {
  constructor(props) {
    super(props);
    this.tabClick = this.tabClick.bind(this);
  }

  tabClick() {
    this.props.changeTabClick(this.props.name);
  }

  render() {
    let { name, isToggled } = this.props;
    let myTabClick;
    let tabClasses =
      "border-2 w-16 border-b-0 rounded-lg rounded-b-none text-sm text-center pb-px mx-px ";
    if (isToggled) {
      tabClasses += " cursor-default bg-gray-300 border-gray-500";
      myTabClick = null;
    } else {
      tabClasses +=
        " cursor-pointer bg-gray-200 border-gray-400 hover:bg-gray-400 hover:border-gray-600";
      myTabClick = this.tabClick;
    }

    return (
      <div className={tabClasses} onClick={myTabClick}>
        {name}
      </div>
    );
  }
}
