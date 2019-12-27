import React, { Component } from "react";
import { connect } from "react-redux";

import Sectionfactory from "./page sections/Sectionfactory";
import Addsection from "./page sections/Addsection";

class Menupage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragBool: false,
      dragPage: null,
      dragSection: null,
      dragContainer: null,
      dragIsParent: null
    };
    this.changeDragItem = this.changeDragItem.bind(this);
    this.cancelDrag = this.cancelDrag.bind(this);
  }

  changeDragItem(pageLocation, sectionLocation, containerLocation, parentage) {
    this.setState(() => {
      return {
        dragBool: true,
        dragPage: pageLocation,
        dragSection: sectionLocation,
        dragContainer: containerLocation,
        dragIsParent: parentage
      };
    });
  }

  cancelDrag() {
    this.setState(() => {
      return {
        dragBool: false,
        dragPage: null,
        dragSection: null,
        dragContainer: null,
        dragIsParent: null
      };
    });
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

    sections.push(
      <Addsection
        key={"a" + 0}
        location={0}
        dragPage={this.state.dragPage}
        dragSection={this.state.dragSection}
        dragContainer={this.state.dragContainer}
        dragIsParent={this.state.dragIsParent}
        pageLocation={MyFocus}
        sectionLocation={0}
        containerLocation={null}
      />
    );

    pageContentArray.forEach((element, index) => {
      sections.push(
        <Sectionfactory
          key={index}
          pageLocation={MyFocus}
          sectionLocation={index}
          containerLocation={null}
          dragBool={this.state.dragBool}
          changeDragItem={this.changeDragItem}
          cancelDrag={this.cancelDrag}
          dragPage={this.state.dragPage}
          dragSection={this.state.dragSection}
          dragContainer={this.state.dragContainer}
          dragIsParent={this.state.dragIsParent}
        />
      );

      sections.push(
        <Addsection
          key={"a" + (index + 1)}
          location={index + 1}
          dragPage={this.state.dragPage}
          dragSection={this.state.dragSection}
          dragContainer={this.state.dragContainer}
          dragIsParent={this.state.dragIsParent}
          pageLocation={MyFocus}
          sectionLocation={index + 1}
          containerLocation={null}
        />
      );
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
