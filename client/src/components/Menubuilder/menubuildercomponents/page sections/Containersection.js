import React, { Component } from "react";
import { connect } from "react-redux";

import Sectionfactory from "./Sectionfactory";

import {
  setTreeHoverFocusFromPage,
  togglePageIsDragging,
  setTreeDragFocus
} from "../../../../actions/treefocusActions";

class Containersection extends Component {
  constructor(props) {
    super(props);
    this.checkIfHoverFocus = this.checkIfHoverFocus.bind(this);
    this.checkIfMainFocus = this.checkIfMainFocus.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
  }

  checkIfMainFocus() {
    let {
      treeFocusPage,
      treeFocusSection,
      treeFocusContainer
    } = this.props.treeFocus;
    let { sectionLocation, pageLocation, containerLocation } = this.props;
    if (
      treeFocusPage !== pageLocation ||
      treeFocusSection !== sectionLocation
    ) {
      return false;
    } else {
      //page location and section location match
      if (treeFocusContainer === null && containerLocation === null) {
        return true;
      } else {
        //One or both have container locations
        if (treeFocusContainer === null || containerLocation === null) {
          // only one has a container location return false
          return false;
        } else {
          //both have container locations
          if (treeFocusContainer.length !== containerLocation.length) {
            return false;
          } else {
            //addresses are the same length
            let same = true;
            treeFocusContainer.forEach((element, index) => {
              if (element !== containerLocation[index]) {
                same = false;
              }
            });
            if (same) {
              return true;
            } else {
              return false;
            }
          }
        }
      }
    }
  }

  checkIfHoverFocus() {
    let {
      treeHoverPage,
      treeHoverSection,
      treeHoverContainer
    } = this.props.treeFocus;
    let { sectionLocation, pageLocation, containerLocation } = this.props;
    if (
      treeHoverPage !== pageLocation ||
      treeHoverSection !== sectionLocation
    ) {
      return false;
    } else {
      //page location and section location match
      if (treeHoverContainer === null && containerLocation === null) {
        return true;
      } else {
        //One or both have container locations
        if (treeHoverContainer === null || containerLocation === null) {
          // only one has a container location return false
          return false;
        } else {
          //both have container locations
          if (treeHoverContainer.length !== containerLocation.length) {
            return false;
          } else {
            //addresses are the same length
            let same = true;
            treeHoverContainer.forEach((element, index) => {
              if (element !== containerLocation[index]) {
                same = false;
              }
            });
            if (same) {
              return true;
            } else {
              return false;
            }
          }
        }
      }
    }
  }

  dragStart() {
    this.props.togglePageIsDragging(true);
    let { pageLocation, sectionLocation, containerLocation } = this.props;
    this.props.setTreeDragFocus(
      pageLocation,
      sectionLocation,
      containerLocation
    );
  }

  dragEnd() {
    this.props.togglePageIsDragging(false);
    this.props.setTreeDragFocus(null, null, null);
  }

  mouseEnter() {
    let isMainFocus = this.checkIfMainFocus();
    if (!isMainFocus) {
      this.props.setTreeHoverFocusFromPage(
        this.props.pageLocation,
        this.props.sectionLocation,
        this.props.containerLocation,
        "enter"
      );
    }
  }

  mouseExit() {
    let isMainFocus = this.checkIfMainFocus();
    if (!isMainFocus) {
      this.props.setTreeHoverFocusFromPage(
        this.props.pageLocation,
        this.props.sectionLocation,
        this.props.containerLocation,
        "exit"
      );
    }
  }

