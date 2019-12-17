import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updatePageSetting,
  updateSectionSetting
} from "../../../../../actions/menubuilderActions";

import NumberFieldGroup from "../../../../Common/NumberFieldGroup";
import Checkbox from "../../../../Common/Checkbox";

class Marginsettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMargin: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.margin,
      newMarginTop: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.marginTop,
      newMarginBottom: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.marginBottom,
      newMarginRight: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.marginRight,
      newMarginLeft: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.marginLeft
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitFineTune = this.onSubmitFineTune.bind(this);
    this.toggleMarginControl = this.toggleMarginControl.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleMarginControl() {
    let { marginControl } = this.props.menuArr.menuArr[
      this.props.menuArr.pageFocus
    ].Content[this.props.menuArr.sectionFocus].Settings;

    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "marginControl",
      !marginControl
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "margin",
      this.state.newMargin
    );
  }

  onSubmitFineTune(e) {
    console.log(
      this.state.newMarginBottom,
      this.state.newMarginTop,
      this.state.newMarginRight,
      this.state.newMarginRight
    );
    e.preventDefault();
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "marginTop",
      this.state.newMarginTop
    );
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "marginBottom",
      this.state.newMarginBottom
    );
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "marginRight",
      this.state.newMarginRight
    );
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "marginLeft",
      this.state.newMarginLeft
    );
  }

  render() {
    let { pageFocus, sectionFocus, menuArr } = this.props.menuArr;
    let { margin, marginControl } = menuArr[pageFocus].Content[
      sectionFocus
    ].Settings;

    let content;

    if (marginControl) {
      content = (
        <div>
          <div className="flex flex-col items-center">
            <div className="flex w-full justify-around">
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newMarginTop}
                    name="newMarginTop"
                    type="number"
                    min={-2000}
                    max={2000}
                    value={this.state.newMarginTop}
                    onChange={this.onChange}
                  />
                </form>
                <div>Top</div>
              </div>
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newMarginBottom}
                    name="newMarginBottom"
                    type="number"
                    min={-2000}
                    max={2000}
                    value={this.state.newMarginBottom}
                    onChange={this.onChange}
                  />
                </form>
                <div>Bottom</div>
              </div>
            </div>
            <div className="flex w-full justify-around">
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newMarginLeft}
                    name="newMarginLeft"
                    type="number"
                    min={-2000}
                    max={2000}
                    value={this.state.newMarginLeft}
                    onChange={this.onChange}
                  />
                </form>
                <div>Left</div>
              </div>
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newMarginRight}
                    name="newMarginRight"
                    type="number"
                    min={-2000}
                    max={2000}
                    value={this.state.newMarginRight}
                    onChange={this.onChange}
                  />
                </form>
                <div>Right</div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="py-1 border-bottom-2 border-b-2 border-gray-500">
        <div className="w-full pb-2 text-sm">Margins</div>
        <div className="flex flex-rows justify-around">
          <form className="flex flex-rows" onSubmit={this.onSubmit}>
            <NumberFieldGroup
              placeholder={this.state.newMargin}
              name="newMargin"
              type="number"
              min={-2000}
              max={2000}
              value={this.state.newMargin}
              onChange={this.onChange}
            />
            <div>{margin}px</div>
          </form>
          <div className="flex flex-rows">
            <Checkbox
              toggled={marginControl}
              toggleClick={this.toggleMarginControl}
            />
            <span className="text-sm">Fine Tune</span>
          </div>
        </div>
        <div>{content}</div>
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
})(Marginsettings);
