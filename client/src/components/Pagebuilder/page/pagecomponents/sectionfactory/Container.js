import React, { Component } from "react";
import { connect } from "react-redux";

import Sectionfactory from "./Sectionfactory";

class Container extends Component {
  render() {
    let { Page, address, width, height } = this.props;
    let { pageFocus, pageArray } = Page;
    let containerFactory = [];
    let containerContent;
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
    let { Settings, Width, Height } = container;
    containerContent.forEach((e, i) => {
      containerFactory.push(
        <Sectionfactory
          key={i}
          address={[...address, i]}
          width={Width}
          height={Height}
        />
      );
    });
    return (
      <div
        id="Container"
        style={{
          display: "flex",
          width: cWidth,
          ...Settings
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
