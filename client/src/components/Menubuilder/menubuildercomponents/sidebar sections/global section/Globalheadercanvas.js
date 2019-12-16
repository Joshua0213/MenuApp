import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updatePageSetting,
  updateGlobalSetting
} from "../../../../../actions/menubuilderActions";

import Colorpicker from "../../../../Common/Colorpicker";

class Globalheadercanvas extends Component {
  constructor(props) {
    super(props);
    this.updateHeaderBackground = this.updateHeaderBackground.bind(this);
  }

  updateHeaderBackground(newColor) {
    this.props.updateGlobalSetting(
      this.props.globalState.globalStyles,
      "headers",
      "GbackgroundColor",
      newColor
    );
  }

  render() {
    let headerbackground = this.props.globalState.globalStyles.headers
      .GbackgroundColor;
    return (
      <div className="w-11/12 h-24 overflow-auto bg-gray-100 my-1 rounded-lg border-2 border-gray-400 hover:border-gray-500">
        {this.props.focus}
        <Colorpicker
          controlColor={headerbackground}
          changeColor={this.updateHeaderBackground}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr,
  globalState: state.globalstyles
});

export default connect(mapStateToProps, {
  updatePageSetting,
  updateGlobalSetting
})(Globalheadercanvas);
