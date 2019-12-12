import React, { Component } from "react";
import { connect } from "react-redux";

class Headersection extends Component {
  render() {
    let pageArr = this.props.menuArr.menuArr;
    let sectionArr = pageArr[this.props.pageLocation].Content;
    let content = sectionArr[this.props.sectionLocation].Value;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Headersection);
