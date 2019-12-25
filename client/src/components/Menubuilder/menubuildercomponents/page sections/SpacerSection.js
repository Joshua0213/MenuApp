import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updateSpacer,
  deleteSection
} from "../../../../actions/menubuilderActions";

import peopleEating from "../../../../img/peopleEating.jpg";
import peopleEating1 from "../../../../img/peopleEating1.jpg";
import peopleEating2 from "../../../../img/peopleEating2.jpg";
import peopleEating3 from "../../../../img/peopleEating3.jpg";
import peopleEating4 from "../../../../img/peopleEating4.jpg";
import peopleEating5 from "../../../../img/peopleEating5.jpg";
import peopleEating6 from "../../../../img/peopleEating6.jpg";
import peopleEating7 from "../../../../img/peopleEating7.jpg";
import peopleEating8 from "../../../../img/peopleEating8.jpg";
import peopleEating9 from "../../../../img/peopleEating9.jpg";
import peopleEating10 from "../../../../img/peopleEating10.jpg";
import peopleEating11 from "../../../../img/peopleEating11.jpg";
import peopleEating12 from "../../../../img/peopleEating12.jpg";
import peopleEating13 from "../../../../img/peopleEating13.jpg";
import peopleEating14 from "../../../../img/peopleEating14.jpg";
import peopleEating15 from "../../../../img/peopleEating15.jpg";
import peopleEating16 from "../../../../img/peopleEating16.jpg";
import peopleEating17 from "../../../../img/peopleEating17.jpg";
import peopleEating18 from "../../../../img/peopleEating18.jpg";
import peopleEating19 from "../../../../img/peopleEating19.jpg";
import peopleEating20 from "../../../../img/peopleEating20.jpg";
import peopleEating21 from "../../../../img/peopleEating21.jpg";
import peopleEating22 from "../../../../img/peopleEating22.jpg";

