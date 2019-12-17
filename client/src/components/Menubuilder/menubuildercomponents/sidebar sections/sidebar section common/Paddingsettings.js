import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updatePageSetting,
  updateSectionSetting
} from "../../../../../actions/menubuilderActions";

import NumberFieldGroup from "../../../../Common/NumberFieldGroup";
import Checkbox from "../../../../Common/Checkbox";

class Paddingsettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPadding: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.padding,
      newPaddingTop: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.paddingTop,
      newPaddingBottom: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.paddingBottom,
      newPaddingRight: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.paddingRight,
      newPaddingLeft: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.paddingLeft
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitFineTune = this.onSubmitFineTune.bind(this);
    this.togglePaddingControl = this.togglePaddingControl.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  togglePaddingControl() {
    let { paddingControl } = this.props.menuArr.menuArr[
      this.props.menuArr.pageFocus
    ].Content[this.props.menuArr.sectionFocus].Settings;

    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "paddingControl",
      !paddingControl
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "padding",
      this.state.newPadding
    );
  }

  onSubmitFineTune(e) {
    console.log(
      this.state.newPaddingBottom,
      this.state.newPaddingTop,
      this.state.newPaddingRight,
      this.state.newPaddingRight
    );
    e.preventDefault();
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "paddingTop",
      this.state.newPaddingTop
    );
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "paddingBottom",
      this.state.newPaddingBottom
    );
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "paddingRight",
      this.state.newPaddingRight
    );
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "paddingLeft",
      this.state.newPaddingLeft
    );
  }

  render() {
    let { pageFocus, sectionFocus, menuArr } = this.props.menuArr;
    let { padding, paddingControl } = menuArr[pageFocus].Content[
      sectionFocus
    ].Settings;

    let content;

    if (paddingControl) {
      content = (
        <div>
          <div className="flex flex-col items-center">
            <div className="flex w-full justify-around">
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newPaddingTop}
                    name="newPaddingTop"
                    type="number"
                    min={-2000}
                    max={2000}
                    value={this.state.newPaddingTop}
                    onChange={this.onChange}
                  />
                </form>
                <div>Top</div>
              </div>
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newPaddingBottom}
                    name="newPaddingBottom"
                    type="number"
                    min={-2000}
                    max={2000}
                    value={this.state.newPaddingBottom}
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
                    placeholder={this.state.newPaddingLeft}
                    name="newPaddingLeft"
                    type="number"
                    min={-2000}
                    max={2000}
                    value={this.state.newPaddingLeft}
                    onChange={this.onChange}
                  />
                </form>
                <div>Left</div>
              </div>
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newPaddingRight}
                    name="newPaddingRight"
                    type="number"
                    min={-2000}
                    max={2000}
                    value={this.state.newPaddingRight}
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
        <div className="w-full pb-2 text-sm">Padding</div>
        <div className="flex flex-rows justify-around">
          <form className="flex flex-rows" onSubmit={this.onSubmit}>
            <NumberFieldGroup
              placeholder={this.state.newPadding}
              name="newPadding"
              type="number"
              min={-2000}
              max={2000}
              value={this.state.newPadding}
              onChange={this.onChange}
            />
            <div>{padding}px</div>
          </form>
          <div className="flex flex-rows">
            <Checkbox
              toggled={paddingControl}
              toggleClick={this.togglePaddingControl}
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
})(Paddingsettings);
