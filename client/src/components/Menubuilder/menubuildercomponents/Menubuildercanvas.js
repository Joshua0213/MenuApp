import React, { Component } from "react";
import Spinner from "../../Common/Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//import Addsection from "./sections/Addsection";
import Navbarcanvas from "./Navbarcanvas";
import Menupagecanvas from "./Menupagecanvas";
import { getMenuArr } from "../../../actions/menubuilderActions";

class Menubuildercanvas extends Component {
  render() {
    let loadingArr = this.props.menuArr.loadingArr;
    let navbar;
    let content;
    let pageContent;

    if (loadingArr) {
      pageContent = <Spinner />;
    } else {
      navbar = <Navbarcanvas />;
      pageContent = <Menupagecanvas />;
      if (this.props.menuArr.menuArr.length === 1) {
        navbar = null;
      }
      content = (
        <div>
          {navbar} <div className="bg-gray-500 h-px w-full"></div> {pageContent}
        </div>
      );
    }

    return (
      <div id="Menubuildercanvas" className="w-full text-center">
        {content}
      </div>
    );
  }
}

Menubuildercanvas.propTypes = {
  getMenuArr: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { getMenuArr })(Menubuildercanvas);
