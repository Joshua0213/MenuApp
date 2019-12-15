import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updatePageSetting,
  updateGlobalSetting
} from "../../../../../actions/menubuilderActions";

import Colorpicker from "../../../../Common/Colorpicker";

class Globalmenucanvas extends Component {
  constructor(props) {
    super(props);
    this.updateMenuBackground = this.updateMenuBackground.bind(this);
  }

  updateMenuBackground(newColor) {
    this.props.updateGlobalSetting(
      this.props.globalState.globalStyles,
      "menu",
      "backgroundColor",
      newColor
    );
  }

  render() {
    let menubackground = this.props.globalState.globalStyles.menu
      .backgroundColor;
    return (
      <div className="w-11/12 h-24 overflow-auto bg-gray-100 my-1 rounded-lg border-2 border-gray-400 hover:border-gray-500">
        {this.props.focus}
        <Colorpicker
          controlColor={menubackground}
          changeColor={this.updateMenuBackground}
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
})(Globalmenucanvas);
