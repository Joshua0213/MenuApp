import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../Common/Spinner";
import Sidebar from "./menubuildercomponents/Sidebar";
import Menubuildercanvas from "./menubuildercomponents/Menubuildercanvas";
import {
  getMenuObj,
  getMenuArr,
  getGlobalsObject
} from "../../actions/menubuilderActions";

class Menubuilder extends Component {
  componentDidMount() {
    this.props.getMenuObj();
  }

  render() {
    let loadingObj = this.props.menuBuilt.loadingObj;
    let menuObj = this.props.menuBuilt.menuObj;
    let content;
    if (loadingObj) {
      content = <Spinner />;
    } else {
      this.props.getMenuArr(menuObj.menuArr);
      this.props.getGlobalsObject(menuObj.globalsObj);
      content = (
        <div id="Menubuilder" className="min-h-screen flex flex-row">
          <div className="min-h-screen bg-blue-100">
            <Sidebar />
          </div>
          <div className="w-px min-h-screen bg-gray-500 -ml-px z-50"></div>
          <Menubuildercanvas className="flex min-h-screen" />
        </div>
      );
    }

    return <div>{content}</div>;
  }
}

Menubuilder.propTypes = {
  getMenuObj: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menuBuilt: state.menubuilt
});

export default connect(mapStateToProps, {
  getMenuObj,
  getMenuArr,
  getGlobalsObject
})(Menubuilder);
