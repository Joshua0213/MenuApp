import React, { Component } from "react";
import { connect } from "react-redux";

import Menupage from "./Menupage";

class Menupagecanvas extends Component {
  render() {
    let { menuArr } = this.props.menuArr;
    const pages = menuArr.map((page, index) => {
      return <Menupage key={index} MyFocus={index} />;
    });
    return <div id="Menupagecanvas block w-auto">{pages}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Menupagecanvas);
