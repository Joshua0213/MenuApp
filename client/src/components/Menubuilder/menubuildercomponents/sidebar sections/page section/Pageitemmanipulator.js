import React, { Component } from "react";
import { connect } from "react-redux";

import {
  deleteMenuPage,
  moveMenuPage,
  setPageFocus
} from "../../../../../actions/menubuilderActions";

class Pageitemmanipulator extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
  }
  setFocus(v) {
    this.props.setPageFocus(this.props.focus + v);
  }
  onDelete() {
    this.props.setPageFocus(0);
    this.props.deleteMenuPage(this.props.menuArr.menuArr, this.props.focus);
  }
  // addPage() {
  //   this.props.addMenuPage();
  //   this.props.setPageFocus(this.props.menuArr.menuArr.length);
  // }
  moveUp() {
    this.setFocus(-1);
    this.props.moveMenuPage(this.props.menuArr.menuArr, this.props.focus, 1);
  }
  moveDown() {
    this.setFocus(1);
    this.props.moveMenuPage(this.props.menuArr.menuArr, this.props.focus, 0);
  }

  render() {
    let { focus } = this.props;
    let menuArr = this.props.menuArr.menuArr;
    let addIconClasses =
      "w-11/12 bg-gray-100 mb-1 rounded-lg border-2 border-gray-400 hover:border-gray-500 flex justify-around align-items";
    let upIconClasses = " ";
    let downIconClasses = "";
    let deleteIconClasses = "";
    let upClick = this.moveUp;
    let downClick = this.moveDown;
    let deleteClick = this.onDelete;

    //check if first item
    if (focus === 0) {
      upIconClasses =
        "m-1 w-5 h-5 text-gray-400 fill-current hover:bg-gray-100 rounded-lg";
      upClick = null;
    } else {
      upIconClasses =
        "m-1 w-5 h-5 text-green-400 fill-current hover:text-green-600 cursor-pointer hover:bg-gray-100 rounded-lg";
    }
    //check if last item
    if (focus === menuArr.length - 1) {
      downIconClasses =
        "m-1 w-5 h-5 text-gray-400 fill-current hover:bg-gray-100 rounded-lg";
      downClick = null;
    } else {
      downIconClasses =
        "m-1 w-5 h-5 text-green-400 fill-current hover:text-green-600 cursor-pointer hover:bg-gray-100 rounded-lg";
    }
    //check if only
    if (menuArr.length === 1) {
      deleteIconClasses =
        "m-1 w-5 h-5 text-gray-400 fill-current hover:bg-gray-100 rounded-lg";
      deleteClick = null;
    } else {
      deleteIconClasses =
        "m-1 w-5 h-5 text-red-500 fill-current hover:text-red-700 cursor-pointer hover:bg-gray-100 rounded-lg";
    }

    return (
      <div className={addIconClasses}>
        <svg
          className="m-1 w-5 h-5 text-green-500 fill-current hover:text-green-700 cursor-pointer hover:bg-gray-100 rounded-lg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => this.props.toggleAddPage()}
        >
          <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
        </svg>
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
          className="m-1 w-5 h-5 text-orange-400 fill-current hover:text-yellow-500 cursor-pointer hover:bg-gray-100 rounded-lg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => this.props.toggleRenamePage()}
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

export default connect(mapStateToProps, {
  deleteMenuPage,
  moveMenuPage,
  setPageFocus
})(Pageitemmanipulator);
