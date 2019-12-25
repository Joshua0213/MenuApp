import React, { Component } from "react";
import { connect } from "react-redux";

import Menupage from "./Menupage";

class Menupagecanvas extends Component {
  render() {
    let { menuArr, displaySize } = this.props.menuArr;
    let canvasWidth;
    switch (displaySize) {
      case "large":
        canvasWidth = "100%";
        break;
      case "medium":
        canvasWidth = "66%";
        break;
      case "small":
        canvasWidth = "33%";
        break;
      default:
        canvasWidth = "100%";
    }
    let canvasStyle = {
      width: canvasWidth,
      overflow: "hidden"
    };
    const pages = menuArr.map((page, index) => {
      return <Menupage key={index} MyFocus={index} />;
    });
    return (
      <div className="w-full h-full flex justify-center">
        <div
          style={canvasStyle}
          id="Menupagecanvas"
          className="
       h-full"
        >
          {pages}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Menupagecanvas);
