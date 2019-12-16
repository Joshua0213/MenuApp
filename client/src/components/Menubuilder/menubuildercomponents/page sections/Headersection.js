import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteSection } from "../../../../actions/menubuilderActions";

import Headerchangeoptions from "./Headerchangeoptions";

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
    this.mouseIsOver = this.mouseIsOver.bind(this);
  }

  mouseIsOver() {
    this.setState(prev => {
      if (this.state.hover === false) return { hover: true };
    });
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
    let pageArr = this.props.menuArr.menuArr;
    let { hideIcons } = this.props.menuArr;
    let headerStyles = this.props.globalState.globalStyles.headers;
    let sectionArr = pageArr[this.props.pageLocation].Content;
    let pagetitle = sectionArr[this.props.sectionLocation].Value;
    let settings = sectionArr[this.props.sectionLocation].Settings;
    let {
      InheritfontSize,
      hasBackgroundColor,
      fontSize,
      backgroundColor,
      width,
      justifySelf
    } = settings;
    let { GfontSize } = headerStyles;
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
    let headerContainerStyle = {
      fontSize: fontSize,
      display: "flex",
      width: "100%",
      justifyContent: `${justifySelf}`
    };
    let headerStyle = {
      backgroundColor: `${backgroundColor}`,
      width: `${width}%`,
      display: "flex",
      justifyContent: "flex-end"
    };
    let iconClassnames = "flex flex-row absolute ml-2";
    let content;
    if (this.state.hover) {
      iconClassnames += " bg-blue-200 rounded-full";
    } else {
      iconClassnames += " ";
    }

    if (this.state.options) {
      content = (
        <div className=" flex justify-center">
          <Headerchangeoptions
            toggle={this.toggleOptions}
            pageLocation={this.props.pageLocation}
            sectionLocation={this.props.sectionLocation}
            header={pagetitle}
          />
        </div>
      );
    } else {
      if (!hideIcons) {
        content = (
          <div
            style={headerStyle}
            onMouseEnter={this.toggleHoverOn}
            onMouseLeave={this.toggleHoverOff}
            onClick={this.onMouseClick}
            onPointerOver={this.mouseIsOver}
          >
            <div className={iconClassnames}>
              <svg
                className="m-1 w-5 h-5 text-red-500 fill-current hover:text-red-700 cursor-pointer rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={this.deleteClick}
              >
                <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
              </svg>
              <svg
                className="m-1 w-5 h-5 text-orange-400 fill-current hover:text-yellow-500 cursor-pointer rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={this.toggleOptions}
              >
                <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
              </svg>
            </div>
            <h1 className="headerjs opacity-100">{pagetitle}</h1>
          </div>
        );
      } else {
        content = (
          <h1 style={headerStyle} className="headerjs opacity-100">
            {pagetitle}
          </h1>
        );
      }
    }

    return (
      <div style={headerContainerStyle} className="">
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr,
  globalState: state.globalstyles
});

export default connect(mapStateToProps, { deleteSection })(Headersection);
