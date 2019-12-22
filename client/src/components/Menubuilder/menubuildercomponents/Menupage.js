import React, { Component } from "react";
import { connect } from "react-redux";

import Sectionfactory from "./page sections/Sectionfactory";
import Addsection from "./page sections/Addsection";
import Addsectioncanvascontainer from "./page sections/AddCanvas components/Addsectioncanvascontainer";

class Menupage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCanvasOpen: false,
      opener: 999999,
      openTo: "start"
    };
    this.toggleAddCanvas = this.toggleAddCanvas.bind(this);
    this.openSectionToAdd = this.openSectionToAdd.bind(this);
  }

  openSectionToAdd(t) {
    this.setState(() => {
      return { openTo: t };
    });
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
    let classes = "text-4xl flex flex-col h-full items-center ";
    let focus = this.props.menuArr.pageFocus;
    let MyFocus = this.props.MyFocus;
    let pageContentArray = this.props.menuArr.menuArr[MyFocus].Content;
    let sections = [];
    let inheritColor = this.props.menuArr.menuArr[MyFocus].Settings
      .InheritbackgroundColor;
    let globalBackgroundColor = this.props.globalState.globalStyles.menu
      .backgroundColor;
    let localBackgroundColor = this.props.menuArr.menuArr[MyFocus].Settings
      .backgroundColor;
    let currentBackgroundColor;
    if (inheritColor) {
      currentBackgroundColor = globalBackgroundColor;
    } else {
      currentBackgroundColor = localBackgroundColor;
    }
    let pageStyle = {
      backgroundColor: `${currentBackgroundColor}`
    };
    if (this.state.opener === 0) {
      sections.push(
        <Addsectioncanvascontainer
          key={"addCanvas"}
          toggleCanvas={this.toggleAddCanvas}
          openTo={this.state.openTo}
          openSectionToAdd={this.openSectionToAdd}
          pageLocation={MyFocus}
          location={0}
        />
      );
    } else {
      sections.push(
        <Addsection
          key={"a" + 0}
          location={0}
          toggleCanvas={this.toggleAddCanvas}
          opener={this.state.opener}
          openSectionToAdd={this.openSectionToAdd}
        />
      );
    }
    pageContentArray.forEach((element, index) => {
      sections.push(
        <Sectionfactory
          key={index}
          pageLocation={MyFocus}
          sectionLocation={index}
          containerLocation={null}
        />
      );
      if (this.state.opener === index + 1) {
        sections.push(
          <Addsectioncanvascontainer
            key={"addCanvas"}
            toggleCanvas={this.toggleAddCanvas}
            openTo={this.state.openTo}
            openSectionToAdd={this.openSectionToAdd}
            pageLocation={MyFocus}
            location={index + 1}
          />
        );
      } else {
        sections.push(
          <Addsection
            key={"a" + (index + 1)}
            location={index + 1}
            toggleCanvas={this.toggleAddCanvas}
            opener={this.state.opener}
            openSectionToAdd={this.openSectionToAdd}
          />
        );
      }
    });

    if (focus !== MyFocus) {
      classes += " hidden";
    }
    return (
      <div
        id="Menupage h-auto block flex flex-grow h-full flex-rows justify-center"
        className={classes}
        style={pageStyle}
      >
        {sections}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr,
  globalState: state.globalstyles
});

export default connect(mapStateToProps, {})(Menupage);
