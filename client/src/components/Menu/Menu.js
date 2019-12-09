import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../Common/Spinner";
import { getMenuByHandle } from "../../actions/menuActions";

class Menu extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      let handler = this.props.match.params.handle;
      console.log(handler);
      this.props.getMenuByHandle(handler);
    }
  }

  render() {
    const { loading, mainHeader } = this.props.menu;
    let menuContent;

    if (this.props.menu === null || loading) {
      console.log(this.props);
      menuContent = <Spinner />;
    } else {
      console.log(mainHeader);
      menuContent = <div>{mainHeader}</div>;
    }
    return <div className="m-h-90">{menuContent}</div>;
  }
}

Menu.propTypes = {
  getMenuByHandle: PropTypes.func.isRequired,
  menu: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps, { getMenuByHandle })(Menu);
