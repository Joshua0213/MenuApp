import React, { Component } from "react";
import Navbartab from "./Navbartab";

class Navbarcanvas extends Component {
  render() {
    let { navArr } = this.props;
    const pages = navArr.map((page, index) => {
      return (
        <div
          id="Navbarcanas_container"
          key={page}
          className="hover:bg-blue-400 cursor-pointer flex-grow flex"
        >
          <Navbartab
            Title={page}
            Myfocus={index}
            focus={this.props.focus}
            changeFocus={this.props.changeFocus}
          />
        </div>
      );
    });
    return (
      <div
        id="Navbarcanvas"
        className="w-full bg-blue-200 min-h-10vh flex flex-row"
      >
        {pages}
      </div>
    );
  }
}

export default Navbarcanvas;
