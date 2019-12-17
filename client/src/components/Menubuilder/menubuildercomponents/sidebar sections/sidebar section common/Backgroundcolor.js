import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updatePageSetting,
  updateSectionSetting
} from "../../../../../actions/menubuilderActions";

import Colorpicker from "../../../../Common/Colorpicker";
import Checkbox from "../../../../Common/Checkbox";

class Backgroundcolor extends Component {
  constructor(props) {
    super(props);
    this.changePageBackgroundColor = this.changePageBackgroundColor.bind(this);
    this.changeSectionBackgroundColor = this.changeSectionBackgroundColor.bind(
      this
    );
    this.toggleInherit = this.toggleInherit.bind(this);
    this.toggleNone = this.toggleNone.bind(this);
  }

  changePageBackgroundColor(newColor) {
    this.props.updatePageSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      "backgroundColor",
      newColor
    );
  }

  changeSectionBackgroundColor(newColor) {
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "backgroundColor",
      newColor
    );
  }

  toggleInherit() {
    this.props.updatePageSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      "InheritbackgroundColor",
      !this.props.menuArr.menuArr[this.props.menuArr.pageFocus].Settings
        .InheritbackgroundColor
    );
  }

  toggleNone() {
    let { hasBackgroundColor } = this.props.menuArr.menuArr[
      this.props.menuArr.pageFocus
    ].Content[this.props.menuArr.sectionFocus].Settings;

    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "hasBackgroundColor",
      !hasBackgroundColor
    );
  }

  render() {
    let { pageFocus } = this.props.menuArr;
    let changeBackgroundColor = null;
    let words = "";
    let menuBackgroundColor;
    let pageBackgroundColor;
    let hasBackgroundColor;
    let controlColor;
    let toggled;
    let toggle;

    switch (this.props.scope) {
      case "Page":
        toggled = this.props.menuArr.menuArr[pageFocus].Settings
          .InheritbackgroundColor;
        menuBackgroundColor = this.props.globalState.globalStyles.menu
          .backgroundColor;
        pageBackgroundColor = this.props.menuArr.menuArr[pageFocus].Settings
          .backgroundColor;
        changeBackgroundColor = this.changePageBackgroundColor;
        controlColor = pageBackgroundColor
          ? pageBackgroundColor
          : menuBackgroundColor;
        words = "Inherit";
        toggle = this.toggleInherit;
        break;

      case "Section":
        changeBackgroundColor = this.changeSectionBackgroundColor;
        words = "None";
        hasBackgroundColor = this.props.menuArr.menuArr[pageFocus].Content[
          this.props.menuArr.sectionFocus
        ].Settings.hasBackgroundColor;
        if (!hasBackgroundColor) {
          toggled = true;
        } else {
          toggled = false;
        }
        toggle = this.toggleNone;
        controlColor = this.props.menuArr.menuArr[pageFocus].Content[
          this.props.menuArr.sectionFocus
        ].Settings.backgroundColor;

        break;
      default:
        break;
    }

    let divstyle = {
      zIndex: 100
    };
    return (
      <div className="z-50  border-gray-500 w-full" style={divstyle}>
        <div className="mb-2 w-auto">
          <span className="border-b-2 border-gray-500">Background Color</span>{" "}
        </div>
        <div className="flex w-full">
          <div className="flex justify-between">
            <Checkbox toggled={toggled} toggleClick={toggle} />{" "}
            <div className="pl-1">{words}</div>
          </div>
        </div>
        <div className=" flex flex-rows">
          <Colorpicker
            style={{ alignSelf: "start", width: "25%" }}
            controlColor={controlColor}
            changeColor={changeBackgroundColor}
          />
        </div>
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
  updateSectionSetting
})(Backgroundcolor);
