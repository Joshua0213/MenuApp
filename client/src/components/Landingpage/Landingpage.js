import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import imgURl from "../../img/showcase2.jpg";

class Landingpage extends Component {
  render() {
    let divStyle = {
      backgroundImage: "url(" + imgURl + ")",
      backgroundColor: "green"
    };
    let divStyle2 = {
      backgroundColor: "rgba(10, 0, 0, 0.25)"
    };
    const { isAuthenticated } = this.props.auth;
    let content;
    if (!isAuthenticated) {
      content = (
        <div>
          <div className="flex">
            <Link
              to="/register"
              className="text-white font-medium bg-button-1 w-full rounded  mt-5 py-3 px-8 mr-5 hover:bg-main-primary mb-32"
            >
              Register
            </Link>

            <div className="l-landing__buttonseperator"></div>
            <Link
              to="/login"
              className="px-10 text-white font-medium bg-button-1 w-full rounded  mt-5 py-3 hover:bg-main-primary mb-32"
            >
              Login
            </Link>
          </div>
        </div>
      );
    } else {
      content = (
        <div className="buttoncontainer w-11/12 flex justify-center">
          <Link
            to="/Dashboard"
            className="text-white font-medium bg-button-1 rounded  mt-5 py-3 px-10 hover:bg-main-primary mb-32 display-block"
          >
            Dashboard
          </Link>
        </div>
      );
    }
    return (
      <div className="bg-center m-h-60" style={divStyle}>
        <div
          className="h-full m-h-90 flex justify-center items-center"
          style={divStyle2}
        >
          <div className=" flex w-full flex-col items-center justify-center">
            <h1 className="text-7xl font-display text-white text-center">
              Menu Maker
            </h1>
            <p className="text-white"> Easily create your own custom Menu</p>
            {content}
          </div>
        </div>
      </div>
    );
  }
}

Landingpage.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(Landingpage);