class Spacersection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      arrayValue: Math.floor(Math.random() * 23)
    };
    this.toggleHoverOff = this.toggleHoverOff.bind(this);
    this.toggleHoverOn = this.toggleHoverOn.bind(this);
    this.sliderChange = this.sliderChange.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
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

  toggleHoverOn() {
    this.setState({ hover: true });
  }

  sliderChange(event) {
    this.props.updateSpacer(
      this.props.menuArr.menuArr,
      this.props.pageLocation,
      this.props.sectionLocation,
      event.target.value
    );
  }

  render() {
    let { pageLocation, sectionLocation, containerLocation } = this.props;
    let sectionContent = this.props.menuArr.menuArr[this.props.pageLocation]
      .Content[this.props.sectionLocation];
    let picArray = [
      { picture: peopleEating, xsize: "1069", ysize: "717" },
      { picture: peopleEating1, xsize: "912", ysize: "608" },
      { picture: peopleEating2, xsize: "576", ysize: "720" },
      { picture: peopleEating3, xsize: "730", ysize: "1095" },
      { picture: peopleEating4, xsize: "1037", ysize: "691" },
      { picture: peopleEating5, xsize: "649", ysize: "974" },
      { picture: peopleEating6, xsize: "1369", ysize: "913" },
      { picture: peopleEating7, xsize: "960", ysize: "640" },
      { picture: peopleEating8, xsize: "576", ysize: "864" },
      { picture: peopleEating9, xsize: "756", ysize: "1008" },
      { picture: peopleEating10, xsize: "667", ysize: "1003" },
      { picture: peopleEating11, xsize: "557", ysize: "836" },
      { picture: peopleEating12, xsize: "758", ysize: "1050" },
      { picture: peopleEating13, xsize: "747", ysize: "1120" },
      { picture: peopleEating14, xsize: "656", ysize: "975" },
      { picture: peopleEating15, xsize: "912", ysize: "608" },
      { picture: peopleEating16, xsize: "557", ysize: "836" },
      { picture: peopleEating17, xsize: "669", ysize: "1003" },
      { picture: peopleEating18, xsize: "768", ysize: "1152" },
      { picture: peopleEating19, xsize: "1051", ysize: "592" },
      { picture: peopleEating20, xsize: "650", ysize: "1050" },
      { picture: peopleEating21, xsize: "875", ysize: "583" },
      { picture: peopleEating22, xsize: "1123", ysize: "749" }
    ];

    if (containerLocation !== null) {
      containerLocation.map(element => {
        sectionContent = sectionContent.Value[element];
        return null;
      });
    }

    let pixels = sectionContent.Value;

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
    } = this.props.menuArr.menuArr[pageLocation].Content[
      sectionLocation
    ].Settings;

    let backgroundImage;
    let spacerBackground;
    if (widthAuto) {
      width = "auto";
    } else {
      width = `${width}%`;
    }
    if (hasBackgroundColor) {
      spacerBackground = backgroundColor;
      backgroundImage = "none";
    } else {
      spacerBackground = "rgba(0,0,0,0)";
      backgroundImage = `url('${picArray[this.state.arrayValue].picture}')`;
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
    let spacerStyle = {
      height: `${pixels}px`,
      backgroundColor: spacerBackground,
      width: `${width}`,
      borderColor: borderColor,
      borderStyle: borderStyle,
      borderWidth: `${borderWidth}px`,
      borderTopWidth: `${borderTop}px`,
      borderBottomWidth: `${borderBottom}px`,
      borderRightWidth: `${borderRight}px`,
      borderLeftWidth: `${borderLeft}px`,
      borderRadius: `${borderRadius}px`,
      borderTopRightRadius: `${borderRadiusTopRight}px`,
      borderTopLeftRadius: `${borderRadiusTopLeft}px`,
      borderBottomRightRadius: `${borderRadiusBottomRight}px`,
      borderBottomLeftRadius: `${borderRadiusBottomLeft}px`,
      marginRight: `${marginRight}px`,
      marginTop: `${marginTop}px`,
      marginBottom: `${marginBottom}px`,
      marginLeft: `${marginLeft}px`,
      paddingRight: `${paddingRight}px`,
      paddingTop: `${paddingTop}px`,
      paddingBottom: `${paddingBottom}px`,
      paddingLeft: `${paddingLeft}px`,
      backgroundImage: `${backgroundImage}`,
      //backgroundPosition: "center",
      //backgroundAttachment: "fixed",
      backgroundSize: `${picArray[this.state.arrayValue].xsize}px ${
        picArray[this.state.arrayValue].ysize
      }px`
    };
    let spacerContainerStyle = {
      display: "flex",
      width: "auto",
      justifyContent: `${justifySelf}`,
      margin: `${margin}px`,
      zIndex: `${zIndex}`,
      position: "relative"
    };
    let iconClassnames = "flex flex-row absolute ml-2";
    let content;

    if (!this.props.menuArr.hideIcons) {
      if (this.state.hover) {
        iconClassnames += " bg-blue-200 rounded-full";
        content = (
          <div className="w-full" style={spacerStyle}>
            <div className={iconClassnames}>
              <svg
                className=" w-5 h-5 text-red-500 fill-current hover:text-red-700 cursor-pointer hover:bg-gray-100 rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={this.deleteClick}
              >
                <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
              </svg>
              <input
                type="range"
                min="50"
                max="750"
                value={pixels}
                onChange={this.sliderChange}
                id="slider"
                className="slider mt-3 ml-2"
              />
            </div>
            <div className="h-80 w-10/12"></div>
          </div>
        );
      } else {
        iconClassnames += "";
        content = (
          <div className="" style={spacerStyle}>
            <div className={iconClassnames}>
              <svg
                className="m-1 w-5 h-5 text-red-500 fill-current hover:text-red-700 cursor-pointer hover:bg-gray-100 rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={this.deleteClick}
              >
                <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
              </svg>
              <input
                type="range"
                min="50"
                max="750"
                value={pixels}
                onChange={this.sliderChange}
                id="slider"
                className="slider mt-3 ml-2"
              />
            </div>
            <div className="h-80 w-10/12"></div>
          </div>
        );
      }
    } else {
      content = <div style={spacerStyle}></div>;
    }

    return (
      <div
        onMouseEnter={this.toggleHoverOn}
        onMouseLeave={this.toggleHoverOff}
        onClick={this.onMouseClick}
        style={spacerContainerStyle}
      >
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { updateSpacer, deleteSection })(
  Spacersection
);
