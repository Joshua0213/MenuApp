import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleIcons } from "../../../../../actions/menubuilderActions";

class Icontoggle extends Component {
  constructor(props) {
    super(props);
    this.toggleFunc = this.toggleFunc.bind(this);
  }

  toggleFunc() {
    this.props.toggleIcons(!this.props.menuArr.hideIcons);
  }
  render() {
    let { hideIcons } = this.props.menuArr;
    let content;
    if (hideIcons) {
      content = (
        <div className="h-4 w-12 flex flex-row cursor-pointer">
          <div className="h-4 w-6 bg-gray-400"></div>
          <div className="h-4 w-6 bg-red-500"></div>
        </div>
      );
    } else {
      content = (
        <div className="h-4 w-12 flex flex-row cursor-pointer">
          <div className="h-4 w-6 bg-green-500"></div>
          <div className="h-4 w-6 bg-gray-400"></div>
        </div>
      );
    }
    return <div onClick={this.toggleFunc}>{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { toggleIcons })(Icontoggle);
