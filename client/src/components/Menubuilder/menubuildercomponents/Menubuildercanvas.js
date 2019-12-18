import React, { Component } from "react";
import Spinner from "../../Common/Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//import Addsection from "./sections/Addsection";
import Navbarcanvas from "../menubuildercomponents/navbar components/Navbarcanvas";
import Menupagecanvas from "./Menupagecanvas";
import { getMenuArr } from "../../../actions/menubuilderActions";

import TransparancyDark640 from "../../../img/TransparencyDark640.png";
import Transparancy500 from "../../../img/Transparency500.png";

class Menubuildercanvas extends Component {
  render() {
    let { loadingArr, displayBrightness } = this.props.menuArr;
    let navbar;
    let content;
    let pageContent;
    let backgroundImage;
    if (displayBrightness === "dark") {
      backgroundImage = TransparancyDark640;
    } else {
      backgroundImage = Transparancy500;
    }
    let canvasStyle = {
      backgroundImage: `url('${backgroundImage}')`,
      backgroundPosition: "center",
      backgroundAttachment: "repeat"
    };

    if (loadingArr) {
      pageContent = <Spinner />;
    } else {
      navbar = <Navbarcanvas />;
      pageContent = <Menupagecanvas />;
      if (this.props.menuArr.menuArr.length === 1) {
        navbar = null;
      }
      content = (
        <div className="h-full">
          {navbar} <div className="bg-gray-500 h-px w-full"></div>
          {pageContent}
        </div>
      );
    }

    return (
      <div
        id="Menubuildercanvas"
        style={canvasStyle}
        className="w-full text-center h-full"
      >
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
