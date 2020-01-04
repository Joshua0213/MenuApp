import React, { Component } from "react";
import { connect } from "react-redux";

class Sidebarsettings extends Component {
  render() {
    let { settingsFocus } = this.props.Page;
    return <div>settings</div>;
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Sidebarsettings);
