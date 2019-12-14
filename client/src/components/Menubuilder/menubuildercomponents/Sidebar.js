import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SidebarPages from "./sidebar sections/page section/SidebarPages";
import SidebarSections from "./sidebar sections/section section/SidebarSections";
import GlobalOptions from "./sidebar sections/global section/GlobalOptions";

import { getMenuArr } from "../../../actions/menubuilderActions";

class Sidebar extends Component {
  render() {
    let content;
    content = (
      <div
        id="Sidebar"
        className="bg-blue-100 min-h-screen pb-5 w-48 flex flex-col overflow-auto items-center"
      >
        <SidebarPages name={"Pages"} />
        <SidebarSections />
        <GlobalOptions />
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
