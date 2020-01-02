import React, { Component } from "react";
import { connect } from "react-redux";

import Pagenavbar from "./pagecomponents/Pagenavbar";
import Pagecanvas from "./pagecomponents/Pagecanvas";
import Motivation from "../../Menubuilder/menubuildercomponents/page sections/Motivation";

class Page extends Component {
  render() {
    let navbar = <Pagenavbar />;
    let { pageArray } = this.props.Page;
    if (pageArray.length === 1) {
      navbar = <></>;
    }
    return (
      <div
        id="Page"
        style={{
          height: "100%"
        }}
      >
        {navbar}
        <Pagecanvas />
        <Motivation />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Page);
