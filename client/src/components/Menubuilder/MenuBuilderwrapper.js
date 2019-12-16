import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../Common/Spinner";
import Menubuilder from "./Menubuilder";
import {
  getMenuObj,
  getMenuArr,
  getGlobalsObject
} from "../../actions/menubuilderActions";

class Menubuilderwrapper extends Component {
  componentDidMount() {
    this.props.getMenuObj();
  }

  render() {
    let loadingObj = this.props.menuBuilt.loadingObj;
    let menuObj = this.props.menuBuilt.menuObj;
    let content;
    if (loadingObj) {
      content = <Spinner />;
    } else {
      this.props.getMenuArr(menuObj.menuArr);
      this.props.getGlobalsObject(menuObj.globalsObj);

      content = <Menubuilder />;
    }

    return <div>{content}</div>;
  }
}

Menubuilderwrapper.propTypes = {
  getMenuObj: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menuBuilt: state.menubuilt
});

export default connect(mapStateToProps, {
  getMenuObj,
  getMenuArr,
  getGlobalsObject
})(Menubuilderwrapper);
