import React, { Component } from "react";
import { connect } from "react-redux";

import { setSettingsFocus } from "../../../../../../actions/pageActions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.newSettingsFocus = this.newSettingsFocus.bind(this);
  }

  newSettingsFocus() {
    let { address, setSettingsFocus, Page } = this.props;
    let { settingsFocus } = Page;
    if (settingsFocus !== null) {
      if (address.toString() === settingsFocus.toString()) {
        setSettingsFocus(null);
      } else {
        setSettingsFocus(address);
      }
    } else {
      setSettingsFocus(address);
    }
  }

  render() {
    let { Page, address } = this.props;
    let { pageArray, pageFocus, settingsFocus } = Page;
    let section = pageArray[pageFocus].Sections[address[0]];
    let outline;
    if (settingsFocus !== null) {
      if (address.toString() === settingsFocus.toString()) {
        outline = "1px dashed Blue";
      }
    }
    if (address.length > 1) {
      let tempAddress = [];
      address.forEach(e => {
        tempAddress.push(e);
      });
      tempAddress.splice(0, 1);
      tempAddress.forEach(e => {
        section = section.Content[e];
      });
    }
    return (
      <h1
        onClick={this.newSettingsFocus}
        style={{
          ...section.Settings,
          outline: outline
        }}
      >
        {section.Value}
      </h1>
    );
  }
}
const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { setSettingsFocus })(Header);
