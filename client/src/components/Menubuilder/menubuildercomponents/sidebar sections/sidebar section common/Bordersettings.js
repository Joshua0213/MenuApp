import React, { Component } from "react";
import { connect } from "react-redux";

import { updateSectionSetting } from "../../../../../actions/menubuilderActions";

import NumberFieldGroup from "../../../../Common/NumberFieldGroup";
import Checkbox from "../../../../Common/Checkbox";

class Bordersettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBorder: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.borderWidth,
      newBorderTop: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.borderTop,
      newBorderBottom: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.borderBottom,
      newBorderRight: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.borderRight,
      newBorderLeft: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.borderLeft
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitFineTune = this.onSubmitFineTune.bind(this);
    this.toggleBorderControl = this.toggleBorderControl.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleBorderControl() {
    let { borderControl } = this.props.menuArr.menuArr[
      this.props.menuArr.pageFocus
    ].Content[this.props.menuArr.sectionFocus].Settings;

    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderControl",
      !borderControl
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderWidth",
      this.state.newBorder
    );
  }

  onSubmitFineTune(e) {
    console.log(
      this.state.newBorderBottom,
      this.state.newBorderTop,
      this.state.newBorderRight,
      this.state.newBorderRight
    );
    e.preventDefault();
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderTop",
      this.state.newBorderTop
    );
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderBottom",
      this.state.newBorderBottom
    );
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderRight",
      this.state.newBorderRight
    );
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "borderLeft",
      this.state.newBorderLeft
    );
  }

  render() {
    let { pageFocus, sectionFocus, menuArr } = this.props.menuArr;
    let { borderWidth, borderControl } = menuArr[pageFocus].Content[
      sectionFocus
    ].Settings;

    let content;

    if (borderControl) {
      content = (
        <div>
          <div className="flex flex-col items-center">
            <div className="flex w-full justify-around">
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newBorderTop}
                    name="newBorderTop"
                    type="number"
                    min={0}
                    max={2000}
                    value={this.state.newBorderTop}
                    onChange={this.onChange}
                  />
                </form>
                <div>Top</div>
              </div>
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newBorderBottom}
                    name="newBorderBottom"
                    type="number"
                    min={0}
                    max={2000}
                    value={this.state.newBorderBottom}
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
                    placeholder={this.state.newBorderLeft}
                    name="newBorderLeft"
                    type="number"
                    min={0}
                    max={2000}
                    value={this.state.newBorderLeft}
                    onChange={this.onChange}
                  />
                </form>
                <div>Left</div>
              </div>
              <div className="flex">
                <form onSubmit={this.onSubmitFineTune}>
                  <NumberFieldGroup
                    placeholder={this.state.newBorderRight}
                    name="newBorderRight"
                    type="number"
                    min={0}
                    max={2000}
                    value={this.state.newBorderRight}
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
        <div className="w-full pb-2 text-sm">Borders</div>
        <div className="flex flex-rows justify-around">
          <form className="flex flex-rows" onSubmit={this.onSubmit}>
            <NumberFieldGroup
              placeholder={this.state.newBorder}
              name="newBorder"
              type="number"
              min={0}
              max={2000}
              value={this.state.newBorder}
              onChange={this.onChange}
            />
            <div>{borderWidth}px</div>
          </form>
          <div className="flex flex-rows">
            <Checkbox
              toggled={borderControl}
              toggleClick={this.toggleBorderControl}
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
})(Bordersettings);
