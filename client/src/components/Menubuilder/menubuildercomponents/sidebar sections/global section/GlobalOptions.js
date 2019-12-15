import React, { Component } from "react";
import { connect } from "react-redux";

import Globaldropdown from "./Globaldropdown";
import Globalmenucanvas from "./Globalmenucanvas";

class GlobalOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      focus: "Menu",
      dropdown: false
    };
    this.toggleClick = this.toggleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.setFocus = this.setFocus.bind(this);
  }

  setFocus(value) {
    this.setState(() => {
      return { focus: value };
    });
  }

  toggleDropdown() {
    this.setState(prevState => {
      return { dropdown: !prevState.dropdown };
    });
  }

  toggleClick() {
    this.setState(prevState => {
      return { hidden: !prevState.hidden, dropdown: false };
    });
  }
  render() {
    let content;
    let dropdownClass =
      "w-10/12 relative border-2 cursor-pointer hover:border-gray-600 text-center mt-1 rounded-full";

    if (!this.state.dropdown) {
      dropdownClass += " border-gray-500";
    } else {
      dropdownClass += " border-gray-600";
    }
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
        case "Headers":
          // <Globaldivcanvas focus={header}
          canvas = <Globalmenucanvas focus={this.state.focus} />;
          break;
        case "Paragaraphs":
          // code block
          canvas = <Globalmenucanvas focus={this.state.focus} />;
          break;
        case "Something":
          // code block
          canvas = <Globalmenucanvas focus={this.state.focus} />;
          break;
        default:
          canvas = <Globalmenucanvas focus={this.state.focus} />;
      }
      content = (
        <div className="bg-gray-300 mt-1  hover:border-gray-600 border-gray-500 border-2 w-11/12 rounded-lg flex flex-col items-center ">
          <div
            className="cursor-pointer bg-gray-300 rounded-full border-2 border-gray-500 hover:border-gray-600 w-11/12 text-center mt-1"
            onClick={this.toggleClick}
          >
            <div className="">Menu Settings</div>
          </div>
          <div className={dropdownClass} onClick={this.toggleDropdown}>
            <Globaldropdown
              focus={this.state.focus}
              toggle={this.toggleDropdown}
              setFocus={this.setFocus}
              open={this.state.dropdown}
            />
          </div>
          {canvas}
          item manipulator?
        </div>
      );
    }

    return <div className="w-full flex justify-center">{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(GlobalOptions);
