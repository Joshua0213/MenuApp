import React, { Component } from "react";
import { connect } from "react-redux";

import Backgroundcolor from "../sidebar section common/Backgroundcolor";
import Backgroundwidth from "../sidebar section common/Backgroundwidth";

class Sectionbackgroundsettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
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
    let toggle = this.toggleOpen;
    let mainClasses =
      "pb-1 mt-2 px-1 w-full border-b-2 border-t-2 rounded hover:border-gray-600";

    if (!this.state.open) {
      let icon = (
        <svg
          className=" ml-2 w-4 h-4 self-center fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-8V5h4v5h3l-5 5-5-5h3z" />
        </svg>
      );
      content = (
        <div className="flex justify-around text-black hover:text-green-700">
          <span className="text-black">Background Settings</span>
          {icon}
        </div>
      );
      mainClasses += " border-gray-500 cursor-pointer";
    } else {
      toggle = null;
      let icon = (
        <svg
          className="ml-2 w-4 h-4 self-center fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm2 8v5H8v-5H5l5-5 5 5h-3z" />
        </svg>
      );
      content = (
        <div>
          <div
            className="flex justify-around border-b-2 border-gray-500  text-black hover:text-green-700 cursor-pointer w-full"
            onClick={this.toggleOpen}
          >
            <span className="text-black">Background Settings</span>
            {icon}
          </div>
          <Backgroundcolor
            scope={"Section"}
            sectionLocation={this.props.sectionLocation}
          />
          <Backgroundwidth />
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

export default connect(mapStateToProps, {})(Sectionbackgroundsettings);
