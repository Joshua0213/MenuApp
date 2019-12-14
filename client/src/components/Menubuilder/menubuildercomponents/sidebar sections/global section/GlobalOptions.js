import React, { Component } from "react";
import { connect } from "react-redux";

import Globaldropdown from "./Globaldropdown";
import Globalmenucanvas from "./Globalmenucanvas";

class GlobalOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      focus: "menu"
    };
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.setState(prevState => {
      return { hidden: !prevState.hidden };
    });
  }
  render() {
    let content;

    if (this.state.hidden === true) {
      content = (
        <div
          className="bg-gray-300 border-gray-500 border-2 cursor-pointer  hover:border-gray-600 h-7 w-11/12 mt-1 rounded-full flex justify-around"
          onClick={this.toggleClick}
        >
          <div className="">Menu Settings</div>
        </div>
      );
    } else {
      let canvas;
      switch (this.state.focus) {
        case "header":
          // <Globaldivcanvas focus={header}
          break;
        case "paragaraph":
          // code block
          break;
        default:
          canvas = <Globalmenucanvas />;
      }
      content = (
        <div className="bg-gray-300 mt-1  hover:border-gray-600 border-gray-500 border-2 w-11/12 rounded-lg flex flex-col items-center ">
          <div
            className="cursor-pointer bg-gray-300 rounded-full border-2 border-gray-500 hover:border-gray-600 w-11/12 text-center mt-1"
            onClick={this.toggleClick}
          >
            <div className="">Menu Settings</div>
          </div>
          <Globaldropdown />
          {canvas}
          item manipulator?
        </div>
      );
    }

    return <div className="w-full flex justify-center z-10">{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(GlobalOptions);
