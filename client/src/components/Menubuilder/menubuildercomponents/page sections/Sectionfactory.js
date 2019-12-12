import React, { Component } from "react";
import { connect } from "react-redux";

import Headersection from "../page sections/Headersection";
import Addsection from "../page sections/Addsection";
import Addsectioncanvas from "../page sections/Addsectioncanvas";
import Gray from "../../../Common/Gray";

class Sectionfactory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCanvasOpen: false,
      opener: 999999
    };
    this.toggleAddCanvas = this.toggleAddCanvas.bind(this);
  }

  toggleAddCanvas(Opened, opener) {
    this.setState(prevState => {
      return { addCanvasOpen: !prevState.addCanvasOpen };
    });
    if (Opened) {
      this.setState(prevState => {
        return { opener: opener };
      });
    } else {
      this.setState(prevState => {
        return { opener: 99999 };
      });
    }
  }

  render() {
    let addCanvasOpen = this.state.addCanvasOpen;
    let pageContentArray = this.props.menuArr.menuArr[this.props.pageLocation]
      .Content;
    let content = [];
    pageContentArray.forEach((element, index) => {
      if (element.Type === "header") {
        content.push(
          <Headersection
            key={"h" + index}
            pageLocation={this.props.pageLocation}
            sectionLocation={index}
          />
        );
      }
    });

    return (
      <div>
        {
          this.props.menuArr.menuArr[this.props.pageLocation].Content[
            this.props.sectionLocation
          ].Value
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Sectionfactory);
