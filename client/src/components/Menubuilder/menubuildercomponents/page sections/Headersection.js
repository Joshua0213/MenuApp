import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteSection } from "../../../../actions/menubuilderActions";
import {
  setTreeHoverFocusFromPage,
  togglePageIsDragging
} from "../../../../actions/treefocusActions";

class Headersection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      clicked: false,
      options: false
    };
    this.toggleHoverOff = this.toggleHoverOff.bind(this);
    this.toggleHoverOn = this.toggleHoverOn.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.checkIfHoverFocus = this.checkIfHoverFocus.bind(this);
    this.checkIfMainFocus = this.checkIfMainFocus.bind(this);
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
    this.props.changeDragItem(
      pageLocation,
      sectionLocation,
      containerLocation,
      false
    );
  }

  dragEnd() {
    this.props.togglePageIsDragging(false);
    this.props.cancelDrag();
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

  deleteClick() {
    this.props.deleteSection(
      this.props.menuArr.menuArr,
      this.props.pageLocation,
      this.props.sectionLocation
    );
  }

  toggleHoverOff() {
    this.setState({ hover: false });
  }

  toggleOptions() {
    this.setState({ options: !this.state.options });
  }

  toggleHoverOn() {
    this.setState({ hover: true });
  }

  render() {
    let { pageLocation, sectionLocation, containerLocation } = this.props;
    let outline = "";
    let pageArr = this.props.menuArr.menuArr;
    let headerStyles = this.props.globalState.globalStyles.headers;
    let sectionContent = pageArr[pageLocation].Content[sectionLocation];
    let isMainFocus = this.checkIfMainFocus();
    let isHoverFocus = this.checkIfHoverFocus();
    let hiddenIcon = "";
    if (isHoverFocus) {
      outline = "2px solid #3182ce";
      hiddenIcon = (
        <div
          draggable
          onDragStart={this.dragStart}
          onDragEnd={this.dragEnd}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseExit}
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

    let pagetitle = sectionContent.Value;
    let { Settings } = sectionContent;
    let {
      InheritfontSize,
      hasBackgroundColor,
      fontSize,
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

    let { GfontSize } = headerStyles;
    if (widthAuto) {
      width = "auto";
    } else {
      width = `${width}%`;
    }
    if (!hasBackgroundColor) {
      backgroundColor = "rgba(0,0,0,0)";
    } else {
    }
    if (InheritfontSize) {
      fontSize = GfontSize;
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
    let headerContainerStyle = {
      fontSize: fontSize,
      display: "flex",
      width: "auto",
      justifyContent: `${justifySelf}`,
      // margin: `${margin}px`,
      // marginTop: `${marginTop}px`,
      // marginBottom: `${marginBottom}px`,
      // marginRight: `${marginRight}px`,
      // marginLeft: `${marginLeft}px`,
      position: "relative"
    };
    let headerStyle = {
      outline: `${outline}`,
      backgroundColor: `${backgroundColor}`,
      width: `${width}`,
      display: "flex",
      justifyContent: "center",
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
      margin: `${margin}px`,
      marginRight: `${marginRight}px`,
      marginTop: `${marginTop}px`,
      marginBottom: `${marginBottom}px`,
      marginLeft: `${marginLeft}px`,
      paddingRight: `${paddingRight}px`,
      paddingTop: `${paddingTop}px`,
      paddingBottom: `${paddingBottom}px`,
      paddingLeft: `${paddingLeft}px`
    };
    let content;

    content = (
      <h1 style={headerStyle} className="headerjs opacity-100">
        <div className="cursor-text">{pagetitle}</div>
      </h1>
    );

    return (
      <div
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseExit}
        className=""
        style={{
          zIndex: `${zIndex}`
        }}
      >
        {hiddenIcon}
        <div style={headerContainerStyle}>{content} </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr,
  globalState: state.globalstyles,
  treeFocus: state.treefocus
});

export default connect(mapStateToProps, {
  deleteSection,
  setTreeHoverFocusFromPage,
  togglePageIsDragging
})(Headersection);
