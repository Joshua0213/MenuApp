import React, { Component } from "react";
import { connect } from "react-redux";

import SidebarPagesItem from "./SidebarPagesItem";
import Pageitemmanipulator from "./Pageitemmanipulator";
import Addpage from "./Addpage";
import Renamepage from "./Renamepage";

class SidebarPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      addPageHidden: true,
      renamePageHidden: true
    };
    this.toggleClick = this.toggleClick.bind(this);
    this.toggleAddPage = this.toggleAddPage.bind(this);
    this.toggleRenamePage = this.toggleRenamePage.bind(this);
  }
  toggleClick() {
    this.setState(prevState => {
      return { hidden: !prevState.hidden };
    });
  }
  toggleAddPage() {
    console.log("toggle");
    this.setState(prevState => {
      return { addPageHidden: !prevState.addPageHidden };
    });
  }

  toggleRenamePage() {
    console.log("toggle");
    this.setState(prevState => {
      return { renamePageHidden: !prevState.renamePageHidden };
    });
  }
  render() {
    let content;

    const pages = this.props.menuObj.map((page, index) => {
      return (
        <div id="Navbarcanvas_container" key={index}>
          <SidebarPagesItem
            Title={page.Title}
            focus={this.props.menuArr.pageFocus}
            myFocus={index}
          />
        </div>
      );
    });

    if (this.state.hidden === true) {
      content = (
        <div
          className="bg-gray-300 border-gray-500 border-2 cursor-pointer hover:border-gray-600 h-7 w-11/12 mt-1 rounded-full flex justify-around"
          onClick={this.toggleClick}
        >
          <div className="">{this.props.name}</div>
        </div>
      );
    } else {
      if (!this.state.addPageHidden) {
        content = (
          <div className="bg-gray-300 mt-1 hover:border-gray-600 border-gray-500 border-2 w-11/12 rounded-lg flex flex-col items-center ">
            <Addpage
              hidden={this.state.addPageHidden}
              menuObj={this.props.menuObj}
              toggleAddPage={this.toggleAddPage}
            />
          </div>
        );
      } else if (!this.state.renamePageHidden) {
        content = (
          <div className="bg-gray-300 mt-1 hover:border-gray-600 border-gray-500 border-2 w-11/12 rounded-lg flex flex-col items-center ">
            <Renamepage
              focus={this.props.menuArr.pageFocus}
              hidden={this.state.renamePageHidden}
              menuObj={this.props.menuObj}
              toggleRenamePage={this.toggleRenamePage}
            />
          </div>
        );
      } else {
        content = (
          <div className="bg-gray-300 mt-1 hover:border-gray-600 border-gray-500 border-2 w-11/12 rounded-lg flex flex-col items-center ">
            <div
              className="cursor-pointer bg-gray-300 rounded-full border-2 border-gray-500 hover:border-gray-600 w-11/12 text-center mt-1"
              onClick={this.toggleClick}
            >
              <div className="">{this.props.name}</div>
            </div>
            <div className="w-11/12 h-48 overflow-auto bg-gray-100 my-1 rounded-lg border-2 border-gray-400 hover:border-gray-500">
              {pages}
            </div>
            <Pageitemmanipulator
              focus={this.props.menuArr.pageFocus}
              menuObj={this.props.menuObj}
              toggleAddPage={this.toggleAddPage}
              toggleRenamePage={this.toggleRenamePage}
            />
          </div>
        );
      }
    }
    return <div className="w-full flex justify-center  z-10">{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(SidebarPages);
