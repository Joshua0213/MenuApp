import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const { name } = user;
    let upper = "";
    if (name) {
      upper = name.charAt(0).toUpperCase() + name.substring(1);
    }
    const authLinks = (
      <ul className=" flex flex-row justify-end items-end">
        <li className=" px-2 text-white text-lg">Welcome back, {upper}!</li>
        <li className="px-2 hover:text-white text-lg">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="px-2 hover:text-white text-lg">
          <Link className="nav-link" to="/menubuilder">
            Menu Builder
          </Link>
        </li>
        <li className=" px-2 hover:text-white text-lg ">
          <a href="/" onClick={this.onLogoutClick.bind(this)} className="  ">
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="flex flex-row justify-end">
        <li className="px-2 hover:text-white">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="px-2 hover:text-white">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav
        id="mainNavbar"
        className=" bg-main-primary z-50 p-2 pt-2 flex flex-col"
      >
        <div className="self-center w-10/12 flex flex-row justify-between ">
          <div className=" flex text-white ">
            <Link className="text-lg text-gray-200 hover:text-white" to="/">
              MenuMaker
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="flex justify-center flex-col text-gray-500 ">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