  render() {
    let { containerLocation, sectionLocation, pageLocation } = this.props;

    let containerStyles;
    let pageArr = this.props.menuArr.menuArr;
    let outline = "";
    let sectionContent = pageArr[pageLocation].Content[sectionLocation];
    let isMainFocus = this.checkIfMainFocus();
    let isHoverFocus = this.checkIfHoverFocus();
    let hiddenIcon;
    if (isHoverFocus) {
      outline = "2px solid #3182ce";
      hiddenIcon = (
        <div
          draggable
          onDragStart={this.dragStart}
          onDragEnd={this.dragEnd}
          onMouseEnter={this.mouseEnter}
          className="absolute bg-blue-500"
          style={{ zIndex: "9999" }}
        >
          <svg
            className="w-6 h-6 p-1 fill-current text-gray-700 cursor-move"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.8 15.8L0 13v7h7l-2.8-2.8 4.34-4.32-1.42-1.42L2.8 15.8zM17.2 4.2L20 7V0h-7l2.8 2.8-4.34 4.32 1.42 1.42L17.2 4.2zm-1.4 13L13 20h7v-7l-2.8 2.8-4.32-4.34-1.42 1.42 4.33 4.33zM4.2 2.8L7 0H0v7l2.8-2.8 4.32 4.34 1.42-1.42L4.2 2.8z" />
          </svg>
        </div>
      );
    }
    if (isMainFocus) {
      outline = "2px solid #38a169";
    }
    if (containerLocation !== null) {
      containerLocation.map((element, index) => {
        sectionContent = sectionContent.Value[element];

        return null;
      });
    }
    let { Settings } = sectionContent;
    let {
      hasBackgroundColor,
      backgroundColor,
      widthAuto,
      width,
      justifySelf,
      borderColor,
      borderStyle,
      borderWidth,
      borderTop,
      borderBottom,
      borderLeft,
      borderRight,
      borderControl,
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      marginControl,
      padding,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingControl,
      zIndex,
      borderRadius,
      borderRadiusTopLeft,
      borderRadiusTopRight,
      borderRadiusBottomLeft,
      borderRadiusBottomRight,
      borderRadiusControl
    } = Settings;

    if (widthAuto) {
      width = "auto";
    } else {
      width = `${width}%`;
    }
    if (!hasBackgroundColor) {
      backgroundColor = "rgba(0,0,0,0)";
    }
    if (justifySelf !== "center") {
      justifySelf = `flex-${justifySelf}`;
    }
    if (!marginControl) {
      marginTop = margin;
      marginBottom = margin;
      marginLeft = margin;
      marginRight = margin;
    }
    if (!paddingControl) {
      paddingTop = padding;
      paddingBottom = padding;
      paddingLeft = padding;
      paddingRight = padding;
    }
    if (!borderControl) {
      borderTop = borderWidth;
      borderBottom = borderWidth;
      borderLeft = borderWidth;
      borderRight = borderWidth;
    }
    if (!borderRadiusControl) {
      borderRadiusTopLeft = borderRadius;
      borderRadiusTopRight = borderRadius;
      borderRadiusBottomLeft = borderRadius;
      borderRadiusBottomRight = borderRadius;
    }
    containerStyles = {
      outline: `${outline}`,
      display: "flex",
      justifyContent: `${justifySelf}`,
      margin: `${margin}px`,
      marginTop: `${marginTop}px`,
      marginBottom: `${marginBottom}px`,
      marginRight: `${marginRight}px`,
      marginLeft: `${marginLeft}px`,
      position: "relative",
      alignItems: "center",

      backgroundColor: `${backgroundColor}`,
      width: `${width}`,
      borderStyle: `${borderStyle}`,
      borderWidth: `${borderWidth}px`,
      borderTopWidth: `${borderTop}px`,
      borderBottomWidth: `${borderBottom}px`,
      borderRightWidth: `${borderRight}px`,
      borderLeftWidth: `${borderLeft}px`,
      borderColor: `${borderColor}`,
      borderRadius: `${borderRadius}px`,
      borderTopRightRadius: `${borderRadiusTopRight}px`,
      borderTopLeftRadius: `${borderRadiusTopLeft}px`,
      borderBottomRightRadius: `${borderRadiusBottomRight}px`,
      borderBottomLeftRadius: `${borderRadiusBottomLeft}px`,
      paddingRight: `${paddingRight}px`,
      paddingTop: `${paddingTop}px`,
      paddingBottom: `${paddingBottom}px`,
      paddingLeft: `${paddingLeft}px`
    };
    //
    //Make sure that the sectionfactory passes the original sectionLocation
    //as it's sectionLocation prop. Not its index like the version used
    //by the menu page. This way the nested section knows where to start
    //looking when it is handed the containerLocation array.
    //
    let sections = [];
    let tempArr = [];

    if (containerLocation !== null) {
      tempArr = containerLocation.map(i => {
        return i;
      });
    }
    if (sectionContent.Type === "container") {
      sectionContent.Value.forEach((element, index) => {
        sections.push(
          <Sectionfactory
            key={index}
            pageLocation={pageLocation}
            sectionLocation={sectionLocation}
            containerLocation={[...tempArr, index]}
          />
        );
      });
    } else {
      console.log("Alarm");
    }

    return (
      <div
        style={{
          zIndex: `${zIndex}`
        }}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseExit}
      >
        {hiddenIcon}
        <div style={containerStyles}>{sections}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr,
  treeFocus: state.treefocus
});

export default connect(mapStateToProps, {
  setTreeHoverFocusFromPage,
  togglePageIsDragging,
  setTreeDragFocus
})(Containersection);
