import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Savebutton from "./sidebar sections/sidebar section common/Savebutton";
import Icontoggle from "./sidebar sections/sidebar section common/Icontoggle";
import Displayicons from "./sidebar sections/sidebar section common/Displayicons";
import Brightnesstoggle from "./sidebar sections/sidebar section common/Brightnesstoggle";
import Sidebarnavbar from "./sidebar sections/Sidebarnavbar";
import Sidebarmainpage from "./sidebar sections/Sidebarmainpage";
import Elements from "./sidebar sections/elements/Elements";

import { getMenuArr } from "../../../actions/menubuilderActions";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Elements"
    };
    this.changeTabClick = this.changeTabClick.bind(this);
  }

  changeTabClick(tabName) {
    this.setState(() => {
      return {
        activeTab: tabName
      };
    });
  }

  render() {
    let content;
    let mainContent;
    let sidebarWidth = this.props.menuArr.sidebarWidth;
    let sidebarStyle = {
      width: `${sidebarWidth}px`
    };

    switch (this.state.activeTab) {
      case "Main":
        mainContent = <Sidebarmainpage />;
        break;
      // case "Tree":
      //   mainContent = <Sectiontreecanvas />;
      //   break;
      case "Elements":
        mainContent = <Elements />;
        break;

      default:
        mainContent = <Sidebarmainpage />;
        break;
    }

    content = (
      <div
        id="Sidebar"
        className="bg-blue-100 min-h-screen pb-5 flex flex-col items-center"
        style={sidebarStyle}
      >
        <div className="h-12 border-b-2 border-gray-500 w-full flex flex-row items-center justify-around">
          <Savebutton />
          <Brightnesstoggle />
          <Displayicons />
          <Icontoggle />
        </div>
        <div className="pt-px border-b-2 border-gray-500 w-full">
          <Sidebarnavbar
            activeTab={this.state.activeTab}
            changeTabClick={this.changeTabClick}
          />
        </div>
        {mainContent}
      </div>
    );
    return <div className=" relative z-40">{content}</div>;
  }
}

Sidebar.propTypes = {
  getMenuArr: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { getMenuArr })(Sidebar);
