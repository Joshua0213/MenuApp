import React, { Component } from "react";
import { connect } from "react-redux";

import { updateSectionSetting } from "../../../../../actions/menubuilderActions";

import NumberFieldGroup from "../../../../Common/NumberFieldGroup";

class ZIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newzIndex: this.props.menuArr.menuArr[this.props.menuArr.pageFocus]
        .Content[this.props.menuArr.sectionFocus].Settings.zIndex
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
      "zIndex",
      this.state.newzIndex
    );
  }

  render() {
    let { pageFocus, sectionFocus, menuArr } = this.props.menuArr;
    let { zIndex } = menuArr[pageFocus].Content[sectionFocus].Settings;

    return (
      <div className="py-1 border-bottom-2 border-b-2 border-gray-500">
        <div className="w-full pb-2 text-sm">zIndex</div>
        <div className="flex flex-rows justify-around">
          <form className="flex flex-rows" onSubmit={this.onSubmit}>
            <NumberFieldGroup
              placeholder={this.state.newzIndex}
              name="newzIndex"
              type="number"
              min={0}
              max={10000}
              value={this.state.newzIndex}
              onChange={this.onChange}
            />
            <div>zIndex: ({zIndex})</div>
          </form>
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
  updateSectionSetting
})(ZIndex);
