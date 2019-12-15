import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../Common/Spinner";
import Sidebar from "./menubuildercomponents/Sidebar";
import Menubuildercanvas from "./menubuildercomponents/Menubuildercanvas";
import {
  getMenuObj,
  getMenuArr,
  getGlobalsObject,
  setSidebarWidth
} from "../../actions/menubuilderActions";

class Menubuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false
    };
    this.setDrag = this.setDrag.bind(this);
    this.endDrag = this.endDrag.bind(this);
    this.logDrag = this.logDrag.bind(this);
  }
  componentDidMount() {
    this.props.getMenuObj();
  }

  setDrag(e) {
    this.setState(() => {
      return { dragging: true };
    });
  }

  logDrag(e) {
    if (e.screenX < 150) {
      this.props.setSidebarWidth(150);
    } else if (e.screenX > 750) {
      this.props.setSidebarWidth(750);
    } else {
      this.props.setSidebarWidth(e.screenX);
    }
  }

  endDrag() {
    console.log("ending drag");
    this.setState(() => {
      return { dragging: false };
    });
  }

  render() {
    let logger = null;
    let dragClasses = " min-h-screen bg-gray-500 cursor-move z-30 ";
    if (this.state.dragging) {
      logger = this.logDrag;
      dragClasses += " w-2";
    } else {
      dragClasses += " w-1";
    }
    let loadingObj = this.props.menuBuilt.loadingObj;
    let menuObj = this.props.menuBuilt.menuObj;
    let content;
    if (loadingObj) {
      content = <Spinner />;
    } else {
      this.props.getMenuArr(menuObj.menuArr);
      this.props.getGlobalsObject(menuObj.globalsObj);

      content = (
        <div
          id="Menubuilder"
          onMouseUp={this.endDrag}
          onMouseMove={logger}
          className="min-h-screen flex flex-row"
        >
          <div className="min-h-screen bg-blue-100">
            <Sidebar />
          </div>
          <div className={dragClasses} onMouseDown={this.setDrag}></div>
          <div className="flex-grow">
            <Menubuildercanvas className="flex-grow min-h-screen " />
          </div>
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
  getGlobalsObject,
  setSidebarWidth
})(Menubuilder);
