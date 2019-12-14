import React, { Component } from "react";

import Addsectioncanvas from "../Addsectioncanvas";
import Addheader from "../AddCanvas components/Addheader";

class Addsectioncanvascontainer extends Component {
  render() {
    let content;
    switch (this.props.openTo) {
      case "start":
        content = (
          <Addsectioncanvas
            toggleCanvas={this.props.toggleCanvas}
            openSectionToAdd={this.props.openSectionToAdd}
            sectionLocation={this.props.location}
            pageLocation={this.props.pageLocation}
          />
        );
        break;
      case "Header":
        content = (
          <Addheader
            toggleCanvas={this.props.toggleCanvas}
            openSectionToAdd={this.props.openSectionToAdd}
            location={this.props.location}
            pageLocation={this.props.pageLocation}
          />
        );
        break;
      default:
        content = "";
    }

    return <div className="w-full flex justify-center">{content}</div>;
  }
}

export default Addsectioncanvascontainer;
