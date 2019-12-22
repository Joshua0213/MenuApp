import React, { Component } from "react";
import { connect } from "react-redux";

import Sectionfactory from "./Sectionfactory";

class Containersection extends Component {
  render() {
    let { containerLocation, sectionLocation, pageLocation } = this.props;

    let containerStyles;
    let pageArr = this.props.menuArr.menuArr;
    let sectionContent = pageArr[pageLocation].Content[sectionLocation];
    if (containerLocation !== null) {
      containerLocation.forEach(element => {
        sectionContent = sectionContent.Value[element];
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
      display: "flex",
      justifyContent: `${justifySelf}`,
      margin: `${margin}px`,
      marginTop: `${marginTop}px`,
      marginBottom: `${marginBottom}px`,
      marginRight: `${marginRight}px`,
      marginLeft: `${marginLeft}px`,
      zIndex: `${zIndex}`,
      position: "relative",

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

    return <div style={containerStyles}>{sections}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(Containersection);
