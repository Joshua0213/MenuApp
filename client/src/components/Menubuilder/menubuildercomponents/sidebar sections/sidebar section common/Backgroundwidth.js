import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updatePageSetting,
  updateSectionSetting
} from "../../../../../actions/menubuilderActions";

import NumberFieldGroup from "../../../../Common/NumberFieldGroup";
import Justifyicons from "../sidebar section common/Justifyicons";

class Backgroundwidth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newWidth: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.width
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.updateSectionSetting(
      this.props.menuArr.menuArr,
      this.props.menuArr.pageFocus,
      this.props.menuArr.sectionFocus,
      "width",
      this.state.newWidth
    );
  }
  render() {
    let content;
    let { pageFocus, sectionFocus, menuArr } = this.props.menuArr;
    let { width, justifySelf } = menuArr[pageFocus].Content[
      sectionFocus
    ].Settings;
    if (true) {
      content = "content";
    }
    return (
      <div className="py-4 border-bottom-2 border-b-2 border-gray-500">
        <div className="w-full pb-2">Background Width</div>
        <div>
          <form
            className="w-full flex flex-rows justify-center"
            onSubmit={this.onSubmit}
          >
            <NumberFieldGroup
              className="2/12"
              placeholder={`${width}%`}
              name="newWidth"
              type="number"
              min={0}
              max={100}
              value={this.state.newWidth}
              onChange={this.onChange}
            />
            <div>{width}%</div>
          </form>
          <div className="w-full pt-4">
            <Justifyicons justify={justifySelf} />
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

export default connect(mapStateToProps, {
  updatePageSetting,
  updateSectionSetting
})(Backgroundwidth);
