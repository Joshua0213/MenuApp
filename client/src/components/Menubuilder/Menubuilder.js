import React, { Component } from "react";
import { connect } from "react-redux";

import Sidebar from "./menubuildercomponents/Sidebar";
import Menubuildercanvas from "./menubuildercomponents/Menubuildercanvas";
import { setSidebarWidth } from "../../actions/menubuilderActions";

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

  setDrag(e) {
    this.setState(() => {
      return { dragging: true };
    });
  }

  logDrag(e) {
    if (e.clientX < 150) {
      this.props.setSidebarWidth(150);
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
    let dragStyle = {
      cursor: "ew-resize"
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
        <div className="min-h-screen bg-blue-100">
          <Sidebar />
        </div>
        <div
          className={dragClasses}
          style={dragStyle}
          onMouseDown={this.setDrag}
        ></div>
        <div className="flex-grow">
          <Menubuildercanvas className="flex-grow min-h-screen " />
        </div>
      </div>
    );
    return <div>{content}</div>;
  }
}
const mapStateToProps = state => ({
  menuBuilt: state.menubuilt
});

export default connect(mapStateToProps, {
  setSidebarWidth
})(Menubuilder);
