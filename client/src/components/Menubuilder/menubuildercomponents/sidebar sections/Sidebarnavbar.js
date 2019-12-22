import React, { Component } from "react";

import Sidebarnavbartab from "./Sidebarnavbartab";

export default class Sidebarnavbar extends Component {
  render() {
    return (
      <div className="h-full w-full flex flex-row">
        <Sidebarnavbartab
          isToggled={this.props.activeTab === "Main" ? true : false}
          changeTabClick={this.props.changeTabClick}
          name={"Main"}
        />
        <Sidebarnavbartab
          isToggled={this.props.activeTab === "Tree" ? true : false}
          changeTabClick={this.props.changeTabClick}
          name={"Tree"}
        />
      </div>
    );
  }
}
