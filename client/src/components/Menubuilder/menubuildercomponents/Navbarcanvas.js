import React, { Component } from "react";
import Navbartab from "./Navbartab";

class Navbarcanvas extends Component {
  render() {
    let { navArr } = this.props;
    const pages = navArr.map((page, index) => {
      return (
        <div
          id="Navbarcanvas_container"
          key={page}
          className="bg-blue-300 hover:bg-blue-400 cursor-pointer mx-2 flex-grow flex m-px rounded "
        >
          <Navbartab Title={page} Myfocus={index} focus={this.props.focus} />
        </div>
      );
    });
    return (
      <div
        id="Navbarcanvas"
        className="bg-gray-200 w-full  min-h-10vh flex flex-row py-1 px-2"
      >
        {pages}
      </div>
    );
  }
}

export default Navbarcanvas;
