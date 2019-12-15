import React, { Component } from "react";
import { connect } from "react-redux";

import { updatePageSetting } from "../../../../../actions/menubuilderActions";

import Colorpicker from "../../../../Common/Colorpicker";
import Checkbox from "../../../../Common/Checkbox";

class Backgroundcolor extends Component {
  constructor(props) {
    super(props);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.toggleInherit = this.toggleInherit.bind(this);
  }

  changeBackgroundColor(newColor) {
    this.props.updatePageSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      "backgroundColor",
      newColor
    );
  }

  toggleInherit() {
    console.log(
      this.props.menuArr.menuArr[this.props.menuArr.pageFocus].Settings
        .InheritbackgroundColor
    );
    this.props.updatePageSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      "InheritbackgroundColor",
      !this.props.menuArr.menuArr[this.props.menuArr.pageFocus].Settings
        .InheritbackgroundColor
    );
  }

  render() {
    let divstyle = {
      zIndex: 100
    };
    let { pageFocus } = this.props.menuArr;
    let inheritColor = this.props.menuArr.menuArr[pageFocus].Settings
      .InheritbackgroundColor;
    let globalBackgroundColor = this.props.globalState.globalStyles.menu
      .backgroundColor;
    let localBackgroundColor = this.props.menuArr.menuArr[pageFocus].Settings
      .backgroundColor;
    let toggleBackground;
    let currentBackgroundColor;
    if (inheritColor) {
      currentBackgroundColor = globalBackgroundColor;
    } else {
      toggleBackground = false;
      currentBackgroundColor = localBackgroundColor;
    }
    return (
      <div
        className="   pt-4 z-50 border-b-2 border-gray-500 py-2"
        style={divstyle}
      >
        <div className="w-full pb-2">Background Color</div>
        <div className="flex w-full">
          <div className="flex justify-between">
            <Checkbox toggled={inheritColor} toggleClick={this.toggleInherit} />{" "}
            <div className="pl-1">Inherit</div>
          </div>
          <div className="pl-4">
            <Colorpicker
              controlColor={
                localBackgroundColor
                  ? localBackgroundColor
                  : globalBackgroundColor
              }
              changeColor={this.changeBackgroundColor}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr,
  globalState: state.globalstyles
});

export default connect(mapStateToProps, { updatePageSetting })(Backgroundcolor);
