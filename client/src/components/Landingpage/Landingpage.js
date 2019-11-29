import React, { Component } from "react";
import "./CSSLandingpage.css";

class Landingpage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner">
          <div className="l-landing__container">
            <h1 className="header">Menu Maker</h1>
            <p className="paragraph"> Easily create your custom Menu</p>
            <div className="buttoncontainer">
              <a href="register.html" className="c-landing__button">
                Sign Up
              </a>
              <div className="l-landing__buttonseperator"></div>
              <a href="login.html" className="c-landing__button">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landingpage;
