import React, { Component } from "react";
import { connect } from "react-redux";

import { moveSection } from "../../../../../actions/menubuilderActions";

class Sectionitemmanipulator extends Component {
  constructor(props) {
    super(props);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.toggleFocus = this.toggleFocus.bind(this);
  }

  toggleFocus(v) {
    this.props.changeFocus(this.props.sectionFocus + v);
  }

  moveUp() {
    this.toggleFocus(-1);
    this.props.moveSection(
      this.props.menuArr.menuArr,
      this.props.pageFocus,
      this.props.sectionFocus,
      1
    );
  }

  moveDown() {
    this.toggleFocus(1);
    this.props.moveSection(
      this.props.menuArr.menuArr,
      this.props.pageFocus,
      this.props.sectionFocus,
      0
    );
  }

  render() {
    let menuArr = this.props.menuArr.menuArr;

    let { sectionFocus } = this.props;
    let addIconClasses =
      "w-11/12 bg-gray-100 mb-1 rounded-lg border-2 border-gray-400 hover:border-gray-500 flex justify-around px-2 align-items shadow";
    let upIconClasses = "";
    let downIconClasses =
      "m-1 w-5 h-5 text-green-400 fill-current hover:text-green-600 cursor-pointer hover:bg-gray-100 rounded-lg ";
    let deleteIconClasses =
      "m-1 w-5 h-5 text-red-500 fill-current hover:text-red-700 cursor-pointer hover:bg-gray-100 rounded-lg ";

    let settingsClasses =
      "m-1 w-5 h-5 text-orange-400 fill-current hover:text-yellow-500 cursor-pointer hover:bg-gray-100 rounded-lg";
    let upClick = this.moveUp;
    let downClick = this.moveDown;
    let toggleSettings = this.props.toggleShowSettings;
    let deleteClick = null;

    //check if first item
    if (sectionFocus === 0) {
      upIconClasses =
        "m-1 w-5 h-5 text-gray-500 fill-current hover:bg-gray-100 rounded-lg";
      upClick = null;
    } else {
      upIconClasses =
        "m-1 w-5 h-5 text-green-400 fill-current hover:text-green-600 cursor-pointer hover:bg-gray-100 rounded-lg";
    }

    //check if last item
    if (sectionFocus === menuArr[this.props.pageFocus].Content.length - 1) {
      downIconClasses =
        "m-1 w-5 h-5 text-gray-500 fill-current hover:bg-gray-100 rounded-lg";
      downClick = null;
    } else {
      downIconClasses =
        "m-1 w-5 h-5 text-green-400 fill-current hover:text-green-600 cursor-pointer hover:bg-gray-100 rounded-lg";
    }

    //check if out of focus
    if (
      sectionFocus === null ||
      sectionFocus > menuArr[this.props.pageFocus].Content.length
    ) {
      downIconClasses =
        "m-1 w-5 h-5 text-gray-500 fill-current hover:bg-gray-100 rounded-lg";
      downClick = null;
      upIconClasses =
        "m-1 w-5 h-5 text-gray-500 fill-current hover:bg-gray-100 rounded-lg";
      upClick = null;
      deleteIconClasses =
        "m-1 w-5 h-5 text-gray-500 fill-current hover:bg-gray-100 rounded-lg";
      deleteClick = null;
      settingsClasses =
        "m-1 w-5 h-5 text-gray-500 fill-current hover:bg-gray-100 rounded-lg";
      toggleSettings = null;
    }
    return (
      <div className={addIconClasses}>
        <svg
          className={upIconClasses}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={upClick}
        >
          <path d="M7 10v8h6v-8h5l-8-8-8 8h5z" />
        </svg>
        <svg
          className={downIconClasses}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={downClick}
        >
          <path d="M7 10V2h6v8h5l-8 8-8-8h5z" />
        </svg>
        <svg
          className={settingsClasses}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={toggleSettings}
        >
          <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
        </svg>
        <svg
          className={deleteIconClasses}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={deleteClick}
        >
          <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
        </svg>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { moveSection })(
  Sectionitemmanipulator
);
