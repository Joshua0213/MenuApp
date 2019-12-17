import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updateSpacer,
  deleteSection
} from "../../../../actions/menubuilderActions";

class Spacersection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
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
    console.log(
      "setting value at page: " +
        this.props.pageLocation +
        " and section: " +
        this.props.sectionLocation +
        " to: " +
        event.target.value
    );
    this.props.updateSpacer(
      this.props.menuArr.menuArr,
      this.props.pageLocation,
      this.props.sectionLocation,
      event.target.value
    );
  }

  render() {
    let { pageLocation, sectionLocation } = this.props;
    let pixels = this.props.menuArr.menuArr[pageLocation].Content[
      sectionLocation
    ].Value;

    let {
      hasBackgroundColor,
      backgroundColor,
      width,
      justifySelf,
      borderColor,
      borderStyle,
      borderWidth,
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
      paddingControl
    } = this.props.menuArr.menuArr[pageLocation].Content[
      sectionLocation
    ].Settings;

    let spacerBackground;
    if (hasBackgroundColor) {
      spacerBackground = backgroundColor;
    } else {
      spacerBackground = "rgba(0,0,0,0)";
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
    let spacerStyle = {
      height: `${pixels}px`,
      backgroundColor: spacerBackground,
      width: `${width}%`,
      borderColor: borderColor,
      borderStyle: borderStyle,
      borderWidth: `${borderWidth}px`,
      marginRight: `${marginRight}px`,
      marginTop: `${marginTop}px`,
      marginBottom: `${marginBottom}px`,
      marginLeft: `${marginLeft}px`,
      paddingRight: `${paddingRight}px`,
      paddingTop: `${paddingTop}px`,
      paddingBottom: `${paddingBottom}px`,
      paddingLeft: `${paddingLeft}px`
    };
    let spacerContainerStyle = {
      display: "flex",
      width: "100%",
      justifyContent: `${justifySelf}`,

      margin: `${margin}px`
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
      } else {
        iconClassnames += "";
        content = (
          <div className="w-full" style={spacerStyle}>
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
