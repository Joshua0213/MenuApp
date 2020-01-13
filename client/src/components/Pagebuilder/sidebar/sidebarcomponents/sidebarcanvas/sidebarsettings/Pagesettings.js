import React, { Component } from "react";
import { connect } from "react-redux";

class Pagesettings extends Component {
  render() {
    return <div id="Sidebar_Settings_Page">Page Settings</div>;
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Pagesettings);
