import React, { Component } from "react";
import { connect } from "react-redux";

import { renameMenuPage } from "../../../../../actions/menubuilderActions";

import TextFieldGroupSmall from "../../../../Common/TextFieldGroupSmall";
import Backbutton from "../../../../Common/Backbutton";

class Renamepage extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: ""
    };
    this.onChange = this.onChange.bind(this);
    this.renamePage = this.renamePage.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  renamePage() {
    this.props.toggleRenamePage();
    this.props.renameMenuPage(
      this.props.menuArr.menuArr,
      this.state.pageTitle,
      this.props.menuArr.pageFocus
    );
  }

  render() {
    let content = "";
    let menuArr = this.props.menuArr.menuArr;
    let taken = false;
    menuArr.forEach(element => {
      if (this.state.pageTitle === element.Title) {
        taken = true;
      }
    });
    let renamePageClick = this.renamePage;
    let saveclassName =
      "bg-green-300 hover:bg-green-400 py-px text-green-600 hover:text-green-800 px-2 m-px rounded border-2 border-gray-400 hover:border-gray-500 cursor-pointer";
    if (this.state.pageTitle === "" || taken) {
      saveclassName =
        "bg-gray-300 py-px text-gray-600 px-2 m-px rounded border-2 border-gray-400 cursor-not-allowed";
      renamePageClick = null;
    }
    if (!this.props.hidden) {
      content = (
        <div className="rounded flex flex-col items-center py-1 ">
          <div className="h-56 rounded-lg mb-1 bg-gray-200 w-11/12 border-2 border-gray-500 hover:border-gray-500">
            <div className="mt-4 mb-3 text-center text-lg">
              <span className="text-center text-lg">Rename Page:</span>
              <div className='mx-3 bg-gray-300 border-gray-500 cursor-pointer border-4 flex-grow flex mx-1 my-1 rounded flex justify-center p-px"'>
                {menuArr[this.props.menuArr.pageFocus].Title}
              </div>
            </div>
            <TextFieldGroupSmall
              className=""
              placeholder="Page Name"
              name="pageTitle"
              type="name"
              value={this.state.pageTitle}
              onChange={this.onChange}
            />
          </div>
          <div className="bg-gray-200 rounded-lg flex justify-around w-11/12 border-2 border-gray-500 hover:border-gray-500">
            <Backbutton toggle={this.props.toggleRenamePage} />
            <div className={saveclassName}>
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={renamePageClick}
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

export default connect(mapStateToProps, { renameMenuPage })(Renamepage);
