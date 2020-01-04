import React, { Component } from "react";
import { connect } from "react-redux";

import Sidebarsettingsnavigation from "./Sidebarsettingsnavigation";

class Sidebarsettings extends Component {
  render() {
    let { settingsFocus } = this.props.Page;
    let content;
    if (settingsFocus === null) {
      content = "settings";
    } else {
      content = `${settingsFocus}`;
    }
    return (
      <div>
        {" "}
        <Sidebarsettingsnavigation /> {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Sidebarsettings);
