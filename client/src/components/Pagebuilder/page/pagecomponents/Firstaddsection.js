import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createMenuSection,
  setSettingsFocus,
  setSidebarDisplay,
  setPageDragging
} from "../../../../actions/pageActions";

class Firstaddsection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggedOver: false
    };
    this.dragEnter = this.dragEnter.bind(this);
    this.dragDrop = this.dragDrop.bind(this);
    this.dragExit = this.dragExit.bind(this);
  }

  dragEnter() {
    this.setState(() => {
      return {
        draggedOver: true
      };
    });
  }

  dragDrop() {
    let {
      address,
      Page,
      setSettingsFocus,
      setSidebarDisplay,
      setPageDragging
    } = this.props;
    let { isDragging, pageArray, pageFocus } = Page;
    if (isDragging === null) {
      return;
    } else {
      setPageDragging(null);
      setSettingsFocus(null);
      setSidebarDisplay("Settings");
      if (isDragging[0] === "create") {
        this.props.createMenuSection(
          pageArray,
          isDragging[1],
          address,
          pageFocus
        );
      }
      this.setState(() => {
        return {
          draggedOver: false
        };
      });
    }
  }

  dragExit() {
    this.setState(() => {
      return {
        draggedOver: false
      };
    });
  }

  render() {
    let opacity = 0;
    let bgColor = "LightGreen";
    if (this.props.Page.isDragging) {
      opacity = "1";
      if (this.state.draggedOver) {
        bgColor = "Green";
      }
    }
    return (
      <div
        style={{
          width: "100%",
          height: "10px",
          opacity: opacity,
          margin: "0 0 -10px 0",
          display: "flex",
          position: "relative"
        }}
        onDrop={this.dragDrop}
        onDragOver={e => {
          e.preventDefault();
          this.dragEnter();
        }}
        onDragExit={this.dragExit}
        onDragLeave={this.dragExit}
        onDragEnter={e => {
          e.preventDefault();
          this.dragEnter();
        }}
      >
        <div
          style={{
            height: "10px",
            width: "100%",
            backgroundColor: bgColor,
            borderRadius: "10px"
          }}
          onDragEnter={this.dragEnter}
        ></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {
  createMenuSection,
  setSettingsFocus,
  setSidebarDisplay,
  setPageDragging
})(Firstaddsection);
