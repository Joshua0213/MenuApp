import React, { Component } from "react";
import { connect } from "react-redux";

import Sectionfactory from "./Sectionfactory";

class Container extends Component {
  render() {
    let { Page, address, width, height, parentFlex } = this.props;
    let { pageFocus, pageArray, displaySize, settingsFocus } = Page;
    let containerFactory = [];
    let containerContent;
    let cWidth = "100%";
    // eslint-disable-next-line
    let cHeight = "80px";
    let overrideFlex = false;
    let container = pageArray[pageFocus].Sections[address[0]];
    if (address.length > 1) {
      let tempAddress = [];
      address.forEach(e => {
        tempAddress.push(e);
      });
      tempAddress.splice(0, 1);
      tempAddress.forEach(e => {
        container = container.Content[e];
      });
    }
    containerContent = container.Content;
    let { Settings, Width, Height, displayToggle } = container;
    containerContent.forEach((e, i) => {
      containerFactory.push(
        <Sectionfactory
          key={i}
          address={[...address, i]}
          width={Width}
          height={Height}
          parentFlex={[Settings.flexDirection, Settings.displayToggle]}
        />
      );
    });
    if (displaySize === "small" || displaySize === "medium") {
      if (displayToggle === "medium") {
        overrideFlex = true;
      }
      if (displaySize === "small") {
        overrideFlex = true;
      }
    }
    if (width !== undefined) {
      if (Settings.flexDirection === "row" || overrideFlex === false) {
        cWidth = `${width[address.length - 1]}%`;
      } else {
        cHeight = height[address.length - 1];
      }
      if (parentFlex !== undefined) {
        if (parentFlex[0] === "column") {
          cWidth = "100%";
        }
      }
    }
    let outline;
    if (settingsFocus !== null) {
      if (address.toString() === settingsFocus.toString()) {
        outline = "1px dashed Blue";
      }
    }
    return (
      <div
        id="Container"
        style={{
          display: "flex",
          alignItems: "center",
          width: cWidth,
          outline: outline,
          ...Settings,
          flexDirection: overrideFlex ? "column" : Settings.flexDirection
        }}
      >
        {containerFactory}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Container);
