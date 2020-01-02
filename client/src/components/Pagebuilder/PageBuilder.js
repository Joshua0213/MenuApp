import React, { Component } from "react";
import { connect } from "react-redux";

import { setPageWidth } from "../../actions/pageActions";

import Sidebar from "./sidebar/Sidebar";
import Page from "./page/Page";

class PageBuilder extends Component {
  constructor(props) {
    super(props);
    this.onDrag = this.onDrag.bind(this);
  }

  onDrag(e) {
    let mousePos = e.clientX;
    if (mousePos < 30) {
      return;
    } else {
      if (mousePos < 150) {
        this.props.setPageWidth(150);
      } else if (mousePos > 500) {
        this.props.setPageWidth(500);
      } else {
        this.props.setPageWidth(mousePos);
      }
    }
  }

  render() {
    return (
      <div
        id="Page_Builder"
        style={{
          display: "flex",
          minHeight: "90vh"
        }}
      >
        <div
          id="Sidebar_Width"
          style={{
            width: `${this.props.Page.pageWidth}px`
          }}
          onDragOver={this.onDrag}
        >
          <Sidebar />
        </div>
        <div
          id="Page_Divider"
          style={{
            height: "full",
            width: "5px",
            backgroundColor: "Dodgerblue",
            cursor: "e-resize"
          }}
          draggable
        ></div>
        <div onDragOver={this.onDrag} style={{ width: "100%", height: "full" }}>
          <Page />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { setPageWidth })(PageBuilder);
