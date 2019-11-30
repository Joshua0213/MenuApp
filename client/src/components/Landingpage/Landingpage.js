import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CSSLandingpage.css";

class Landingpage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay">
          <div className="l-landing__container">
            <h1 className="header">Menu Maker</h1>
            <p className="paragraph"> Easily create your custom Menu</p>
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
        </div>
      </div>
    );
  }
}

export default Landingpage;
