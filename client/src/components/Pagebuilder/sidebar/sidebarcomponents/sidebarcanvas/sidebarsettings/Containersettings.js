import React, { Component } from "react";
import { connect } from "react-redux";

class Containersettings extends Component {
  render() {
    let { settingsFocus, pageArray, pageFocus } = this.props.Page;
    let content = "";
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
    if (section.Settings.flexDirection === "row") {
      content = "Columns";
    } else {
      content = "Rows";
    }
    return <div>{content} settings</div>;
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Containersettings);
