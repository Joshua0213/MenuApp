import React, { Component } from "react";
import { connect } from "react-redux";

import Sidebar from "./sidebar/Sidebar";
import Page from "./page/Page";

class PageBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarWidth: 450
    };
    this.onDrag = this.onDrag.bind(this);
  }

  onDrag(e) {
    if (!this.props.Page.isDragging) {
      let mousePos = e.clientX;
      if (mousePos < 30) {
        return;
      } else {
        if (mousePos < 150) {
          this.setState({ sidebarWidth: 150 });
        } else if (mousePos > 500) {
          this.setState({ sidebarWidth: 500 });
        } else {
          this.setState({ sidebarWidth: mousePos });
        }
      }
    }
  }

  render() {
    return (
      <div
        id="Page_Builder"
        style={{
          display: "flex",
          minHeight: "80vh"
        }}
      >
        <div
          id="Sidebar_Width"
          style={{
            width: `${this.state.sidebarWidth}px`
          }}
        >
          <Sidebar />
        </div>
        <div
          id="Page_Divider"
          style={{
            height: "full",
            width: "5px",
            backgroundColor:
              this.props.Page.brightness === "light" ? "#90cdf4" : "#1a202c",
            cursor: "e-resize"
          }}
          draggable
          onDrag={this.onDrag}
        ></div>
        <div id="Page_Wrapper" style={{ width: "100%" }}>
          <Page />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(PageBuilder);
