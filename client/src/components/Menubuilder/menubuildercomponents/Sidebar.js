import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../Common/Spinner";

import SidebarPages from "./sidebar sections/page section/SidebarPages";

import { getMenuArr } from "../../../actions/menubuilderActions";

class Sidebar extends Component {
  componentDidMount() {
    this.props.getMenuArr(this.props.menuObj);
  }
  render() {
    const loadingArr = this.props.menuArr.loading;
    let content;
    if (loadingArr) {
      content = <Spinner />;
    } else {
      content = (
        <div
          id="Sidebar"
          className="bg-blue-100 h-screen -mb-6 w-48 flex flex-col overflow-auto items-center flex-shrink-0"
        >
          <SidebarPages name={"Pages"} menuObj={this.props.menuArr.menuArr} />
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

Sidebar.propTypes = {
  getMenuArr: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { getMenuArr })(Sidebar);
