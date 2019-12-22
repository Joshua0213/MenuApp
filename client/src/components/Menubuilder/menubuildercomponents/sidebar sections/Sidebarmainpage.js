import React, { Component } from "react";

import SidebarPages from "./page section/SidebarPages";
import Menuitems from "./menu items section/MenuItems";
import GlobalOptions from "./global section/GlobalOptions";
import SidebarSections from "./section section/SidebarSections";

export default class Sidebarmainpage extends Component {
  render() {
    return (
      <div className="bg-blue-100 w-full pb-5 flex flex-col items-center">
        <SidebarPages name={"Pages"} />
        <SidebarSections />
        <GlobalOptions />
        <Menuitems />
      </div>
    );
  }
}
