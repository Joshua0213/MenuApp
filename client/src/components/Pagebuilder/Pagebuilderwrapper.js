import React, { Component } from "react";
import { connect } from "react-redux";

import { getMenuArray, setPageRender } from "../../actions/pageActions";

import Spinner from "../Common/Spinner";
import PageBuilder from "./PageBuilder";

class Pagebuilderwrapper extends Component {
  render() {
    let content;
    if (this.props.pageMenu.pageLoading === true) {
      this.props.getMenuArray();
      content = <Spinner />;
    } else {
      content = <PageBuilder />;
    }
    return (
      <div
        id="Loading_Wrapper"
        style={{
          minHeight: "90vh"
        }}
      >
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pageMenu: state.pagemenu
});

export default connect(mapStateToProps, { getMenuArray, setPageRender })(
  Pagebuilderwrapper
);
