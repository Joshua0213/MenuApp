import React, { Component } from "react";
import { connect } from "react-redux";

import { updateMenuSection } from "../../../../../../actions/pageActions";

import Rightjustify from "./Rightjustify";
import Leftjustify from "./Leftjustify";
import Centerjustify from "./Centerjustify";

class Justifyicons extends Component {
  constructor(props) {
    super(props);
    this.changeCenter = this.changeCenter.bind(this);
    this.changeLeft = this.changeLeft.bind(this);
    this.changeRight = this.changeRight.bind(this);
  }

  changeLeft(value) {
    let { Page, updateMenuSection } = this.props;
    let { settingsFocus } = Page;
    let { pageArray, pageFocus } = Page;
    this.props.changeSetting("alignSelf", "start");
    updateMenuSection(pageArray, pageFocus, settingsFocus, [
      "Settings",
      "alignSelf",
      "start"
    ]);
  }
  changeRight(value) {
    let { Page, updateMenuSection } = this.props;
    let { settingsFocus } = Page;
    let { pageArray, pageFocus } = Page;
    this.props.changeSetting("alignSelf", "start");
    updateMenuSection(pageArray, pageFocus, settingsFocus, [
      "Settings",
      "alignSelf",
      "flex-end"
    ]);
  }
  changeCenter(value) {
    let { Page, updateMenuSection } = this.props;
    let { settingsFocus } = Page;
    let { pageArray, pageFocus } = Page;
    this.props.changeSetting("alignSelf", "start");
    updateMenuSection(pageArray, pageFocus, settingsFocus, [
      "Settings",
      "alignSelf",
      "center"
    ]);
  }

  render() {
    let { alignSelf } = this.props;
    return (
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-around",
          marginTop: "10px"
        }}
      >
        <Leftjustify
          alignSelf={alignSelf}
          brightness={this.props.Page.brightness}
          changeSetting={this.changeLeft}
        />
        <Centerjustify
          alignSelf={alignSelf}
          brightness={this.props.Page.brightness}
          changeSetting={this.changeCenter}
        />

        <Rightjustify
          alignSelf={alignSelf}
          brightness={this.props.Page.brightness}
          changeSetting={this.changeRight}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { updateMenuSection })(Justifyicons);
