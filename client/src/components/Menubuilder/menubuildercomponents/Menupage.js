import React, { Component } from "react";
import { connect } from "react-redux";

import Sectionfactory from "./page sections/Sectionfactory";
import Addsection from "./page sections/Addsection";
import Addsectioncanvas from "./page sections/Addsectioncanvas";
import Gray from "../../Common/Gray";

class Menupage extends Component {
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
    let classes = "text-6xl flex flex-col items-center";
    let focus = this.props.menuArr.pageFocus;
    let MyFocus = this.props.MyFocus;
    let pageContentArray = this.props.menuArr.menuArr[MyFocus].Content;
    let sections = [];
    if (this.state.addCanvasOpen) {
      sections.push(<Gray key={"g"} toggleCanvas={this.toggleAddCanvas} />);
    }
    if (this.state.opener === 0) {
      sections.push(<Addsectioncanvas key={"addCanvas"} />);
    } else {
      sections.push(
        <Addsection
          key={"a" + 0}
          location={0}
          toggleCanvas={this.toggleAddCanvas}
          opener={this.state.opener}
        />
      );
    }
    pageContentArray.forEach((element, index) => {
      sections.push(
        <Sectionfactory
          key={index}
          pageLocation={MyFocus}
          sectionLocation={index}
        />
      );
      if (this.state.opener === index + 1) {
        sections.push(<Addsectioncanvas key={"addCanvas"} />);
      } else {
        sections.push(
          <Addsection
            key={"a" + (index + 1)}
            location={index + 1}
            toggleCanvas={this.toggleAddCanvas}
            opener={this.state.opener}
          />
        );
      }
    });

    if (focus !== MyFocus) {
      classes += " hidden";
    }
    return (
      <div id="Menupage" className={classes}>
        {sections}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Menupage);
