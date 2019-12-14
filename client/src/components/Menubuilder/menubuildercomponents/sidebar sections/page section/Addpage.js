import React, { Component } from "react";
import { connect } from "react-redux";

import {
  addMenuPage,
  setPageFocus
} from "../../../../../actions/menubuilderActions";

import TextFieldGroupSmall from "../../../../Common/TextFieldGroupSmall";
import Backbutton from "../../../../Common/Backbutton";

class Addpage extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: ""
    };
    this.onChange = this.onChange.bind(this);
    this.addPage = this.addPage.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  setFocus() {
    this.props.setPageFocus(this.props.menuArr.menuArr.length);
  }
  addPage() {
    this.props.toggleAddPage();
    this.props.addMenuPage(this.props.menuArr.menuArr, this.state.pageTitle);
    this.setFocus();
  }

  render() {
    let content = "";
    let taken = false;
    let menuArr = this.props.menuArr.menuArr;
    let addPageClick = this.addPage;
    let saveclassName =
      "bg-green-300 hover:bg-green-400 py-px text-green-600 hover:text-green-800 px-2 m-px rounded border-2 border-gray-400 hover:border-gray-500 cursor-pointer";
    menuArr.forEach(element => {
      if (this.state.pageTitle === element.Title) {
        taken = true;
      }
    });
    if (this.state.pageTitle === "" || taken) {
      saveclassName =
        "bg-gray-300 py-px text-gray-600 px-2 m-px rounded border-2 border-gray-400 cursor-not-allowed";
      addPageClick = null;
    }
    if (!this.props.hidden) {
      content = (
        <div className="rounded flex flex-col items-center py-1 ">
          <div className="h-56 rounded-lg mb-1 bg-gray-200 w-11/12 border-2 border-gray-500 hover:border-gray-500">
            <div className="mt-4 mb-3 text-center text-lg">Page Title: </div>
            <TextFieldGroupSmall
              className=""
              placeholder="New Menu Page"
              name="pageTitle"
              type="name"
              value={this.state.pageTitle}
              onChange={this.onChange}
            />
          </div>
          <div className="bg-gray-200 rounded-lg flex justify-around w-11/12 border-2 border-gray-500 hover:border-gray-500">
            <Backbutton toggle={this.props.toggleAddPage} />
            <div className={saveclassName}>
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={addPageClick}
              >
                <path d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 0 1 .27-1.951 1.392 1.392 0 0 1 1.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 0 1 1.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 0 1-1.12.656c-.022.002-.042.002-.064.002z" />
              </svg>
            </div>
          </div>
        </div>
      );
    } else {
      content = "";
    }

    return <div className="w-full bg-gray-300 rounded">{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, { addMenuPage, setPageFocus })(Addpage);
