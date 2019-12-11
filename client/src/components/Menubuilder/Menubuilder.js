import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../Common/Spinner";
import Sidebar from "./menubuildercomponents/Sidebar";
import Menubuildercanvas from "./menubuildercomponents/Menubuildercanvas";
import { getMenuObj } from "../../actions/menubuilderActions";

class Menubuilder extends Component {
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
      content = (
        <div id="Menubuilder" className="min-h-screen flex flex-row">
          <Sidebar menuObj={menuObj} loading={loadingObj} />

          <div className="w-px min-h-screen bg-gray-500 -ml-px"></div>
          <Menubuildercanvas
            className="flex min-h-screen"
            menuObj={menuObj}
            loading={loadingObj}
          />
        </div>
      );
    }

    return <div>{content}</div>;
  }
}

Menubuilder.propTypes = {
  getMenuObj: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menuBuilt: state.menubuilt
});

export default connect(mapStateToProps, { getMenuObj })(Menubuilder);
