import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CSSLandingpage.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landingpage extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    let content;
    if (!isAuthenticated) {
      content = (
        <div>
          <div className="buttoncontainer">
            <Link to="/register" className="c-landing__button">
              Sign-Up
            </Link>

            <div className="l-landing__buttonseperator"></div>
            <Link to="/login" className="c-landing__button">
              Login
            </Link>
          </div>
        </div>
      );
    } else {
      content = (
        <div>
          <div className="buttoncontainer">
            <div className="l-landing__buttonseperator"></div>
            <Link to="/Dashboard" className="c-landing__button">
              Dashboard
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="landing">
        <div className="dark-overlay">
          <div className="l-landing__container">
            <h1 className="header">Menu Maker</h1>
            <p className="paragraph"> Easily create your custom Menu</p>
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
