import React, { Component } from "react";
import { connect } from "react-redux";

import Sidebarsettingsnavigation from "./Sidebarsettingsnavigation";
import Pagesettings from "./Pagesettings";
import Headersettings from "./Headersettings";
import Containersettings from "./Containersettings";

class Sidebarsettings extends Component {
  render() {
    let { settingsFocus, pageArray, pageFocus } = this.props.Page;
    let content = <Pagesettings />;
    let section = null;
    if (settingsFocus !== null) {
      section = pageArray[pageFocus].Sections[settingsFocus[0]];
      if (settingsFocus.length > 1) {
        section = section.Content[settingsFocus[1]];
        if (settingsFocus.length > 2) {
          section = section.Content[settingsFocus[2]];
        }
      }
    }
    if (section !== null) {
      switch (section.Type) {
        case "Header":
          content = <Headersettings />;
          break;
        case "Container":
          content = <Containersettings />;
          break;

        default:
          break;
      }
    }

    return (
      <div id="Sidebar_Settings">
        <Sidebarsettingsnavigation />
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Sidebarsettings);
