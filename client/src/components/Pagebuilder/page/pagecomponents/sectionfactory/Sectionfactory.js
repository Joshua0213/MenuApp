import React, { Component } from "react";
import { connect } from "react-redux";

import Elementwrapper from "./Elementwrapper";
import Container from "./Container";
import Column from "./Column";

class Sectionfactory extends Component {
  render() {
    let { address, Page, width, height } = this.props;
    let { pageArray, pageFocus } = Page;
    let section;
    let element;
    if (address.length === 1) {
      section = pageArray[pageFocus].Sections[address];
    } else {
      let tempAddress = [];
      address.forEach(e => {
        tempAddress.push(e);
      });
      section = pageArray[pageFocus].Sections[tempAddress.splice(0, 1)];
      tempAddress.forEach(e => {
        section = section.Content[e];
      });
    }

    if (section.Type === "Container") {
      element = <Container address={address} width={width} height={height} />;
    } else if (section.Type === "Column") {
      element = <Column address={address} width={width} height={height} />;
    } else {
      element = (
        <Elementwrapper address={address} width={width} height={height} />
      );
    }

    return <>{element}</>;
  }
}

const mapStateToProps = state => ({
  Page: state.page
});

export default connect(mapStateToProps, {})(Sectionfactory);
