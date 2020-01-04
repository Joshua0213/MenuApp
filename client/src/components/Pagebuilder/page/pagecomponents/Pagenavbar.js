import React, { Component } from "react";
import { connect } from "react-redux";

import Pagenavbartab from "./Pagenavbartab";

class Pagenavbar extends Component {
  render() {
    let { pageArray, displaySize } = this.props.Page;
    let navbarTabs = [];
    pageArray.forEach((e, i) => {
      navbarTabs.push(<Pagenavbartab key={i} index={i} name={e.Title} />);
    });
    return (
      <div
        id="Page_Navbar"
        style={{
          display: "flex",
          backgroundColor: "PowderBlue",
          width:
            displaySize === "large"
              ? "100%"
              : displaySize === "small"
              ? "411px"
              : "768px"
        }}
      >
        {navbarTabs}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Pagenavbar);
