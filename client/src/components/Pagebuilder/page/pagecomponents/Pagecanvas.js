import React, { Component } from "react";
import { connect } from "react-redux";

class Pagecanvas extends Component {
  render() {
    return <div>Page Canvas</div>;
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Pagecanvas);
