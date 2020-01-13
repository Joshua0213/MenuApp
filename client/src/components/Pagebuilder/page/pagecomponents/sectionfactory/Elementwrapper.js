import React, { Component } from "react";
import { connect } from "react-redux";

import { setSettingsFocus } from "../../../../../actions/pageActions";

import Header from "./elements/Header";

class Elementwrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
    this.newSettingsFocus = this.newSettingsFocus.bind(this);
  }

  newSettingsFocus() {
    let { address, setSettingsFocus, Page } = this.props;
    let { settingsFocus } = Page;
    if (settingsFocus !== null) {
      setSettingsFocus(null);
    } else {
      setSettingsFocus(address);
    }
  }

  mouseEnter() {
    this.setState({ hovered: true });
  }
  mouseExit() {
    this.setState({ hovered: false });
  }

  render() {
    let { width, height, address, Page, parentFlex } = this.props;
    let { pageArray, pageFocus } = Page;
    let cWidth = "100%";
    // eslint-disable-next-line
    let cHeight = "80px";
    if (width !== undefined) {
      if (width.length > 1) {
        cWidth = `${width[address.length - 1]}%`;
      } else {
        cHeight = height[address.length - 1];
      }
    }
    if (parentFlex !== undefined) {
      if (parentFlex[0] === "column") {
        cWidth = "100%";
      }
    }
    let content;
    let options;
    let section = pageArray[pageFocus].Sections[address[0]];
    if (address.length > 1) {
      let tempAddress = [];
      address.forEach(e => {
        tempAddress.push(e);
      });
      tempAddress.splice(0, 1);
      tempAddress.forEach(e => {
        section = section.Content[e];
      });
    }
    if (this.state.hovered) {
    }
    switch (section.Type) {
      case "Header":
        content = <Header address={address} />;
        break;

      default:
        break;
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: cWidth
        }}
        onMouseLeave={this.mouseExit}
        onMouseEnter={this.mouseEnter}
      >
        <div
          style={{
            position: "absolute",
            alignSelf: "flex-start"
          }}
          onMouseEnter={this.mouseEnter}
          onClick={this.newSettingsFocus}
        >
          {options}
        </div>
        {content}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, { setSettingsFocus })(Elementwrapper);
