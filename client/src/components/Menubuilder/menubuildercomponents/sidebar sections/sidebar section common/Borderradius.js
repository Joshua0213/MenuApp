import React, { Component } from "react";
import { connect } from "react-redux";

import { updateSectionSetting } from "../../../../../actions/menubuilderActions";

import NumberFieldGroup from "../../../../Common/NumberFieldGroup";
import Checkbox from "../../../../Common/Checkbox";

class Borderradius extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBorderRadius: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.borderRadius,
      newBorderRadiusTopLeft: this.props.menuArr.menuArr[
        this.props.menuArr.pageFocus
      ].Content[this.props.menuArr.sectionFocus].Settings.borderRadiusTopLeft,
      newBorderRadiusTopRight: this.props.menuArr.menuArr[
        this.props.menuArr.pageFocus
      ].Content[this.props.menuArr.sectionFocus].Settings.borderRadiusTopRight,
      newBorderRadiusBottomLeft: this.props.menuArr.menuArr[
        this.props.menuArr.pageFocus
      ].Content[this.props.menuArr.sectionFocus].Settings
        .borderRadiusBottomLeft,
      newBorderRadiusBottomRight: this.props.menuArr.menuArr[
        this.props.menuArr.pageFocus
      ].Content[this.props.menuArr.sectionFocus].Settings
        .borderRadiusBottomRight
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitFineTune = this.onSubmitFineTune.bind(this);
    this.toggleBorderRadiusControl = this.toggleBorderRadiusControl.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleBorderRadiusControl() {
    let { borderRadiusControl } = this.props.menuArr.menuArr[
      this.props.menuArr.pageFocus
    ].Content[this.props.menuArr.sectionFocus].Settings;

    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderRadiusControl",
      !borderRadiusControl
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderRadius",
      this.state.newBorderRadius
    );
  }

  onSubmitFineTune(e) {
    console.log(
      this.state.newBorderRadiusTopRight,
      this.state.newBorderRadiusTopLeft,
      this.state.newBorderRadiusBottomLeft,
      this.state.newBorderRadiusBottomLeft
    );
    e.preventDefault();
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderRadiusTopLeft",
      this.state.newBorderRadiusTopLeft
    );
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderRadiusTopRight",
      this.state.newBorderRadiusTopRight
    );
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderRadiusBottomLeft",
      this.state.newBorderRadiusBottomLeft
    );
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderRadiusBottomRight",
      this.state.newBorderRadiusBottomRight
    );
  }

  render() {
    let { pageFocus, sectionFocus, menuArr } = this.props.menuArr;
    let { borderRadius, borderRadiusControl } = menuArr[pageFocus].Content[
      sectionFocus
    ].Settings;

    let content;

    if (borderRadiusControl) {
      content = (
        <div>
          <div className="flex flex-col items-center">
            <div className="flex w-full justify-around">
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newBorderRadiusTopLeft}
                    name="newBorderRadiusTopLeft"
                    type="number"
                    min={0}
                    max={20000}
                    value={this.state.newBorderRadiusTopLeft}
                    onChange={this.onChange}
                  />
                </form>
                <div>Top-Left</div>
              </div>
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newBorderRadiusTopRight}
                    name="newBorderRadiusTopRight"
                    type="number"
                    min={0}
                    max={20000}
                    value={this.state.newBorderRadiusTopRight}
                    onChange={this.onChange}
                  />
                </form>
                <div>Top-Right</div>
              </div>
            </div>
            <div className="flex w-full justify-around">
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newBorderRadiusBottomRight}
                    name="newBorderRadiusBottomRight"
                    type="number"
                    min={0}
                    max={20000}
                    value={this.state.newBorderRadiusBottomRight}
                    onChange={this.onChange}
                  />
                </form>
                <div>Bottom-Right</div>
              </div>
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newBorderRadiusBottomLeft}
                    name="newBorderRadiusBottomLeft"
                    type="number"
                    min={0}
                    max={20000}
                    value={this.state.newBorderRadiusBottomLeft}
                    onChange={this.onChange}
                  />
                </form>
                <div>Bottom-Left</div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="py-1 border-bottom-2 border-b-2 border-gray-500">
        <div className="w-full pb-2 text-sm">Border Radius</div>
        <div className="flex flex-rows justify-around">
          <form className="flex flex-rows" onSubmit={this.onSubmit}>
            <NumberFieldGroup
              placeholder={this.state.newBorderRadius}
              name="newBorderRadius"
              type="number"
              min={0}
              max={20000}
              value={this.state.newBorderRadius}
              onChange={this.onChange}
            />
            <div>{borderRadius}px</div>
          </form>
          <div className="flex flex-rows">
            <Checkbox
              toggled={borderRadiusControl}
              toggleClick={this.toggleBorderRadiusControl}
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
  updateSectionSetting
})(Borderradius);
