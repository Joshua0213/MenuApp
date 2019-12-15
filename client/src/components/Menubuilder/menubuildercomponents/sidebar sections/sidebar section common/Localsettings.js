import React, { Component } from "react";
import { connect } from "react-redux";

import Checkbox from "../../../../Common/Checkbox";
import Colorpicker from "../../../../Common/Colorpicker";
import Backgroundcolor from "../../sidebar sections/sidebar section common/Backgroundcolor";

class Localsettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      focus: this.props.menuArr.pageFocus
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(prev => {
      return { open: !prev.open };
    });
  }

  render() {
    let content;
    let toggleBackground;
    let focus = this.state.focus;
    let backgroundColor = this.props.menuArr.menuArr[
      this.props.menuArr.pageFocus
    ].Settings.backgroundColor;
    if (backgroundColor === null) {
      toggleBackground = false;
    } else {
      toggleBackground = true;
    }

    let toggle = this.toggleOpen;
    let mainClasses =
      "pb-1 mt-2 px-1 w-full border-b-2 border-t-2 rounded hover:border-gray-600";

    if (!this.state.open) {
      let icon = (
        <svg
          className=" ml-2 w-4 h-4 self-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-8V5h4v5h3l-5 5-5-5h3z" />
        </svg>
      );
      content = (
        <div className="flex justify-between">
          {this.props.name}
          {icon}
        </div>
      );
      mainClasses += " hover:border-gray-600 border-gray-500 cursor-pointer";
    } else {
      toggle = null;
      let icon = (
        <svg
          className="ml-2 w-4 h-4 self-center"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm2 8v5H8v-5H5l5-5 5 5h-3z" />
        </svg>
      );
      content = (
        <div>
          <div
            className="flex justify-between py-2 border-b-2 border-gray-500 cursor-pointer w-full"
            onClick={this.toggleOpen}
          >
            {this.props.name}
            {icon}
          </div>
          {/* <div className="border-b-2 border-gray-500 py-2">
            <div className="w-full pb-2">{this.props.name + " Color"}</div>
            <div className="flex w-full">
              <div className="flex justify-between">
                <Checkbox toggled={toggleBackground} />{" "}
                <div className="pl-1">Inherit</div>
              </div>
              <div className="pl-4">
                <Colorpicker />
              </div>
            </div>
          </div> */}
          <Backgroundcolor />
          <div className="w-full ">{this.props.name} Settings!!</div>
          <Checkbox toggled={false} />
        </div>
      );
      mainClasses += " border-gray-600";
    }
    return (
      <div className={mainClasses} onClick={toggle}>
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr,
  globalState: state.globalstyles
});

export default connect(mapStateToProps, {})(Localsettings);
