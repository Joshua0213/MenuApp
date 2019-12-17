import React, { Component } from "react";
import { connect } from "react-redux";

import Sidebar from "./menubuildercomponents/Sidebar";
import Menubuildercanvas from "./menubuildercomponents/Menubuildercanvas";
import { setSidebarWidth } from "../../actions/menubuilderActions";

class Menubuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      containerWidth: 300,
      sidebarOffset: 43
    };
    this.setDrag = this.setDrag.bind(this);
    this.endDrag = this.endDrag.bind(this);
    this.logDrag = this.logDrag.bind(this);
    this.onMouseScroll = this.onMouseScroll.bind(this);
  }
  onMouseScroll() {
    let mainNavbar = document.getElementById("mainNavbar");
    if (window.pageYOffset > mainNavbar.offsetHeight) {
      this.setState(() => {
        return { sidebarOffset: 0 };
      });
    } else {
      this.setState(() => {
        return { sidebarOffset: mainNavbar.offsetHeight };
      });
    }
  }

  setDrag(e) {
    this.setState(() => {
      return { dragging: true };
    });
  }

  logDrag(e) {
    if (e.clientX < 275) {
      this.props.setSidebarWidth(275);
    } else if (e.clientX > 500) {
      this.props.setSidebarWidth(500);
    } else {
      this.props.setSidebarWidth(e.clientX);
    }
  }

  endDrag() {
    this.setState(() => {
      return { dragging: false };
    });
  }

  render() {
    let logger = null;
    let dragContainerStyle = {
      width: this.props.menuArr.sidebarWidth
    };
    let dragStyle = {
      cursor: "ew-resize"
    };
    let sidebarStyle = {
      position: "fixed",
      top: this.state.sidebarOffset
    };
    let dragClasses = " min-h-screen w-1 z-30 flex-shrink-0 ";
    if (this.state.dragging) {
      logger = this.logDrag;
      dragClasses += " bg-gray-600";
    } else {
      dragClasses += " bg-gray-500";
    }

    let content;

    content = (
      <div
        id="Menubuilder"
        onMouseUp={this.endDrag}
        onMouseMove={logger}
        className="min-h-screen flex flex-row"
      >
        <div className="h-full bg-red-300" style={dragContainerStyle}>
          <div
            style={sidebarStyle}
            className="max-h-screen scrolling-touch overflow-auto min-h-screen bg-blue-100"
          >
            <Sidebar />
          </div>
        </div>
        <div
          className={dragClasses}
          style={dragStyle}
          onMouseDown={this.setDrag}
        ></div>
        <div className="flex-grow ">
          <Menubuildercanvas className="flex-grow min-h-screen" />
        </div>
      </div>
    );
    return (
      <div onWheelCapture={this.onMouseScroll} onWheel={this.onMouseScroll}>
        {content}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  menuBuilt: state.menubuilt,
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {
  setSidebarWidth
})(Menubuilder);
