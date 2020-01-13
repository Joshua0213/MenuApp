import React, { Component } from "react";
import { connect } from "react-redux";

import {
  setSettingsFocus,
  setSidebarDisplay
} from "../../../../../../actions/pageActions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.newSettingsFocus = this.newSettingsFocus.bind(this);
  }

  newSettingsFocus() {
    let { Page, address, setSettingsFocus, setSidebarDisplay } = this.props;
    let { settingsFocus } = Page;
    setSidebarDisplay("Settings");
    if (settingsFocus !== null) {
      setSettingsFocus(null);
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
    let { Settings } = section;
    let {
      tuneBorder,
      tuneBorderRadius,
      tuneMargin,
      tunePadding,
      hasBackgroundColor,
      backgroundColor,
      borderSettings,
      borderRadiusSettings,
      marginSettings,
      paddingSettings
    } = section.extraSettings;
    if (tuneBorder) {
      Settings = {
        ...Settings,
        ...borderSettings
      };
    }
    if (tuneBorderRadius) {
      Settings = {
        ...Settings,
        ...borderRadiusSettings
      };
    }
    if (tuneMargin) {
      Settings = {
        ...Settings,
        ...marginSettings
      };
    }
    if (tunePadding) {
      Settings = {
        ...Settings,
        ...paddingSettings
      };
    }
    if (hasBackgroundColor) {
      Settings = {
        ...Settings,
        backgroundColor: backgroundColor
      };
    }
    return (
      <h1
        onClick={this.newSettingsFocus}
        style={{
          ...Settings,
          outline: outline,
          cursor: "pointer"
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

export default connect(mapStateToProps, {
  setSettingsFocus,
  setSidebarDisplay
})(Header);
