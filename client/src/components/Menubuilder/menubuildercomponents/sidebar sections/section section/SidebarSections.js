import React, { Component } from "react";
import { connect } from "react-redux";

import SidebarSectionsItem from "./SidebarSectionsItem";
import Sectionitemmanipulator from "./Sectionitemmanipulator";

class SidebarSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      focus: 0
    };
    this.toggleClick = this.toggleClick.bind(this);
    this.changeSectionFocus = this.changeSectionFocus.bind(this);
  }

  changeSectionFocus(newFocus) {
    this.setState(() => {
      return { focus: newFocus };
    });
  }

  toggleClick() {
    this.setState(prevState => {
      return { hidden: !prevState.hidden };
    });
  }
  render() {
    const sections = this.props.menuArr.menuArr[
      this.props.menuArr.pageFocus
    ].Content.map((section, index) => {
      return (
        <div id="Navbarcanvas_container" key={index}>
          <SidebarSectionsItem
            Value={section.Value}
            Type={section.Type}
            focus={this.state.focus}
            myFocus={index}
            changeFocus={this.changeSectionFocus}
          />
        </div>
      );
    });
    let content;
    const loadingArr = this.props.menuArr.loadingArr;
    if (loadingArr) {
    } else {
      let focus = this.props.menuArr.pageFocus;
      let title = this.props.menuArr.menuArr[focus].Title;
      if (this.state.hidden === true) {
        content = (
          <div
            className="bg-gray-300 border-gray-500 border-2 cursor-pointer  hover:border-gray-600 h-7 w-11/12 mt-1 rounded-full flex justify-around"
            onClick={this.toggleClick}
          >
            <div className="">{title}</div>
          </div>
        );
      } else {
        content = (
          <div className="bg-gray-300 mt-1  hover:border-gray-600 border-gray-500 border-2 w-11/12 rounded-lg flex flex-col items-center ">
            <div
              className="cursor-pointer bg-gray-300 rounded-full border-2 border-gray-500 hover:border-gray-600 w-11/12 text-center mt-1"
              onClick={this.toggleClick}
            >
              <div className="">{title}</div>
            </div>
            <div className="w-11/12 h-64 overflow-auto bg-gray-100 my-1 rounded-lg border-2 border-gray-400 hover:border-gray-500">
              {sections}
            </div>
            <Sectionitemmanipulator
              sectionFocus={this.state.focus}
              pageFocus={focus}
              changeFocus={this.changeSectionFocus}
            />
          </div>
        );
      }
    }
    return <div className="w-full flex justify-center z-10">{content}</div>;
  }
}

const mapStateToProps = state => ({
  menuArr: state.menuarr
});

export default connect(mapStateToProps, {})(SidebarSections);
