import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updatePageSetting,
  updateSectionSetting
} from "../../../../../actions/menubuilderActions";

import Colorpicker from "../../../../Common/Colorpicker";
import NumberFieldGroup from "../../../../Common/NumberFieldGroup";
import Checkbox from "../../../../Common/Checkbox";

class Bordersettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newWidth: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.borderWidth
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleBorder = this.toggleBorder.bind(this);
    this.updateBorderColor = this.updateBorderColor.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  updateBorderColor(newColor) {
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderColor",
      newColor
    );
  }

  toggleBorder() {
    let { borderStyle } = this.props.menuArr.menuArr[
      this.props.menuArr.pageFocus
    ].Content[this.props.menuArr.sectionFocus].Settings;

    let newborderStyle;

    if (borderStyle === "none") {
      newborderStyle = "solid";
    } else {
      newborderStyle = "none";
    }

    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderStyle",
      newborderStyle
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderWidth",
      this.state.newWidth
    );
  }

  render() {
    let { pageFocus, sectionFocus, menuArr } = this.props.menuArr;
    let { borderStyle, borderWidth, borderColor } = menuArr[pageFocus].Content[
      sectionFocus
    ].Settings;
    let hasBorder;
    if (borderStyle === "solid") {
      hasBorder = true;
    } else {
      hasBorder = false;
    }
    return (
      <div className="py-1 border-bottom-2 border-b-2 border-gray-500">
        <div className="w-full pb-2 text-sm">Border</div>
        <div>
          <form
            className="w-full flex flex-rows justify-center"
            onSubmit={this.onSubmit}
          >
            <Checkbox toggled={hasBorder} toggleClick={this.toggleBorder} />
            <span className=" mr-4">None</span>
            <NumberFieldGroup
              placeholder={this.state.newWidth}
              name="newWidth"
              type="number"
              min={0}
              max={100}
              value={this.state.newWidth}
              onChange={this.onChange}
            />
            <div>{borderWidth}px</div>
          </form>
        </div>
        <div className="mt-1 ml-1 " style={{ width: "41px" }}>
          <Colorpicker
            controlColor={borderColor}
            changeColor={this.updateBorderColor}
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
})(Bordersettings);
