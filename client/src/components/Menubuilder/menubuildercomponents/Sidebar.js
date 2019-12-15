import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SidebarPages from "./sidebar sections/page section/SidebarPages";
import SidebarSections from "./sidebar sections/section section/SidebarSections";
import GlobalOptions from "./sidebar sections/global section/GlobalOptions";
import Menuitems from "./sidebar sections/menu items section/MenuItems";

import { getMenuArr } from "../../../actions/menubuilderActions";

class Sidebar extends Component {
  render() {
    let content;
    let sidebarWidth = this.props.menuArr.sidebarWidth;
    let sidebarStyle = {
      width: `${sidebarWidth}px`
    };
    content = (
      <div
        id="Sidebar"
        className="bg-blue-100 min-h-screen pb-5 flex flex-col overflow-auto items-center"
        style={sidebarStyle}
      >
        <SidebarPages name={"Pages"} />
        <SidebarSections />
        <GlobalOptions />
        <Menuitems />
      </div>
    );
    return <div className="relative z-40">{content}</div>;
  }
}

Sidebar.propTypes = {
  getMenuArr: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { getMenuArr })(Sidebar);
