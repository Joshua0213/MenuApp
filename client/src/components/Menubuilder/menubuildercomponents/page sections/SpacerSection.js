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
      hover: false,
      slider: this.props.menuArr.menuArr[this.props.pageLocation].Content[
        this.props.sectionLocation
      ].Value
    };
    this.toggleHoverOff = this.toggleHoverOff.bind(this);
    this.toggleHoverOn = this.toggleHoverOn.bind(this);
    this.sliderChange = this.sliderChange.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.mouseIsOver = this.mouseIsOver.bind(this);
  }

  mouseIsOver() {
    this.setState(prev => {
      if (this.state.hover === false) return { hover: true };
    });
  }

  componentDidMount() {
    let pixels = this.props.menuArr.menuArr[this.props.pageLocation].Content[
      this.props.sectionLocation
    ].Value;
    let spacersection = document.getElementById(
      "s" + this.props.pageLocation + "" + this.props.sectionLocation
    );
    spacersection.style.height = `${pixels}px`;
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
        this.state.slider
    );
    this.props.updateSpacer(
      this.props.menuArr.menuArr,
      this.props.pageLocation,
      this.props.sectionLocation,
      this.state.slider
    );
    this.setState({ slider: event.target.value });
    let spacersection = document.getElementById(
      "s" + this.props.pageLocation + "" + this.props.sectionLocation
    );
    spacersection.style.height = `${event.target.value}px`;
  }

  render() {
    let id = "s" + this.props.pageLocation + "" + this.props.sectionLocation;
    let containerClassnames = "";
    let iconClassnames = "flex flex-row absolute mt-2 ml-2";
    if (this.state.hover) {
      containerClassnames += " bg-gray-100 rounded-lg border-2 border-gray-100";
    } else {
      iconClassnames += " opacity-50";
    }
    return (
      <div
        className={containerClassnames}
        onMouseEnter={this.toggleHoverOn}
        onMouseLeave={this.toggleHoverOff}
        onPointerOver={this.mouseIsOver}
        onClick={this.onMouseClick}
        id={id}
      >
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
            value={this.state.slider}
            onChange={this.sliderChange}
            id="slider"
            className="slider mt-3 ml-6"
          />
        </div>
        <div className="h-80 w-10/12"></div>
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
