import React, { Component } from "react";
import Navbartab from "./Navbartab";
import { connect } from "react-redux";

class Navbarcanvas extends Component {
  render() {
    let navArr = this.props.menuArr.menuArr;
    const pages = navArr.map((page, index) => {
      return (
        <div
          id="Navbarcanvas_container"
          key={index}
          className="bg-blue-300 hover:bg-blue-400 cursor-pointer mx-2 flex-grow flex m-px rounded "
        >
          <Navbartab
            Title={page.Title}
            Myfocus={index}
            focus={this.props.menuArr.pageFocus}
          />
        </div>
      );
    });
    return (
      <div
        id="Navbarcanvas"
        className="bg-gray-200 w-full min-h-10vh flex flex-row py-1 px-2"
      >
        {pages}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Navbarcanvas);
