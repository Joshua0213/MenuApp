import React, { Component } from "react";
import { connect } from "react-redux";

import Pagenavbartab from "./Pagenavbartab";

class Pagenavbar extends Component {
  render() {
    let { pageArray } = this.props.Page;
    let navbarTabs = [];
    pageArray.forEach((e, i) => {
      navbarTabs.push(<Pagenavbartab key={i} name={e.Title} />);
    });
    return <div id="Page_Navbar">{navbarTabs}</div>;
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Pagenavbar);
