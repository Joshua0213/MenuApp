import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createMenuSection,
  setSettingsFocus,
  setSidebarDisplay,
  setPageDragging
} from "../../../../../actions/pageActions";

class Column extends Component {
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
      setSettingsFocus(address);
      setSidebarDisplay("Settings");
      if (address.length < 4) {
        if (isDragging[1] === "Container") {
          if (address.length < 3) {
            if (isDragging[0] === "create") {
              this.props.createMenuSection(
                pageArray,
                isDragging[1],
                address,
                pageFocus
              );
            }
          }
        } else {
          if (isDragging[0] === "create") {
            this.props.createMenuSection(
              pageArray,
              isDragging[1],
              address,
              pageFocus
            );
          }
        }
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
    let { address, Page, width, height } = this.props;
    let cWidth = "";
    // eslint-disable-next-line
    let cHeight = "80px";
    if (width !== undefined) {
      if (width.length > 1) {
        cWidth = `${width[address.length - 1]}%`;
      } else {
        cHeight = height[address.length - 1];
      }
    }
    let { isDragging } = Page;
    let bgColor = "#edf2f7";
    let textColor = "Black";
    if (isDragging) {
      if (isDragging[1] === "Container") {
        if (address.length < 3) {
          bgColor = "#68d391";
          textColor = "White";
          if (this.state.draggedOver) {
            bgColor = "#38a169";
          }
        }
      } else {
        bgColor = "#68d391";
        textColor = "White";
        if (this.state.draggedOver) {
          bgColor = "#38a169";
        }
      }
    }
    return (
      <div
        style={{
          height: "80px",
          width: cWidth,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          id="Column"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: bgColor,
            borderRadius: "30px",
            padding: "5px 20px"
          }}
          onDragLeave={this.dragExit}
          onDragEnter={e => {
            e.preventDefault();
            this.dragEnter();
          }}
          onDragOver={e => {
            e.preventDefault();
            this.dragEnter();
          }}
          onDrop={this.dragDrop}
        >
          {" "}
          <span
            style={{
              fontSize: "12px",
              color: textColor
            }}
          >
            Drag <br /> Element <br /> Here
          </span>
          <svg
            style={{
              width: "50px",
              height: "50px",
              display: "inline-block",
              color: "Green",
              fill: "currentColor",
              margin: "0px 5px"
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
          </svg>
          <span
            style={{
              fontSize: "12px",
              color: textColor
            }}
          >
            Drag <br /> Element <br /> Here
          </span>
        </div>{" "}
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
})(Column);
