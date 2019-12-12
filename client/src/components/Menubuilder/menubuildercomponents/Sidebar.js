import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SidebarPages from "./sidebar sections/page section/SidebarPages";
import SidebarSections from "./sidebar sections/section section/SidebarSections";

import { getMenuArr } from "../../../actions/menubuilderActions";

class Sidebar extends Component {
  render() {
    let content;
    content = (
      <div
        id="Sidebar"
        className="bg-blue-100 h-screen -mb-6 w-48 flex flex-col overflow-auto items-center flex-shrink-0"
      >
        <SidebarPages name={"Pages"} />
        <SidebarSections />
      </div>
    );
    return <div className="relative z-30">{content}</div>;
  }
}

Sidebar.propTypes = {
  getMenuArr: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { getMenuArr })(Sidebar);
